import connect from "@vf-ui/graphql-client-holochain";

/**
 * Sets up the hREA environmet for the prototype to function appropriately.
 */
const main = async () => {
  const client = await connect();

  client.mutation();
};

main();
