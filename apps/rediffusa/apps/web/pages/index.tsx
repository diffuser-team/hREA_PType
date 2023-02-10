import { useForm } from "react-hook-form";
import { useMutation, useApolloClient, gql } from "@apollo/client";

interface WorkForm {
  name: string;
  artist: string;
  iswc: string;
  comment: string;
}

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

export default function Web() {
  const client = useApolloClient();
  const { register, handleSubmit } = useForm<WorkForm>();
  const [createWork, { data, loading, error }] = useMutation(CREATE_WORKS);

  const onSubmit = async (data: WorkForm) => {
    const { name, iswc, artist, comment } = data;
    const res = await createWork({
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
    console.log("sheeeiiiiit");
    console.log(res);
  };

  const thing = useMutation(CREATE_WORKS);
  console.log(thing!);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input placeholder="artist" {...register("artist")} />
          <label>
            {
              "Just make sure you type the name in right, I'm not pulling any data here"
            }
          </label>
          <input placeholder="iswc" {...register("iswc")} />
          <input placeholder="name" {...register("name")} />
          <input placeholder="comment" {...register("comment")} />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
