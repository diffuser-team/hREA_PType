/**
 * GraphQL client interface for Holochain connection
 *
 * @package  hREA GraphQL client
 * @since    2020-07-14
 */

import { InMemoryCache, ApolloClient } from '@apollo/client'
import { SchemaLink } from '@apollo/link-schema'

import bindSchema, {
  autoConnect,
  BindSchemaOptions,
  DNAIdMappings,
  ExtensionOptions,
  ResolverOptions
} from '@valueflows/vf-graphql-holochain'

/* For external client. Are optional because
   `conductorUri` and `appID`
   may be autodetected or taken from environment variables
   and `dnaConfig` discovered through a functional connection
   to holochain
*/
interface AutoConnectionOptions {
  dnaConfig?: DNAIdMappings
  conductorUri?: string
  adminConductorUri?: string
  appID?: string
}

export type ClientOptions = Pick<ResolverOptions, 'traceAppSignals'>
  & Pick<BindSchemaOptions, 'enabledVFModules'>
  & ExtensionOptions
  & AutoConnectionOptions

/*
  This method creates the GraphQLSchema from
  the given options, and then builds an Graphql Apollo Client
  with the basic InMemoryCache with that schema.
*/
export async function initGraphQLClient(options: BindSchemaOptions) {
  const schema = await bindSchema(options)

  return new ApolloClient({
    cache: new InMemoryCache(),
    // @ts-ignore
    link: new SchemaLink({ schema })
  })
}

/*
  This is a zero-config option method (and the main export)
  where you can generate a GraphQL Apollo Client
  and have all configuration handled internally for you.
  It is intended for the less advanced/customized use cases,
  but still offers basic levels of configuration.
*/
async function connect(options: ClientOptions = {}) {
  let bindSchemaOptions: BindSchemaOptions
  // autodetect `CellId`s if the config is missing some of the necessary values
  // also autodetect `conductorUri` `adminConductorUri` and `appID` since the caller can leave those undefined
  // in the options object (and pass them instead from either 
  // environment variables or introspected from the Holochain Launcher)
  if (!options.dnaConfig || !options.conductorUri || !options.adminConductorUri || !options.appID) {
    console.log("apparantly we are doing their job for them now")
    console.log(options)
    let { dnaConfig, conductorUri, adminConductorUri, appId } = await autoConnect(
      options.conductorUri,
      options.adminConductorUri,
      options.appID,
      // traceAppSignals needs to be passed during
      // the first initialization of the AppWebsocket
      options.traceAppSignals
    )
    bindSchemaOptions = {
      ...options,
      dnaConfig,
      conductorUri,
      adminConductorUri,
      appId,
    }
  } else {
    // the difference between BindSchemaOptions and ClientOptions
    // is that for BindSchemaOptions `dnaConfig` and `conductorUri` must
    // be defined, and in this logical branch
    // we've established that, making this a safe
    // type cast
    bindSchemaOptions = {
      ...options as BindSchemaOptions
    }
  }

  return await initGraphQLClient(bindSchemaOptions)
}

export default connect
