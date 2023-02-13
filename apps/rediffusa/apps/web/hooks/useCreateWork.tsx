import { useMutation, gql, ApolloError } from "@apollo/client";
import useHreaClient from "./useHrea";

const CREATE_WORKS = gql`
  mutation CreateWork($input: [WorkCreateInput!]!, $where: ArtistWhere) {
    createWorks(input: $input) {
      works {
        name
        iswc
        artist(where: $where) {
          name
          gender {
            name
          }
        }
      }
    }
  }
`;

const useCreateWork = (): [
  (name: string, iswc: string, comment: string, artist: string) => Promise<any>,
  { data: any; loading: boolean; error: ApolloError | undefined }
] => {
  const [createWork, { data, loading, error }] = useMutation(CREATE_WORKS);

  const { loading: hreaLoad, error: hreaErr, client } = useHreaClient();

  if (hreaLoad || hreaErr || !client)
    return [
      (name: string, iswc: string, comment: string, artist: string) =>
        Promise.resolve("not ready!"),
      {
        data: {},
        error: undefined,
        loading: true,
      },
    ];

  const createWorkEverywhere = async (
    name: string,
    iswc: string,
    comment: string,
    artist: string
  ) => {
    return createWork({
      variables: {
        input: {
          name,
          iswc,
          comment,
          artist: {
            connect: {
              overwrite: false,
              where: {
                node: {
                  name_CONTAINS: artist,
                },
              },
            },
          },
        },
      },
    });

    // TODO work economic event here
    // client.mutate()
  };

  return [createWorkEverywhere, { data, loading, error }];
};

export default useCreateWork;
