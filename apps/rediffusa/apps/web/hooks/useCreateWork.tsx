import { useMutation, gql, ApolloError } from "@apollo/client";

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
  return [
    (name: string, iswc: string, comment: string, artist: string) =>
      createWork({
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
      }),
    { data, loading, error },
  ];
};

export default useCreateWork;
