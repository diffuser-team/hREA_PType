/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Area = {
  __typename?: 'Area';
  name: Scalars['String'];
  type: AreaType;
  typeAggregate?: Maybe<AreaAreaTypeTypeAggregationSelection>;
  typeConnection: AreaTypeConnection;
};


export type AreaTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<AreaTypeOptions>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type AreaTypeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type AreaTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AreaTypeConnectionSort>>;
  where?: InputMaybe<AreaTypeConnectionWhere>;
};

export type AreaAggregateSelection = {
  __typename?: 'AreaAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type AreaAreaTypeTypeAggregationSelection = {
  __typename?: 'AreaAreaTypeTypeAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AreaAreaTypeTypeNodeAggregateSelection>;
};

export type AreaAreaTypeTypeNodeAggregateSelection = {
  __typename?: 'AreaAreaTypeTypeNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type AreaConnectInput = {
  type?: InputMaybe<AreaTypeConnectFieldInput>;
};

export type AreaCreateInput = {
  name: Scalars['String'];
  type?: InputMaybe<AreaTypeFieldInput>;
};

export type AreaDeleteInput = {
  type?: InputMaybe<AreaTypeDeleteFieldInput>;
};

export type AreaDisconnectInput = {
  type?: InputMaybe<AreaTypeDisconnectFieldInput>;
};

export type AreaEdge = {
  __typename?: 'AreaEdge';
  cursor: Scalars['String'];
  node: Area;
};

export type AreaOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more AreaSort objects to sort Areas by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AreaSort>>;
};

export type AreaRelationInput = {
  type?: InputMaybe<AreaTypeCreateFieldInput>;
};

/** Fields to sort Areas by. The order in which sorts are applied is not guaranteed when specifying many fields in one AreaSort object. */
export type AreaSort = {
  name?: InputMaybe<SortDirection>;
};

export type AreaType = {
  __typename?: 'AreaType';
  description: Scalars['String'];
  location?: Maybe<Geo>;
  locationAggregate?: Maybe<AreaTypeGeoLocationAggregationSelection>;
  locationConnection: AreaTypeLocationConnection;
  name: Scalars['String'];
  parent?: Maybe<AreaType>;
  parentAggregate?: Maybe<AreaTypeAreaTypeParentAggregationSelection>;
  parentConnection: AreaTypeParentConnection;
};


export type AreaTypeLocationArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<GeoOptions>;
  where?: InputMaybe<GeoWhere>;
};


export type AreaTypeLocationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<GeoWhere>;
};


export type AreaTypeLocationConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AreaTypeLocationConnectionSort>>;
  where?: InputMaybe<AreaTypeLocationConnectionWhere>;
};


export type AreaTypeParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<AreaTypeOptions>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type AreaTypeParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type AreaTypeParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AreaTypeParentConnectionSort>>;
  where?: InputMaybe<AreaTypeParentConnectionWhere>;
};

export type AreaTypeAggregateInput = {
  AND?: InputMaybe<Array<AreaTypeAggregateInput>>;
  OR?: InputMaybe<Array<AreaTypeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AreaTypeNodeAggregationWhereInput>;
};

export type AreaTypeAggregateSelection = {
  __typename?: 'AreaTypeAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type AreaTypeAreaTypeParentAggregationSelection = {
  __typename?: 'AreaTypeAreaTypeParentAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AreaTypeAreaTypeParentNodeAggregateSelection>;
};

export type AreaTypeAreaTypeParentNodeAggregateSelection = {
  __typename?: 'AreaTypeAreaTypeParentNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type AreaTypeConnectFieldInput = {
  connect?: InputMaybe<AreaTypeConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<AreaTypeConnectWhere>;
};

export type AreaTypeConnectInput = {
  location?: InputMaybe<AreaTypeLocationConnectFieldInput>;
  parent?: InputMaybe<AreaTypeParentConnectFieldInput>;
};

export type AreaTypeConnectWhere = {
  node: AreaTypeWhere;
};

export type AreaTypeConnection = {
  __typename?: 'AreaTypeConnection';
  edges: Array<AreaTypeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AreaTypeConnectionSort = {
  node?: InputMaybe<AreaTypeSort>;
};

export type AreaTypeConnectionWhere = {
  AND?: InputMaybe<Array<AreaTypeConnectionWhere>>;
  OR?: InputMaybe<Array<AreaTypeConnectionWhere>>;
  node?: InputMaybe<AreaTypeWhere>;
  node_NOT?: InputMaybe<AreaTypeWhere>;
};

export type AreaTypeCreateFieldInput = {
  node: AreaTypeCreateInput;
};

export type AreaTypeCreateInput = {
  description: Scalars['String'];
  location?: InputMaybe<AreaTypeLocationFieldInput>;
  name: Scalars['String'];
  parent?: InputMaybe<AreaTypeParentFieldInput>;
};

export type AreaTypeDeleteFieldInput = {
  delete?: InputMaybe<AreaTypeDeleteInput>;
  where?: InputMaybe<AreaTypeConnectionWhere>;
};

export type AreaTypeDeleteInput = {
  location?: InputMaybe<AreaTypeLocationDeleteFieldInput>;
  parent?: InputMaybe<AreaTypeParentDeleteFieldInput>;
};

export type AreaTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<AreaTypeDisconnectInput>;
  where?: InputMaybe<AreaTypeConnectionWhere>;
};

export type AreaTypeDisconnectInput = {
  location?: InputMaybe<AreaTypeLocationDisconnectFieldInput>;
  parent?: InputMaybe<AreaTypeParentDisconnectFieldInput>;
};

export type AreaTypeEdge = {
  __typename?: 'AreaTypeEdge';
  cursor: Scalars['String'];
  node: AreaType;
};

export type AreaTypeFieldInput = {
  connect?: InputMaybe<AreaTypeConnectFieldInput>;
  create?: InputMaybe<AreaTypeCreateFieldInput>;
};

export type AreaTypeGeoLocationAggregationSelection = {
  __typename?: 'AreaTypeGeoLocationAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<AreaTypeGeoLocationNodeAggregateSelection>;
};

export type AreaTypeGeoLocationNodeAggregateSelection = {
  __typename?: 'AreaTypeGeoLocationNodeAggregateSelection';
  alt: StringAggregateSelectionNullable;
  lat: StringAggregateSelectionNonNullable;
  lng: StringAggregateSelectionNonNullable;
};

export type AreaTypeLocationAggregateInput = {
  AND?: InputMaybe<Array<AreaTypeLocationAggregateInput>>;
  OR?: InputMaybe<Array<AreaTypeLocationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AreaTypeLocationNodeAggregationWhereInput>;
};

export type AreaTypeLocationConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<GeoConnectWhere>;
};

export type AreaTypeLocationConnection = {
  __typename?: 'AreaTypeLocationConnection';
  edges: Array<AreaTypeLocationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AreaTypeLocationConnectionSort = {
  node?: InputMaybe<GeoSort>;
};

export type AreaTypeLocationConnectionWhere = {
  AND?: InputMaybe<Array<AreaTypeLocationConnectionWhere>>;
  OR?: InputMaybe<Array<AreaTypeLocationConnectionWhere>>;
  node?: InputMaybe<GeoWhere>;
  node_NOT?: InputMaybe<GeoWhere>;
};

export type AreaTypeLocationCreateFieldInput = {
  node: GeoCreateInput;
};

export type AreaTypeLocationDeleteFieldInput = {
  where?: InputMaybe<AreaTypeLocationConnectionWhere>;
};

export type AreaTypeLocationDisconnectFieldInput = {
  where?: InputMaybe<AreaTypeLocationConnectionWhere>;
};

export type AreaTypeLocationFieldInput = {
  connect?: InputMaybe<AreaTypeLocationConnectFieldInput>;
  create?: InputMaybe<AreaTypeLocationCreateFieldInput>;
};

export type AreaTypeLocationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AreaTypeLocationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AreaTypeLocationNodeAggregationWhereInput>>;
  alt_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  alt_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  alt_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  alt_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  alt_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  alt_EQUAL?: InputMaybe<Scalars['String']>;
  alt_GT?: InputMaybe<Scalars['Int']>;
  alt_GTE?: InputMaybe<Scalars['Int']>;
  alt_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  alt_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  alt_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  alt_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  alt_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  alt_LT?: InputMaybe<Scalars['Int']>;
  alt_LTE?: InputMaybe<Scalars['Int']>;
  alt_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  alt_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  alt_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  alt_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  alt_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  lat_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  lat_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  lat_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  lat_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  lat_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  lat_EQUAL?: InputMaybe<Scalars['String']>;
  lat_GT?: InputMaybe<Scalars['Int']>;
  lat_GTE?: InputMaybe<Scalars['Int']>;
  lat_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  lat_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  lat_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  lat_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  lat_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  lat_LT?: InputMaybe<Scalars['Int']>;
  lat_LTE?: InputMaybe<Scalars['Int']>;
  lat_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  lat_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  lat_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  lat_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  lat_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  lng_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  lng_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  lng_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  lng_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  lng_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  lng_EQUAL?: InputMaybe<Scalars['String']>;
  lng_GT?: InputMaybe<Scalars['Int']>;
  lng_GTE?: InputMaybe<Scalars['Int']>;
  lng_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  lng_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  lng_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  lng_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  lng_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  lng_LT?: InputMaybe<Scalars['Int']>;
  lng_LTE?: InputMaybe<Scalars['Int']>;
  lng_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  lng_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  lng_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  lng_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  lng_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AreaTypeLocationRelationship = {
  __typename?: 'AreaTypeLocationRelationship';
  cursor: Scalars['String'];
  node: Geo;
};

export type AreaTypeLocationUpdateConnectionInput = {
  node?: InputMaybe<GeoUpdateInput>;
};

export type AreaTypeLocationUpdateFieldInput = {
  connect?: InputMaybe<AreaTypeLocationConnectFieldInput>;
  create?: InputMaybe<AreaTypeLocationCreateFieldInput>;
  delete?: InputMaybe<AreaTypeLocationDeleteFieldInput>;
  disconnect?: InputMaybe<AreaTypeLocationDisconnectFieldInput>;
  update?: InputMaybe<AreaTypeLocationUpdateConnectionInput>;
  where?: InputMaybe<AreaTypeLocationConnectionWhere>;
};

export type AreaTypeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AreaTypeNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AreaTypeNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AreaTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more AreaTypeSort objects to sort AreaTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AreaTypeSort>>;
};

export type AreaTypeParentAggregateInput = {
  AND?: InputMaybe<Array<AreaTypeParentAggregateInput>>;
  OR?: InputMaybe<Array<AreaTypeParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<AreaTypeParentNodeAggregationWhereInput>;
};

export type AreaTypeParentConnectFieldInput = {
  connect?: InputMaybe<AreaTypeConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<AreaTypeConnectWhere>;
};

export type AreaTypeParentConnection = {
  __typename?: 'AreaTypeParentConnection';
  edges: Array<AreaTypeParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AreaTypeParentConnectionSort = {
  node?: InputMaybe<AreaTypeSort>;
};

export type AreaTypeParentConnectionWhere = {
  AND?: InputMaybe<Array<AreaTypeParentConnectionWhere>>;
  OR?: InputMaybe<Array<AreaTypeParentConnectionWhere>>;
  node?: InputMaybe<AreaTypeWhere>;
  node_NOT?: InputMaybe<AreaTypeWhere>;
};

export type AreaTypeParentCreateFieldInput = {
  node: AreaTypeCreateInput;
};

export type AreaTypeParentDeleteFieldInput = {
  delete?: InputMaybe<AreaTypeDeleteInput>;
  where?: InputMaybe<AreaTypeParentConnectionWhere>;
};

export type AreaTypeParentDisconnectFieldInput = {
  disconnect?: InputMaybe<AreaTypeDisconnectInput>;
  where?: InputMaybe<AreaTypeParentConnectionWhere>;
};

export type AreaTypeParentFieldInput = {
  connect?: InputMaybe<AreaTypeParentConnectFieldInput>;
  create?: InputMaybe<AreaTypeParentCreateFieldInput>;
};

export type AreaTypeParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AreaTypeParentNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AreaTypeParentNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type AreaTypeParentRelationship = {
  __typename?: 'AreaTypeParentRelationship';
  cursor: Scalars['String'];
  node: AreaType;
};

export type AreaTypeParentUpdateConnectionInput = {
  node?: InputMaybe<AreaTypeUpdateInput>;
};

export type AreaTypeParentUpdateFieldInput = {
  connect?: InputMaybe<AreaTypeParentConnectFieldInput>;
  create?: InputMaybe<AreaTypeParentCreateFieldInput>;
  delete?: InputMaybe<AreaTypeParentDeleteFieldInput>;
  disconnect?: InputMaybe<AreaTypeParentDisconnectFieldInput>;
  update?: InputMaybe<AreaTypeParentUpdateConnectionInput>;
  where?: InputMaybe<AreaTypeParentConnectionWhere>;
};

export type AreaTypeRelationInput = {
  location?: InputMaybe<AreaTypeLocationCreateFieldInput>;
  parent?: InputMaybe<AreaTypeParentCreateFieldInput>;
};

export type AreaTypeRelationship = {
  __typename?: 'AreaTypeRelationship';
  cursor: Scalars['String'];
  node: AreaType;
};

/** Fields to sort AreaTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one AreaTypeSort object. */
export type AreaTypeSort = {
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type AreaTypeUpdateConnectionInput = {
  node?: InputMaybe<AreaTypeUpdateInput>;
};

export type AreaTypeUpdateFieldInput = {
  connect?: InputMaybe<AreaTypeConnectFieldInput>;
  create?: InputMaybe<AreaTypeCreateFieldInput>;
  delete?: InputMaybe<AreaTypeDeleteFieldInput>;
  disconnect?: InputMaybe<AreaTypeDisconnectFieldInput>;
  update?: InputMaybe<AreaTypeUpdateConnectionInput>;
  where?: InputMaybe<AreaTypeConnectionWhere>;
};

export type AreaTypeUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<AreaTypeLocationUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<AreaTypeParentUpdateFieldInput>;
};

export type AreaTypeWhere = {
  AND?: InputMaybe<Array<AreaTypeWhere>>;
  OR?: InputMaybe<Array<AreaTypeWhere>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<GeoWhere>;
  locationAggregate?: InputMaybe<AreaTypeLocationAggregateInput>;
  locationConnection?: InputMaybe<AreaTypeLocationConnectionWhere>;
  locationConnection_NOT?: InputMaybe<AreaTypeLocationConnectionWhere>;
  location_NOT?: InputMaybe<GeoWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<AreaTypeWhere>;
  parentAggregate?: InputMaybe<AreaTypeParentAggregateInput>;
  parentConnection?: InputMaybe<AreaTypeParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<AreaTypeParentConnectionWhere>;
  parent_NOT?: InputMaybe<AreaTypeWhere>;
};

export type AreaTypesConnection = {
  __typename?: 'AreaTypesConnection';
  edges: Array<AreaTypeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AreaUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AreaTypeUpdateFieldInput>;
};

export type AreaWhere = {
  AND?: InputMaybe<Array<AreaWhere>>;
  OR?: InputMaybe<Array<AreaWhere>>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AreaTypeWhere>;
  typeAggregate?: InputMaybe<AreaTypeAggregateInput>;
  typeConnection?: InputMaybe<AreaTypeConnectionWhere>;
  typeConnection_NOT?: InputMaybe<AreaTypeConnectionWhere>;
  type_NOT?: InputMaybe<AreaTypeWhere>;
};

export type AreasConnection = {
  __typename?: 'AreasConnection';
  edges: Array<AreaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Artist = Spatial & Temporal & {
  __typename?: 'Artist';
  area: Area;
  beginDate: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  creditCount: Scalars['Int'];
  endDate?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  ipi?: Maybe<Scalars['String']>;
  isni?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type?: Maybe<ArtistType>;
  typeAggregate?: Maybe<ArtistArtistTypeTypeAggregationSelection>;
  typeConnection: ArtistTypeConnection;
};


export type ArtistTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ArtistTypeOptions>;
  where?: InputMaybe<ArtistTypeWhere>;
};


export type ArtistTypeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ArtistTypeWhere>;
};


export type ArtistTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ArtistTypeConnectionSort>>;
  where?: InputMaybe<ArtistTypeConnectionWhere>;
};

export type ArtistAggregateSelection = {
  __typename?: 'ArtistAggregateSelection';
  beginDate: StringAggregateSelectionNonNullable;
  comment: StringAggregateSelectionNullable;
  count: Scalars['Int'];
  creditCount: IntAggregateSelectionNonNullable;
  endDate: StringAggregateSelectionNullable;
  ipi: StringAggregateSelectionNullable;
  isni: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ArtistArtistTypeTypeAggregationSelection = {
  __typename?: 'ArtistArtistTypeTypeAggregationSelection';
  count: Scalars['Int'];
};

export type ArtistConnectInput = {
  type?: InputMaybe<ArtistTypeConnectFieldInput>;
};

export type ArtistConnectWhere = {
  node: ArtistWhere;
};

export type ArtistCreateInput = {
  beginDate: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  creditCount: Scalars['Int'];
  endDate?: InputMaybe<Scalars['String']>;
  ipi?: InputMaybe<Scalars['String']>;
  isni?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type?: InputMaybe<ArtistTypeFieldInput>;
};

export type ArtistDeleteInput = {
  type?: InputMaybe<ArtistTypeDeleteFieldInput>;
};

export type ArtistDisconnectInput = {
  type?: InputMaybe<ArtistTypeDisconnectFieldInput>;
};

export type ArtistEdge = {
  __typename?: 'ArtistEdge';
  cursor: Scalars['String'];
  node: Artist;
};

export type ArtistOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ArtistSort objects to sort Artists by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ArtistSort>>;
};

export type ArtistRelationInput = {
  type?: InputMaybe<ArtistTypeCreateFieldInput>;
};

/** Fields to sort Artists by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArtistSort object. */
export type ArtistSort = {
  beginDate?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
  creditCount?: InputMaybe<SortDirection>;
  endDate?: InputMaybe<SortDirection>;
  ipi?: InputMaybe<SortDirection>;
  isni?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type ArtistType = {
  __typename?: 'ArtistType';
  name?: Maybe<ArtistTypeEnum>;
};

export type ArtistTypeAggregateInput = {
  AND?: InputMaybe<Array<ArtistTypeAggregateInput>>;
  OR?: InputMaybe<Array<ArtistTypeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
};

export type ArtistTypeAggregateSelection = {
  __typename?: 'ArtistTypeAggregateSelection';
  count: Scalars['Int'];
};

export type ArtistTypeConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ArtistTypeConnectWhere>;
};

export type ArtistTypeConnectWhere = {
  node: ArtistTypeWhere;
};

export type ArtistTypeConnection = {
  __typename?: 'ArtistTypeConnection';
  edges: Array<ArtistTypeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ArtistTypeConnectionSort = {
  node?: InputMaybe<ArtistTypeSort>;
};

export type ArtistTypeConnectionWhere = {
  AND?: InputMaybe<Array<ArtistTypeConnectionWhere>>;
  OR?: InputMaybe<Array<ArtistTypeConnectionWhere>>;
  node?: InputMaybe<ArtistTypeWhere>;
  node_NOT?: InputMaybe<ArtistTypeWhere>;
};

export type ArtistTypeCreateFieldInput = {
  node: ArtistTypeCreateInput;
};

export type ArtistTypeCreateInput = {
  name?: InputMaybe<ArtistTypeEnum>;
};

export type ArtistTypeDeleteFieldInput = {
  where?: InputMaybe<ArtistTypeConnectionWhere>;
};

export type ArtistTypeDisconnectFieldInput = {
  where?: InputMaybe<ArtistTypeConnectionWhere>;
};

export type ArtistTypeEdge = {
  __typename?: 'ArtistTypeEdge';
  cursor: Scalars['String'];
  node: ArtistType;
};

export enum ArtistTypeEnum {
  Interdisciplinary = 'INTERDISCIPLINARY',
  Music = 'MUSIC'
}

export type ArtistTypeFieldInput = {
  connect?: InputMaybe<ArtistTypeConnectFieldInput>;
  create?: InputMaybe<ArtistTypeCreateFieldInput>;
};

export type ArtistTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ArtistTypeSort objects to sort ArtistTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ArtistTypeSort>>;
};

export type ArtistTypeRelationship = {
  __typename?: 'ArtistTypeRelationship';
  cursor: Scalars['String'];
  node: ArtistType;
};

/** Fields to sort ArtistTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArtistTypeSort object. */
export type ArtistTypeSort = {
  name?: InputMaybe<SortDirection>;
};

export type ArtistTypeUpdateConnectionInput = {
  node?: InputMaybe<ArtistTypeUpdateInput>;
};

export type ArtistTypeUpdateFieldInput = {
  connect?: InputMaybe<ArtistTypeConnectFieldInput>;
  create?: InputMaybe<ArtistTypeCreateFieldInput>;
  delete?: InputMaybe<ArtistTypeDeleteFieldInput>;
  disconnect?: InputMaybe<ArtistTypeDisconnectFieldInput>;
  update?: InputMaybe<ArtistTypeUpdateConnectionInput>;
  where?: InputMaybe<ArtistTypeConnectionWhere>;
};

export type ArtistTypeUpdateInput = {
  name?: InputMaybe<ArtistTypeEnum>;
};

export type ArtistTypeWhere = {
  AND?: InputMaybe<Array<ArtistTypeWhere>>;
  OR?: InputMaybe<Array<ArtistTypeWhere>>;
  name?: InputMaybe<ArtistTypeEnum>;
  name_IN?: InputMaybe<Array<InputMaybe<ArtistTypeEnum>>>;
  name_NOT?: InputMaybe<ArtistTypeEnum>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<ArtistTypeEnum>>>;
};

export type ArtistTypesConnection = {
  __typename?: 'ArtistTypesConnection';
  edges: Array<ArtistTypeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ArtistUpdateInput = {
  beginDate?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  creditCount?: InputMaybe<Scalars['Int']>;
  creditCount_DECREMENT?: InputMaybe<Scalars['Int']>;
  creditCount_INCREMENT?: InputMaybe<Scalars['Int']>;
  endDate?: InputMaybe<Scalars['String']>;
  ipi?: InputMaybe<Scalars['String']>;
  isni?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ArtistTypeUpdateFieldInput>;
};

export type ArtistWhere = {
  AND?: InputMaybe<Array<ArtistWhere>>;
  OR?: InputMaybe<Array<ArtistWhere>>;
  beginDate?: InputMaybe<Scalars['String']>;
  beginDate_CONTAINS?: InputMaybe<Scalars['String']>;
  beginDate_ENDS_WITH?: InputMaybe<Scalars['String']>;
  beginDate_IN?: InputMaybe<Array<Scalars['String']>>;
  beginDate_NOT?: InputMaybe<Scalars['String']>;
  beginDate_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  beginDate_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  beginDate_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  beginDate_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  beginDate_STARTS_WITH?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  comment_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT?: InputMaybe<Scalars['String']>;
  comment_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  comment_STARTS_WITH?: InputMaybe<Scalars['String']>;
  creditCount?: InputMaybe<Scalars['Int']>;
  creditCount_GT?: InputMaybe<Scalars['Int']>;
  creditCount_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_IN?: InputMaybe<Array<Scalars['Int']>>;
  creditCount_LT?: InputMaybe<Scalars['Int']>;
  creditCount_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_NOT?: InputMaybe<Scalars['Int']>;
  creditCount_NOT_IN?: InputMaybe<Array<Scalars['Int']>>;
  endDate?: InputMaybe<Scalars['String']>;
  endDate_CONTAINS?: InputMaybe<Scalars['String']>;
  endDate_ENDS_WITH?: InputMaybe<Scalars['String']>;
  endDate_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate_NOT?: InputMaybe<Scalars['String']>;
  endDate_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  endDate_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  endDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  endDate_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ipi?: InputMaybe<Scalars['String']>;
  ipi_CONTAINS?: InputMaybe<Scalars['String']>;
  ipi_ENDS_WITH?: InputMaybe<Scalars['String']>;
  ipi_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipi_NOT?: InputMaybe<Scalars['String']>;
  ipi_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  ipi_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  ipi_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ipi_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ipi_STARTS_WITH?: InputMaybe<Scalars['String']>;
  isni?: InputMaybe<Scalars['String']>;
  isni_CONTAINS?: InputMaybe<Scalars['String']>;
  isni_ENDS_WITH?: InputMaybe<Scalars['String']>;
  isni_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isni_NOT?: InputMaybe<Scalars['String']>;
  isni_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  isni_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  isni_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isni_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  isni_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ArtistTypeWhere>;
  typeAggregate?: InputMaybe<ArtistTypeAggregateInput>;
  typeConnection?: InputMaybe<ArtistTypeConnectionWhere>;
  typeConnection_NOT?: InputMaybe<ArtistTypeConnectionWhere>;
  type_NOT?: InputMaybe<ArtistTypeWhere>;
};

export type ArtistsConnection = {
  __typename?: 'ArtistsConnection';
  edges: Array<ArtistEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreateAreaTypesMutationResponse = {
  __typename?: 'CreateAreaTypesMutationResponse';
  areaTypes: Array<AreaType>;
  info: CreateInfo;
};

export type CreateAreasMutationResponse = {
  __typename?: 'CreateAreasMutationResponse';
  areas: Array<Area>;
  info: CreateInfo;
};

export type CreateArtistTypesMutationResponse = {
  __typename?: 'CreateArtistTypesMutationResponse';
  artistTypes: Array<ArtistType>;
  info: CreateInfo;
};

export type CreateArtistsMutationResponse = {
  __typename?: 'CreateArtistsMutationResponse';
  artists: Array<Artist>;
  info: CreateInfo;
};

export type CreateFormatsMutationResponse = {
  __typename?: 'CreateFormatsMutationResponse';
  formats: Array<Format>;
  info: CreateInfo;
};

export type CreateGendersMutationResponse = {
  __typename?: 'CreateGendersMutationResponse';
  genders: Array<Gender>;
  info: CreateInfo;
};

export type CreateGeosMutationResponse = {
  __typename?: 'CreateGeosMutationResponse';
  geos: Array<Geo>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateLabelTypesMutationResponse = {
  __typename?: 'CreateLabelTypesMutationResponse';
  info: CreateInfo;
  labelTypes: Array<LabelType>;
};

export type CreateLabelsMutationResponse = {
  __typename?: 'CreateLabelsMutationResponse';
  info: CreateInfo;
  labels: Array<Label>;
};

export type CreateMediumsMutationResponse = {
  __typename?: 'CreateMediumsMutationResponse';
  info: CreateInfo;
  mediums: Array<Medium>;
};

export type CreateRecordingsMutationResponse = {
  __typename?: 'CreateRecordingsMutationResponse';
  info: CreateInfo;
  recordings: Array<Recording>;
};

export type CreateReleaseQualitiesMutationResponse = {
  __typename?: 'CreateReleaseQualitiesMutationResponse';
  info: CreateInfo;
  releaseQualities: Array<ReleaseQuality>;
};

export type CreateReleaseStatusesMutationResponse = {
  __typename?: 'CreateReleaseStatusesMutationResponse';
  info: CreateInfo;
  releaseStatuses: Array<ReleaseStatus>;
};

export type CreateReleasesMutationResponse = {
  __typename?: 'CreateReleasesMutationResponse';
  info: CreateInfo;
  releases: Array<Release>;
};

export type CreateTracksMutationResponse = {
  __typename?: 'CreateTracksMutationResponse';
  info: CreateInfo;
  tracks: Array<Track>;
};

export type CreateWorkTypesMutationResponse = {
  __typename?: 'CreateWorkTypesMutationResponse';
  info: CreateInfo;
  workTypes: Array<WorkType>;
};

export type CreateWorksMutationResponse = {
  __typename?: 'CreateWorksMutationResponse';
  info: CreateInfo;
  works: Array<Work>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Format = {
  __typename?: 'Format';
  description: Scalars['String'];
  name: Scalars['String'];
};

export type FormatAggregateSelection = {
  __typename?: 'FormatAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type FormatConnectWhere = {
  node: FormatWhere;
};

export type FormatCreateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type FormatEdge = {
  __typename?: 'FormatEdge';
  cursor: Scalars['String'];
  node: Format;
};

export type FormatOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more FormatSort objects to sort Formats by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FormatSort>>;
};

/** Fields to sort Formats by. The order in which sorts are applied is not guaranteed when specifying many fields in one FormatSort object. */
export type FormatSort = {
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FormatUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FormatWhere = {
  AND?: InputMaybe<Array<FormatWhere>>;
  OR?: InputMaybe<Array<FormatWhere>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type FormatsConnection = {
  __typename?: 'FormatsConnection';
  edges: Array<FormatEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Gender = {
  __typename?: 'Gender';
  name?: Maybe<GenderEnum>;
};

export type GenderAggregateSelection = {
  __typename?: 'GenderAggregateSelection';
  count: Scalars['Int'];
};

export type GenderCreateInput = {
  name?: InputMaybe<GenderEnum>;
};

export type GenderEdge = {
  __typename?: 'GenderEdge';
  cursor: Scalars['String'];
  node: Gender;
};

export enum GenderEnum {
  Female = 'FEMALE',
  Male = 'MALE',
  Nonbinary = 'NONBINARY'
}

export type GenderOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more GenderSort objects to sort Genders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GenderSort>>;
};

/** Fields to sort Genders by. The order in which sorts are applied is not guaranteed when specifying many fields in one GenderSort object. */
export type GenderSort = {
  name?: InputMaybe<SortDirection>;
};

export type GenderUpdateInput = {
  name?: InputMaybe<GenderEnum>;
};

export type GenderWhere = {
  AND?: InputMaybe<Array<GenderWhere>>;
  OR?: InputMaybe<Array<GenderWhere>>;
  name?: InputMaybe<GenderEnum>;
  name_IN?: InputMaybe<Array<InputMaybe<GenderEnum>>>;
  name_NOT?: InputMaybe<GenderEnum>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<GenderEnum>>>;
};

export type GendersConnection = {
  __typename?: 'GendersConnection';
  edges: Array<GenderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Geo = {
  __typename?: 'Geo';
  alt?: Maybe<Scalars['String']>;
  lat: Scalars['String'];
  lng: Scalars['String'];
};

export type GeoAggregateSelection = {
  __typename?: 'GeoAggregateSelection';
  alt: StringAggregateSelectionNullable;
  count: Scalars['Int'];
  lat: StringAggregateSelectionNonNullable;
  lng: StringAggregateSelectionNonNullable;
};

export type GeoConnectWhere = {
  node: GeoWhere;
};

export type GeoCreateInput = {
  alt?: InputMaybe<Scalars['String']>;
  lat: Scalars['String'];
  lng: Scalars['String'];
};

export type GeoEdge = {
  __typename?: 'GeoEdge';
  cursor: Scalars['String'];
  node: Geo;
};

export type GeoOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more GeoSort objects to sort Geos by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GeoSort>>;
};

/** Fields to sort Geos by. The order in which sorts are applied is not guaranteed when specifying many fields in one GeoSort object. */
export type GeoSort = {
  alt?: InputMaybe<SortDirection>;
  lat?: InputMaybe<SortDirection>;
  lng?: InputMaybe<SortDirection>;
};

export type GeoUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
};

export type GeoWhere = {
  AND?: InputMaybe<Array<GeoWhere>>;
  OR?: InputMaybe<Array<GeoWhere>>;
  alt?: InputMaybe<Scalars['String']>;
  alt_CONTAINS?: InputMaybe<Scalars['String']>;
  alt_ENDS_WITH?: InputMaybe<Scalars['String']>;
  alt_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alt_NOT?: InputMaybe<Scalars['String']>;
  alt_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  alt_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  alt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alt_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  alt_STARTS_WITH?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['String']>;
  lat_CONTAINS?: InputMaybe<Scalars['String']>;
  lat_ENDS_WITH?: InputMaybe<Scalars['String']>;
  lat_IN?: InputMaybe<Array<Scalars['String']>>;
  lat_NOT?: InputMaybe<Scalars['String']>;
  lat_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  lat_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  lat_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  lat_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  lat_STARTS_WITH?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  lng_CONTAINS?: InputMaybe<Scalars['String']>;
  lng_ENDS_WITH?: InputMaybe<Scalars['String']>;
  lng_IN?: InputMaybe<Array<Scalars['String']>>;
  lng_NOT?: InputMaybe<Scalars['String']>;
  lng_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  lng_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  lng_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  lng_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  lng_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type GeosConnection = {
  __typename?: 'GeosConnection';
  edges: Array<GeoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: 'IntAggregateSelectionNonNullable';
  average: Scalars['Float'];
  max: Scalars['Int'];
  min: Scalars['Int'];
  sum: Scalars['Int'];
};

export type Label = Spatial & Temporal & {
  __typename?: 'Label';
  area: Area;
  beginDate: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type?: Maybe<LabelType>;
  typeAggregate?: Maybe<LabelLabelTypeTypeAggregationSelection>;
  typeConnection: LabelTypeConnection;
};


export type LabelTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<LabelTypeOptions>;
  where?: InputMaybe<LabelTypeWhere>;
};


export type LabelTypeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LabelTypeWhere>;
};


export type LabelTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LabelTypeConnectionSort>>;
  where?: InputMaybe<LabelTypeConnectionWhere>;
};

export type LabelAggregateSelection = {
  __typename?: 'LabelAggregateSelection';
  beginDate: StringAggregateSelectionNonNullable;
  comment: StringAggregateSelectionNullable;
  count: Scalars['Int'];
  endDate: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type LabelConnectInput = {
  type?: InputMaybe<LabelTypeConnectFieldInput>;
};

export type LabelCreateInput = {
  beginDate: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type?: InputMaybe<LabelTypeFieldInput>;
};

export type LabelDeleteInput = {
  type?: InputMaybe<LabelTypeDeleteFieldInput>;
};

export type LabelDisconnectInput = {
  type?: InputMaybe<LabelTypeDisconnectFieldInput>;
};

export type LabelEdge = {
  __typename?: 'LabelEdge';
  cursor: Scalars['String'];
  node: Label;
};

export type LabelLabelTypeTypeAggregationSelection = {
  __typename?: 'LabelLabelTypeTypeAggregationSelection';
  count: Scalars['Int'];
};

export type LabelOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more LabelSort objects to sort Labels by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LabelSort>>;
};

export type LabelRelationInput = {
  type?: InputMaybe<LabelTypeCreateFieldInput>;
};

/** Fields to sort Labels by. The order in which sorts are applied is not guaranteed when specifying many fields in one LabelSort object. */
export type LabelSort = {
  beginDate?: InputMaybe<SortDirection>;
  comment?: InputMaybe<SortDirection>;
  endDate?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type LabelType = {
  __typename?: 'LabelType';
  name?: Maybe<LabelTypeEnum>;
};

export type LabelTypeAggregateInput = {
  AND?: InputMaybe<Array<LabelTypeAggregateInput>>;
  OR?: InputMaybe<Array<LabelTypeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
};

export type LabelTypeAggregateSelection = {
  __typename?: 'LabelTypeAggregateSelection';
  count: Scalars['Int'];
};

export type LabelTypeConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<LabelTypeConnectWhere>;
};

export type LabelTypeConnectWhere = {
  node: LabelTypeWhere;
};

export type LabelTypeConnection = {
  __typename?: 'LabelTypeConnection';
  edges: Array<LabelTypeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LabelTypeConnectionSort = {
  node?: InputMaybe<LabelTypeSort>;
};

export type LabelTypeConnectionWhere = {
  AND?: InputMaybe<Array<LabelTypeConnectionWhere>>;
  OR?: InputMaybe<Array<LabelTypeConnectionWhere>>;
  node?: InputMaybe<LabelTypeWhere>;
  node_NOT?: InputMaybe<LabelTypeWhere>;
};

export type LabelTypeCreateFieldInput = {
  node: LabelTypeCreateInput;
};

export type LabelTypeCreateInput = {
  name?: InputMaybe<LabelTypeEnum>;
};

export type LabelTypeDeleteFieldInput = {
  where?: InputMaybe<LabelTypeConnectionWhere>;
};

export type LabelTypeDisconnectFieldInput = {
  where?: InputMaybe<LabelTypeConnectionWhere>;
};

export type LabelTypeEdge = {
  __typename?: 'LabelTypeEdge';
  cursor: Scalars['String'];
  node: LabelType;
};

export enum LabelTypeEnum {
  Independant = 'INDEPENDANT',
  Major = 'MAJOR'
}

export type LabelTypeFieldInput = {
  connect?: InputMaybe<LabelTypeConnectFieldInput>;
  create?: InputMaybe<LabelTypeCreateFieldInput>;
};

export type LabelTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more LabelTypeSort objects to sort LabelTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LabelTypeSort>>;
};

export type LabelTypeRelationship = {
  __typename?: 'LabelTypeRelationship';
  cursor: Scalars['String'];
  node: LabelType;
};

/** Fields to sort LabelTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one LabelTypeSort object. */
export type LabelTypeSort = {
  name?: InputMaybe<SortDirection>;
};

export type LabelTypeUpdateConnectionInput = {
  node?: InputMaybe<LabelTypeUpdateInput>;
};

export type LabelTypeUpdateFieldInput = {
  connect?: InputMaybe<LabelTypeConnectFieldInput>;
  create?: InputMaybe<LabelTypeCreateFieldInput>;
  delete?: InputMaybe<LabelTypeDeleteFieldInput>;
  disconnect?: InputMaybe<LabelTypeDisconnectFieldInput>;
  update?: InputMaybe<LabelTypeUpdateConnectionInput>;
  where?: InputMaybe<LabelTypeConnectionWhere>;
};

export type LabelTypeUpdateInput = {
  name?: InputMaybe<LabelTypeEnum>;
};

export type LabelTypeWhere = {
  AND?: InputMaybe<Array<LabelTypeWhere>>;
  OR?: InputMaybe<Array<LabelTypeWhere>>;
  name?: InputMaybe<LabelTypeEnum>;
  name_IN?: InputMaybe<Array<InputMaybe<LabelTypeEnum>>>;
  name_NOT?: InputMaybe<LabelTypeEnum>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<LabelTypeEnum>>>;
};

export type LabelTypesConnection = {
  __typename?: 'LabelTypesConnection';
  edges: Array<LabelTypeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LabelUpdateInput = {
  beginDate?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LabelTypeUpdateFieldInput>;
};

export type LabelWhere = {
  AND?: InputMaybe<Array<LabelWhere>>;
  OR?: InputMaybe<Array<LabelWhere>>;
  beginDate?: InputMaybe<Scalars['String']>;
  beginDate_CONTAINS?: InputMaybe<Scalars['String']>;
  beginDate_ENDS_WITH?: InputMaybe<Scalars['String']>;
  beginDate_IN?: InputMaybe<Array<Scalars['String']>>;
  beginDate_NOT?: InputMaybe<Scalars['String']>;
  beginDate_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  beginDate_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  beginDate_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  beginDate_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  beginDate_STARTS_WITH?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  comment_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT?: InputMaybe<Scalars['String']>;
  comment_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  comment_STARTS_WITH?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  endDate_CONTAINS?: InputMaybe<Scalars['String']>;
  endDate_ENDS_WITH?: InputMaybe<Scalars['String']>;
  endDate_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate_NOT?: InputMaybe<Scalars['String']>;
  endDate_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  endDate_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  endDate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  endDate_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<LabelTypeWhere>;
  typeAggregate?: InputMaybe<LabelTypeAggregateInput>;
  typeConnection?: InputMaybe<LabelTypeConnectionWhere>;
  typeConnection_NOT?: InputMaybe<LabelTypeConnectionWhere>;
  type_NOT?: InputMaybe<LabelTypeWhere>;
};

export type LabelsConnection = {
  __typename?: 'LabelsConnection';
  edges: Array<LabelEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Medium = {
  __typename?: 'Medium';
  description: Scalars['String'];
  format?: Maybe<Format>;
  formatAggregate?: Maybe<MediumFormatFormatAggregationSelection>;
  formatConnection: MediumFormatConnection;
  name: Scalars['String'];
};


export type MediumFormatArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<FormatOptions>;
  where?: InputMaybe<FormatWhere>;
};


export type MediumFormatAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<FormatWhere>;
};


export type MediumFormatConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MediumFormatConnectionSort>>;
  where?: InputMaybe<MediumFormatConnectionWhere>;
};

export type MediumAggregateSelection = {
  __typename?: 'MediumAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MediumConnectInput = {
  format?: InputMaybe<MediumFormatConnectFieldInput>;
};

export type MediumConnectWhere = {
  node: MediumWhere;
};

export type MediumCreateInput = {
  description: Scalars['String'];
  format?: InputMaybe<MediumFormatFieldInput>;
  name: Scalars['String'];
};

export type MediumDeleteInput = {
  format?: InputMaybe<MediumFormatDeleteFieldInput>;
};

export type MediumDisconnectInput = {
  format?: InputMaybe<MediumFormatDisconnectFieldInput>;
};

export type MediumEdge = {
  __typename?: 'MediumEdge';
  cursor: Scalars['String'];
  node: Medium;
};

export type MediumFormatAggregateInput = {
  AND?: InputMaybe<Array<MediumFormatAggregateInput>>;
  OR?: InputMaybe<Array<MediumFormatAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MediumFormatNodeAggregationWhereInput>;
};

export type MediumFormatConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<FormatConnectWhere>;
};

export type MediumFormatConnection = {
  __typename?: 'MediumFormatConnection';
  edges: Array<MediumFormatRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediumFormatConnectionSort = {
  node?: InputMaybe<FormatSort>;
};

export type MediumFormatConnectionWhere = {
  AND?: InputMaybe<Array<MediumFormatConnectionWhere>>;
  OR?: InputMaybe<Array<MediumFormatConnectionWhere>>;
  node?: InputMaybe<FormatWhere>;
  node_NOT?: InputMaybe<FormatWhere>;
};

export type MediumFormatCreateFieldInput = {
  node: FormatCreateInput;
};

export type MediumFormatDeleteFieldInput = {
  where?: InputMaybe<MediumFormatConnectionWhere>;
};

export type MediumFormatDisconnectFieldInput = {
  where?: InputMaybe<MediumFormatConnectionWhere>;
};

export type MediumFormatFieldInput = {
  connect?: InputMaybe<MediumFormatConnectFieldInput>;
  create?: InputMaybe<MediumFormatCreateFieldInput>;
};

export type MediumFormatFormatAggregationSelection = {
  __typename?: 'MediumFormatFormatAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MediumFormatFormatNodeAggregateSelection>;
};

export type MediumFormatFormatNodeAggregateSelection = {
  __typename?: 'MediumFormatFormatNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MediumFormatNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MediumFormatNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MediumFormatNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type MediumFormatRelationship = {
  __typename?: 'MediumFormatRelationship';
  cursor: Scalars['String'];
  node: Format;
};

export type MediumFormatUpdateConnectionInput = {
  node?: InputMaybe<FormatUpdateInput>;
};

export type MediumFormatUpdateFieldInput = {
  connect?: InputMaybe<MediumFormatConnectFieldInput>;
  create?: InputMaybe<MediumFormatCreateFieldInput>;
  delete?: InputMaybe<MediumFormatDeleteFieldInput>;
  disconnect?: InputMaybe<MediumFormatDisconnectFieldInput>;
  update?: InputMaybe<MediumFormatUpdateConnectionInput>;
  where?: InputMaybe<MediumFormatConnectionWhere>;
};

export type MediumOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MediumSort objects to sort Mediums by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MediumSort>>;
};

export type MediumRelationInput = {
  format?: InputMaybe<MediumFormatCreateFieldInput>;
};

/** Fields to sort Mediums by. The order in which sorts are applied is not guaranteed when specifying many fields in one MediumSort object. */
export type MediumSort = {
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type MediumUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<MediumFormatUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type MediumWhere = {
  AND?: InputMaybe<Array<MediumWhere>>;
  OR?: InputMaybe<Array<MediumWhere>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<FormatWhere>;
  formatAggregate?: InputMaybe<MediumFormatAggregateInput>;
  formatConnection?: InputMaybe<MediumFormatConnectionWhere>;
  formatConnection_NOT?: InputMaybe<MediumFormatConnectionWhere>;
  format_NOT?: InputMaybe<FormatWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type MediumsConnection = {
  __typename?: 'MediumsConnection';
  edges: Array<MediumEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAreaTypes: CreateAreaTypesMutationResponse;
  createAreas: CreateAreasMutationResponse;
  createArtistTypes: CreateArtistTypesMutationResponse;
  createArtists: CreateArtistsMutationResponse;
  createFormats: CreateFormatsMutationResponse;
  createGenders: CreateGendersMutationResponse;
  createGeos: CreateGeosMutationResponse;
  createLabelTypes: CreateLabelTypesMutationResponse;
  createLabels: CreateLabelsMutationResponse;
  createMediums: CreateMediumsMutationResponse;
  createRecordings: CreateRecordingsMutationResponse;
  createReleaseQualities: CreateReleaseQualitiesMutationResponse;
  createReleaseStatuses: CreateReleaseStatusesMutationResponse;
  createReleases: CreateReleasesMutationResponse;
  createTracks: CreateTracksMutationResponse;
  createWorkTypes: CreateWorkTypesMutationResponse;
  createWorks: CreateWorksMutationResponse;
  deleteAreaTypes: DeleteInfo;
  deleteAreas: DeleteInfo;
  deleteArtistTypes: DeleteInfo;
  deleteArtists: DeleteInfo;
  deleteFormats: DeleteInfo;
  deleteGenders: DeleteInfo;
  deleteGeos: DeleteInfo;
  deleteLabelTypes: DeleteInfo;
  deleteLabels: DeleteInfo;
  deleteMediums: DeleteInfo;
  deleteRecordings: DeleteInfo;
  deleteReleaseQualities: DeleteInfo;
  deleteReleaseStatuses: DeleteInfo;
  deleteReleases: DeleteInfo;
  deleteTracks: DeleteInfo;
  deleteWorkTypes: DeleteInfo;
  deleteWorks: DeleteInfo;
  updateAreaTypes: UpdateAreaTypesMutationResponse;
  updateAreas: UpdateAreasMutationResponse;
  updateArtistTypes: UpdateArtistTypesMutationResponse;
  updateArtists: UpdateArtistsMutationResponse;
  updateFormats: UpdateFormatsMutationResponse;
  updateGenders: UpdateGendersMutationResponse;
  updateGeos: UpdateGeosMutationResponse;
  updateLabelTypes: UpdateLabelTypesMutationResponse;
  updateLabels: UpdateLabelsMutationResponse;
  updateMediums: UpdateMediumsMutationResponse;
  updateRecordings: UpdateRecordingsMutationResponse;
  updateReleaseQualities: UpdateReleaseQualitiesMutationResponse;
  updateReleaseStatuses: UpdateReleaseStatusesMutationResponse;
  updateReleases: UpdateReleasesMutationResponse;
  updateTracks: UpdateTracksMutationResponse;
  updateWorkTypes: UpdateWorkTypesMutationResponse;
  updateWorks: UpdateWorksMutationResponse;
};


export type MutationCreateAreaTypesArgs = {
  input: Array<AreaTypeCreateInput>;
};


export type MutationCreateAreasArgs = {
  input: Array<AreaCreateInput>;
};


export type MutationCreateArtistTypesArgs = {
  input: Array<ArtistTypeCreateInput>;
};


export type MutationCreateArtistsArgs = {
  input: Array<ArtistCreateInput>;
};


export type MutationCreateFormatsArgs = {
  input: Array<FormatCreateInput>;
};


export type MutationCreateGendersArgs = {
  input: Array<GenderCreateInput>;
};


export type MutationCreateGeosArgs = {
  input: Array<GeoCreateInput>;
};


export type MutationCreateLabelTypesArgs = {
  input: Array<LabelTypeCreateInput>;
};


export type MutationCreateLabelsArgs = {
  input: Array<LabelCreateInput>;
};


export type MutationCreateMediumsArgs = {
  input: Array<MediumCreateInput>;
};


export type MutationCreateRecordingsArgs = {
  input: Array<RecordingCreateInput>;
};


export type MutationCreateReleaseQualitiesArgs = {
  input: Array<ReleaseQualityCreateInput>;
};


export type MutationCreateReleaseStatusesArgs = {
  input: Array<ReleaseStatusCreateInput>;
};


export type MutationCreateReleasesArgs = {
  input: Array<ReleaseCreateInput>;
};


export type MutationCreateTracksArgs = {
  input: Array<TrackCreateInput>;
};


export type MutationCreateWorkTypesArgs = {
  input: Array<WorkTypeCreateInput>;
};


export type MutationCreateWorksArgs = {
  input: Array<WorkCreateInput>;
};


export type MutationDeleteAreaTypesArgs = {
  delete?: InputMaybe<AreaTypeDeleteInput>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type MutationDeleteAreasArgs = {
  delete?: InputMaybe<AreaDeleteInput>;
  where?: InputMaybe<AreaWhere>;
};


export type MutationDeleteArtistTypesArgs = {
  where?: InputMaybe<ArtistTypeWhere>;
};


export type MutationDeleteArtistsArgs = {
  delete?: InputMaybe<ArtistDeleteInput>;
  where?: InputMaybe<ArtistWhere>;
};


export type MutationDeleteFormatsArgs = {
  where?: InputMaybe<FormatWhere>;
};


export type MutationDeleteGendersArgs = {
  where?: InputMaybe<GenderWhere>;
};


export type MutationDeleteGeosArgs = {
  where?: InputMaybe<GeoWhere>;
};


export type MutationDeleteLabelTypesArgs = {
  where?: InputMaybe<LabelTypeWhere>;
};


export type MutationDeleteLabelsArgs = {
  delete?: InputMaybe<LabelDeleteInput>;
  where?: InputMaybe<LabelWhere>;
};


export type MutationDeleteMediumsArgs = {
  delete?: InputMaybe<MediumDeleteInput>;
  where?: InputMaybe<MediumWhere>;
};


export type MutationDeleteRecordingsArgs = {
  delete?: InputMaybe<RecordingDeleteInput>;
  where?: InputMaybe<RecordingWhere>;
};


export type MutationDeleteReleaseQualitiesArgs = {
  where?: InputMaybe<ReleaseQualityWhere>;
};


export type MutationDeleteReleaseStatusesArgs = {
  where?: InputMaybe<ReleaseStatusWhere>;
};


export type MutationDeleteReleasesArgs = {
  delete?: InputMaybe<ReleaseDeleteInput>;
  where?: InputMaybe<ReleaseWhere>;
};


export type MutationDeleteTracksArgs = {
  delete?: InputMaybe<TrackDeleteInput>;
  where?: InputMaybe<TrackWhere>;
};


export type MutationDeleteWorkTypesArgs = {
  where?: InputMaybe<WorkTypeWhere>;
};


export type MutationDeleteWorksArgs = {
  delete?: InputMaybe<WorkDeleteInput>;
  where?: InputMaybe<WorkWhere>;
};


export type MutationUpdateAreaTypesArgs = {
  connect?: InputMaybe<AreaTypeConnectInput>;
  create?: InputMaybe<AreaTypeRelationInput>;
  delete?: InputMaybe<AreaTypeDeleteInput>;
  disconnect?: InputMaybe<AreaTypeDisconnectInput>;
  update?: InputMaybe<AreaTypeUpdateInput>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type MutationUpdateAreasArgs = {
  connect?: InputMaybe<AreaConnectInput>;
  create?: InputMaybe<AreaRelationInput>;
  delete?: InputMaybe<AreaDeleteInput>;
  disconnect?: InputMaybe<AreaDisconnectInput>;
  update?: InputMaybe<AreaUpdateInput>;
  where?: InputMaybe<AreaWhere>;
};


export type MutationUpdateArtistTypesArgs = {
  update?: InputMaybe<ArtistTypeUpdateInput>;
  where?: InputMaybe<ArtistTypeWhere>;
};


export type MutationUpdateArtistsArgs = {
  connect?: InputMaybe<ArtistConnectInput>;
  create?: InputMaybe<ArtistRelationInput>;
  delete?: InputMaybe<ArtistDeleteInput>;
  disconnect?: InputMaybe<ArtistDisconnectInput>;
  update?: InputMaybe<ArtistUpdateInput>;
  where?: InputMaybe<ArtistWhere>;
};


export type MutationUpdateFormatsArgs = {
  update?: InputMaybe<FormatUpdateInput>;
  where?: InputMaybe<FormatWhere>;
};


export type MutationUpdateGendersArgs = {
  update?: InputMaybe<GenderUpdateInput>;
  where?: InputMaybe<GenderWhere>;
};


export type MutationUpdateGeosArgs = {
  update?: InputMaybe<GeoUpdateInput>;
  where?: InputMaybe<GeoWhere>;
};


export type MutationUpdateLabelTypesArgs = {
  update?: InputMaybe<LabelTypeUpdateInput>;
  where?: InputMaybe<LabelTypeWhere>;
};


export type MutationUpdateLabelsArgs = {
  connect?: InputMaybe<LabelConnectInput>;
  create?: InputMaybe<LabelRelationInput>;
  delete?: InputMaybe<LabelDeleteInput>;
  disconnect?: InputMaybe<LabelDisconnectInput>;
  update?: InputMaybe<LabelUpdateInput>;
  where?: InputMaybe<LabelWhere>;
};


export type MutationUpdateMediumsArgs = {
  connect?: InputMaybe<MediumConnectInput>;
  create?: InputMaybe<MediumRelationInput>;
  delete?: InputMaybe<MediumDeleteInput>;
  disconnect?: InputMaybe<MediumDisconnectInput>;
  update?: InputMaybe<MediumUpdateInput>;
  where?: InputMaybe<MediumWhere>;
};


export type MutationUpdateRecordingsArgs = {
  connect?: InputMaybe<RecordingConnectInput>;
  create?: InputMaybe<RecordingRelationInput>;
  delete?: InputMaybe<RecordingDeleteInput>;
  disconnect?: InputMaybe<RecordingDisconnectInput>;
  update?: InputMaybe<RecordingUpdateInput>;
  where?: InputMaybe<RecordingWhere>;
};


export type MutationUpdateReleaseQualitiesArgs = {
  update?: InputMaybe<ReleaseQualityUpdateInput>;
  where?: InputMaybe<ReleaseQualityWhere>;
};


export type MutationUpdateReleaseStatusesArgs = {
  update?: InputMaybe<ReleaseStatusUpdateInput>;
  where?: InputMaybe<ReleaseStatusWhere>;
};


export type MutationUpdateReleasesArgs = {
  connect?: InputMaybe<ReleaseConnectInput>;
  create?: InputMaybe<ReleaseRelationInput>;
  delete?: InputMaybe<ReleaseDeleteInput>;
  disconnect?: InputMaybe<ReleaseDisconnectInput>;
  update?: InputMaybe<ReleaseUpdateInput>;
  where?: InputMaybe<ReleaseWhere>;
};


export type MutationUpdateTracksArgs = {
  connect?: InputMaybe<TrackConnectInput>;
  create?: InputMaybe<TrackRelationInput>;
  delete?: InputMaybe<TrackDeleteInput>;
  disconnect?: InputMaybe<TrackDisconnectInput>;
  update?: InputMaybe<TrackUpdateInput>;
  where?: InputMaybe<TrackWhere>;
};


export type MutationUpdateWorkTypesArgs = {
  update?: InputMaybe<WorkTypeUpdateInput>;
  where?: InputMaybe<WorkTypeWhere>;
};


export type MutationUpdateWorksArgs = {
  connect?: InputMaybe<WorkConnectInput>;
  create?: InputMaybe<WorkRelationInput>;
  delete?: InputMaybe<WorkDeleteInput>;
  disconnect?: InputMaybe<WorkDisconnectInput>;
  update?: InputMaybe<WorkUpdateInput>;
  where?: InputMaybe<WorkWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  areaTypes: Array<AreaType>;
  areaTypesAggregate: AreaTypeAggregateSelection;
  areaTypesConnection: AreaTypesConnection;
  areas: Array<Area>;
  areasAggregate: AreaAggregateSelection;
  areasConnection: AreasConnection;
  artistTypes: Array<ArtistType>;
  artistTypesAggregate: ArtistTypeAggregateSelection;
  artistTypesConnection: ArtistTypesConnection;
  artists: Array<Artist>;
  artistsAggregate: ArtistAggregateSelection;
  artistsConnection: ArtistsConnection;
  formats: Array<Format>;
  formatsAggregate: FormatAggregateSelection;
  formatsConnection: FormatsConnection;
  genders: Array<Gender>;
  gendersAggregate: GenderAggregateSelection;
  gendersConnection: GendersConnection;
  geos: Array<Geo>;
  geosAggregate: GeoAggregateSelection;
  geosConnection: GeosConnection;
  labelTypes: Array<LabelType>;
  labelTypesAggregate: LabelTypeAggregateSelection;
  labelTypesConnection: LabelTypesConnection;
  labels: Array<Label>;
  labelsAggregate: LabelAggregateSelection;
  labelsConnection: LabelsConnection;
  mediums: Array<Medium>;
  mediumsAggregate: MediumAggregateSelection;
  mediumsConnection: MediumsConnection;
  recordings: Array<Recording>;
  recordingsAggregate: RecordingAggregateSelection;
  recordingsConnection: RecordingsConnection;
  releaseQualities: Array<ReleaseQuality>;
  releaseQualitiesAggregate: ReleaseQualityAggregateSelection;
  releaseQualitiesConnection: ReleaseQualitiesConnection;
  releaseStatuses: Array<ReleaseStatus>;
  releaseStatusesAggregate: ReleaseStatusAggregateSelection;
  releaseStatusesConnection: ReleaseStatusesConnection;
  releases: Array<Release>;
  releasesAggregate: ReleaseAggregateSelection;
  releasesConnection: ReleasesConnection;
  tracks: Array<Track>;
  tracksAggregate: TrackAggregateSelection;
  tracksConnection: TracksConnection;
  workTypes: Array<WorkType>;
  workTypesAggregate: WorkTypeAggregateSelection;
  workTypesConnection: WorkTypesConnection;
  works: Array<Work>;
  worksAggregate: WorkAggregateSelection;
  worksConnection: WorksConnection;
};


export type QueryAreaTypesArgs = {
  options?: InputMaybe<AreaTypeOptions>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type QueryAreaTypesAggregateArgs = {
  where?: InputMaybe<AreaTypeWhere>;
};


export type QueryAreaTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<AreaTypeSort>>>;
  where?: InputMaybe<AreaTypeWhere>;
};


export type QueryAreasArgs = {
  options?: InputMaybe<AreaOptions>;
  where?: InputMaybe<AreaWhere>;
};


export type QueryAreasAggregateArgs = {
  where?: InputMaybe<AreaWhere>;
};


export type QueryAreasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<AreaSort>>>;
  where?: InputMaybe<AreaWhere>;
};


export type QueryArtistTypesArgs = {
  options?: InputMaybe<ArtistTypeOptions>;
  where?: InputMaybe<ArtistTypeWhere>;
};


export type QueryArtistTypesAggregateArgs = {
  where?: InputMaybe<ArtistTypeWhere>;
};


export type QueryArtistTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ArtistTypeSort>>>;
  where?: InputMaybe<ArtistTypeWhere>;
};


export type QueryArtistsArgs = {
  options?: InputMaybe<ArtistOptions>;
  where?: InputMaybe<ArtistWhere>;
};


export type QueryArtistsAggregateArgs = {
  where?: InputMaybe<ArtistWhere>;
};


export type QueryArtistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ArtistSort>>>;
  where?: InputMaybe<ArtistWhere>;
};


export type QueryFormatsArgs = {
  options?: InputMaybe<FormatOptions>;
  where?: InputMaybe<FormatWhere>;
};


export type QueryFormatsAggregateArgs = {
  where?: InputMaybe<FormatWhere>;
};


export type QueryFormatsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<FormatSort>>>;
  where?: InputMaybe<FormatWhere>;
};


export type QueryGendersArgs = {
  options?: InputMaybe<GenderOptions>;
  where?: InputMaybe<GenderWhere>;
};


export type QueryGendersAggregateArgs = {
  where?: InputMaybe<GenderWhere>;
};


export type QueryGendersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GenderSort>>>;
  where?: InputMaybe<GenderWhere>;
};


export type QueryGeosArgs = {
  options?: InputMaybe<GeoOptions>;
  where?: InputMaybe<GeoWhere>;
};


export type QueryGeosAggregateArgs = {
  where?: InputMaybe<GeoWhere>;
};


export type QueryGeosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GeoSort>>>;
  where?: InputMaybe<GeoWhere>;
};


export type QueryLabelTypesArgs = {
  options?: InputMaybe<LabelTypeOptions>;
  where?: InputMaybe<LabelTypeWhere>;
};


export type QueryLabelTypesAggregateArgs = {
  where?: InputMaybe<LabelTypeWhere>;
};


export type QueryLabelTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<LabelTypeSort>>>;
  where?: InputMaybe<LabelTypeWhere>;
};


export type QueryLabelsArgs = {
  options?: InputMaybe<LabelOptions>;
  where?: InputMaybe<LabelWhere>;
};


export type QueryLabelsAggregateArgs = {
  where?: InputMaybe<LabelWhere>;
};


export type QueryLabelsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<LabelSort>>>;
  where?: InputMaybe<LabelWhere>;
};


export type QueryMediumsArgs = {
  options?: InputMaybe<MediumOptions>;
  where?: InputMaybe<MediumWhere>;
};


export type QueryMediumsAggregateArgs = {
  where?: InputMaybe<MediumWhere>;
};


export type QueryMediumsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<MediumSort>>>;
  where?: InputMaybe<MediumWhere>;
};


export type QueryRecordingsArgs = {
  options?: InputMaybe<RecordingOptions>;
  where?: InputMaybe<RecordingWhere>;
};


export type QueryRecordingsAggregateArgs = {
  where?: InputMaybe<RecordingWhere>;
};


export type QueryRecordingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<RecordingSort>>>;
  where?: InputMaybe<RecordingWhere>;
};


export type QueryReleaseQualitiesArgs = {
  options?: InputMaybe<ReleaseQualityOptions>;
  where?: InputMaybe<ReleaseQualityWhere>;
};


export type QueryReleaseQualitiesAggregateArgs = {
  where?: InputMaybe<ReleaseQualityWhere>;
};


export type QueryReleaseQualitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ReleaseQualitySort>>>;
  where?: InputMaybe<ReleaseQualityWhere>;
};


export type QueryReleaseStatusesArgs = {
  options?: InputMaybe<ReleaseStatusOptions>;
  where?: InputMaybe<ReleaseStatusWhere>;
};


export type QueryReleaseStatusesAggregateArgs = {
  where?: InputMaybe<ReleaseStatusWhere>;
};


export type QueryReleaseStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ReleaseStatusSort>>>;
  where?: InputMaybe<ReleaseStatusWhere>;
};


export type QueryReleasesArgs = {
  options?: InputMaybe<ReleaseOptions>;
  where?: InputMaybe<ReleaseWhere>;
};


export type QueryReleasesAggregateArgs = {
  where?: InputMaybe<ReleaseWhere>;
};


export type QueryReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ReleaseSort>>>;
  where?: InputMaybe<ReleaseWhere>;
};


export type QueryTracksArgs = {
  options?: InputMaybe<TrackOptions>;
  where?: InputMaybe<TrackWhere>;
};


export type QueryTracksAggregateArgs = {
  where?: InputMaybe<TrackWhere>;
};


export type QueryTracksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TrackSort>>>;
  where?: InputMaybe<TrackWhere>;
};


export type QueryWorkTypesArgs = {
  options?: InputMaybe<WorkTypeOptions>;
  where?: InputMaybe<WorkTypeWhere>;
};


export type QueryWorkTypesAggregateArgs = {
  where?: InputMaybe<WorkTypeWhere>;
};


export type QueryWorkTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<WorkTypeSort>>>;
  where?: InputMaybe<WorkTypeWhere>;
};


export type QueryWorksArgs = {
  options?: InputMaybe<WorkOptions>;
  where?: InputMaybe<WorkWhere>;
};


export type QueryWorksAggregateArgs = {
  where?: InputMaybe<WorkWhere>;
};


export type QueryWorksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<WorkSort>>>;
  where?: InputMaybe<WorkWhere>;
};

export type Recording = {
  __typename?: 'Recording';
  artistCredit: Artist;
  artistCreditAggregate?: Maybe<RecordingArtistArtistCreditAggregationSelection>;
  artistCreditConnection: RecordingArtistCreditConnection;
  name: Scalars['String'];
  release: Release;
  releaseAggregate?: Maybe<RecordingReleaseReleaseAggregationSelection>;
  releaseConnection: RecordingReleaseConnection;
  work: Work;
  workAggregate?: Maybe<RecordingWorkWorkAggregationSelection>;
  workConnection: RecordingWorkConnection;
};


export type RecordingArtistCreditArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ArtistOptions>;
  where?: InputMaybe<ArtistWhere>;
};


export type RecordingArtistCreditAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ArtistWhere>;
};


export type RecordingArtistCreditConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RecordingArtistCreditConnectionSort>>;
  where?: InputMaybe<RecordingArtistCreditConnectionWhere>;
};


export type RecordingReleaseArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ReleaseOptions>;
  where?: InputMaybe<ReleaseWhere>;
};


export type RecordingReleaseAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ReleaseWhere>;
};


export type RecordingReleaseConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RecordingReleaseConnectionSort>>;
  where?: InputMaybe<RecordingReleaseConnectionWhere>;
};


export type RecordingWorkArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<WorkOptions>;
  where?: InputMaybe<WorkWhere>;
};


export type RecordingWorkAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<WorkWhere>;
};


export type RecordingWorkConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RecordingWorkConnectionSort>>;
  where?: InputMaybe<RecordingWorkConnectionWhere>;
};

export type RecordingAggregateSelection = {
  __typename?: 'RecordingAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type RecordingArtistArtistCreditAggregationSelection = {
  __typename?: 'RecordingArtistArtistCreditAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RecordingArtistArtistCreditNodeAggregateSelection>;
};

export type RecordingArtistArtistCreditNodeAggregateSelection = {
  __typename?: 'RecordingArtistArtistCreditNodeAggregateSelection';
  beginDate: StringAggregateSelectionNonNullable;
  comment: StringAggregateSelectionNullable;
  creditCount: IntAggregateSelectionNonNullable;
  endDate: StringAggregateSelectionNullable;
  ipi: StringAggregateSelectionNullable;
  isni: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RecordingArtistCreditAggregateInput = {
  AND?: InputMaybe<Array<RecordingArtistCreditAggregateInput>>;
  OR?: InputMaybe<Array<RecordingArtistCreditAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RecordingArtistCreditNodeAggregationWhereInput>;
};

export type RecordingArtistCreditConnectFieldInput = {
  connect?: InputMaybe<ArtistConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ArtistConnectWhere>;
};

export type RecordingArtistCreditConnection = {
  __typename?: 'RecordingArtistCreditConnection';
  edges: Array<RecordingArtistCreditRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RecordingArtistCreditConnectionSort = {
  node?: InputMaybe<ArtistSort>;
};

export type RecordingArtistCreditConnectionWhere = {
  AND?: InputMaybe<Array<RecordingArtistCreditConnectionWhere>>;
  OR?: InputMaybe<Array<RecordingArtistCreditConnectionWhere>>;
  node?: InputMaybe<ArtistWhere>;
  node_NOT?: InputMaybe<ArtistWhere>;
};

export type RecordingArtistCreditCreateFieldInput = {
  node: ArtistCreateInput;
};

export type RecordingArtistCreditDeleteFieldInput = {
  delete?: InputMaybe<ArtistDeleteInput>;
  where?: InputMaybe<RecordingArtistCreditConnectionWhere>;
};

export type RecordingArtistCreditDisconnectFieldInput = {
  disconnect?: InputMaybe<ArtistDisconnectInput>;
  where?: InputMaybe<RecordingArtistCreditConnectionWhere>;
};

export type RecordingArtistCreditFieldInput = {
  connect?: InputMaybe<RecordingArtistCreditConnectFieldInput>;
  create?: InputMaybe<RecordingArtistCreditCreateFieldInput>;
};

export type RecordingArtistCreditNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RecordingArtistCreditNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RecordingArtistCreditNodeAggregationWhereInput>>;
  beginDate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  beginDate_EQUAL?: InputMaybe<Scalars['String']>;
  beginDate_GT?: InputMaybe<Scalars['Int']>;
  beginDate_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  beginDate_LT?: InputMaybe<Scalars['Int']>;
  beginDate_LTE?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  comment_EQUAL?: InputMaybe<Scalars['String']>;
  comment_GT?: InputMaybe<Scalars['Int']>;
  comment_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_LT?: InputMaybe<Scalars['Int']>;
  comment_LTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creditCount_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_GT?: InputMaybe<Scalars['Int']>;
  creditCount_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_LT?: InputMaybe<Scalars['Int']>;
  creditCount_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  endDate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  endDate_EQUAL?: InputMaybe<Scalars['String']>;
  endDate_GT?: InputMaybe<Scalars['Int']>;
  endDate_GTE?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  endDate_LT?: InputMaybe<Scalars['Int']>;
  endDate_LTE?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  ipi_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  ipi_EQUAL?: InputMaybe<Scalars['String']>;
  ipi_GT?: InputMaybe<Scalars['Int']>;
  ipi_GTE?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  ipi_LT?: InputMaybe<Scalars['Int']>;
  ipi_LTE?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  isni_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  isni_EQUAL?: InputMaybe<Scalars['String']>;
  isni_GT?: InputMaybe<Scalars['Int']>;
  isni_GTE?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  isni_LT?: InputMaybe<Scalars['Int']>;
  isni_LTE?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type RecordingArtistCreditRelationship = {
  __typename?: 'RecordingArtistCreditRelationship';
  cursor: Scalars['String'];
  node: Artist;
};

export type RecordingArtistCreditUpdateConnectionInput = {
  node?: InputMaybe<ArtistUpdateInput>;
};

export type RecordingArtistCreditUpdateFieldInput = {
  connect?: InputMaybe<RecordingArtistCreditConnectFieldInput>;
  create?: InputMaybe<RecordingArtistCreditCreateFieldInput>;
  delete?: InputMaybe<RecordingArtistCreditDeleteFieldInput>;
  disconnect?: InputMaybe<RecordingArtistCreditDisconnectFieldInput>;
  update?: InputMaybe<RecordingArtistCreditUpdateConnectionInput>;
  where?: InputMaybe<RecordingArtistCreditConnectionWhere>;
};

export type RecordingConnectInput = {
  artistCredit?: InputMaybe<RecordingArtistCreditConnectFieldInput>;
  release?: InputMaybe<RecordingReleaseConnectFieldInput>;
  work?: InputMaybe<RecordingWorkConnectFieldInput>;
};

export type RecordingConnectWhere = {
  node: RecordingWhere;
};

export type RecordingCreateInput = {
  artistCredit?: InputMaybe<RecordingArtistCreditFieldInput>;
  name: Scalars['String'];
  release?: InputMaybe<RecordingReleaseFieldInput>;
  work?: InputMaybe<RecordingWorkFieldInput>;
};

export type RecordingDeleteInput = {
  artistCredit?: InputMaybe<RecordingArtistCreditDeleteFieldInput>;
  release?: InputMaybe<RecordingReleaseDeleteFieldInput>;
  work?: InputMaybe<RecordingWorkDeleteFieldInput>;
};

export type RecordingDisconnectInput = {
  artistCredit?: InputMaybe<RecordingArtistCreditDisconnectFieldInput>;
  release?: InputMaybe<RecordingReleaseDisconnectFieldInput>;
  work?: InputMaybe<RecordingWorkDisconnectFieldInput>;
};

export type RecordingEdge = {
  __typename?: 'RecordingEdge';
  cursor: Scalars['String'];
  node: Recording;
};

export type RecordingOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more RecordingSort objects to sort Recordings by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RecordingSort>>;
};

export type RecordingRelationInput = {
  artistCredit?: InputMaybe<RecordingArtistCreditCreateFieldInput>;
  release?: InputMaybe<RecordingReleaseCreateFieldInput>;
  work?: InputMaybe<RecordingWorkCreateFieldInput>;
};

export type RecordingReleaseAggregateInput = {
  AND?: InputMaybe<Array<RecordingReleaseAggregateInput>>;
  OR?: InputMaybe<Array<RecordingReleaseAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RecordingReleaseNodeAggregationWhereInput>;
};

export type RecordingReleaseConnectFieldInput = {
  connect?: InputMaybe<ReleaseConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ReleaseConnectWhere>;
};

export type RecordingReleaseConnection = {
  __typename?: 'RecordingReleaseConnection';
  edges: Array<RecordingReleaseRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RecordingReleaseConnectionSort = {
  node?: InputMaybe<ReleaseSort>;
};

export type RecordingReleaseConnectionWhere = {
  AND?: InputMaybe<Array<RecordingReleaseConnectionWhere>>;
  OR?: InputMaybe<Array<RecordingReleaseConnectionWhere>>;
  node?: InputMaybe<ReleaseWhere>;
  node_NOT?: InputMaybe<ReleaseWhere>;
};

export type RecordingReleaseCreateFieldInput = {
  node: ReleaseCreateInput;
};

export type RecordingReleaseDeleteFieldInput = {
  delete?: InputMaybe<ReleaseDeleteInput>;
  where?: InputMaybe<RecordingReleaseConnectionWhere>;
};

export type RecordingReleaseDisconnectFieldInput = {
  disconnect?: InputMaybe<ReleaseDisconnectInput>;
  where?: InputMaybe<RecordingReleaseConnectionWhere>;
};

export type RecordingReleaseFieldInput = {
  connect?: InputMaybe<RecordingReleaseConnectFieldInput>;
  create?: InputMaybe<RecordingReleaseCreateFieldInput>;
};

export type RecordingReleaseNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RecordingReleaseNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RecordingReleaseNodeAggregationWhereInput>>;
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  comment_EQUAL?: InputMaybe<Scalars['String']>;
  comment_GT?: InputMaybe<Scalars['Int']>;
  comment_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_LT?: InputMaybe<Scalars['Int']>;
  comment_LTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type RecordingReleaseRelationship = {
  __typename?: 'RecordingReleaseRelationship';
  cursor: Scalars['String'];
  node: Release;
};

export type RecordingReleaseReleaseAggregationSelection = {
  __typename?: 'RecordingReleaseReleaseAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RecordingReleaseReleaseNodeAggregateSelection>;
};

export type RecordingReleaseReleaseNodeAggregateSelection = {
  __typename?: 'RecordingReleaseReleaseNodeAggregateSelection';
  comment: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RecordingReleaseUpdateConnectionInput = {
  node?: InputMaybe<ReleaseUpdateInput>;
};

export type RecordingReleaseUpdateFieldInput = {
  connect?: InputMaybe<RecordingReleaseConnectFieldInput>;
  create?: InputMaybe<RecordingReleaseCreateFieldInput>;
  delete?: InputMaybe<RecordingReleaseDeleteFieldInput>;
  disconnect?: InputMaybe<RecordingReleaseDisconnectFieldInput>;
  update?: InputMaybe<RecordingReleaseUpdateConnectionInput>;
  where?: InputMaybe<RecordingReleaseConnectionWhere>;
};

/** Fields to sort Recordings by. The order in which sorts are applied is not guaranteed when specifying many fields in one RecordingSort object. */
export type RecordingSort = {
  name?: InputMaybe<SortDirection>;
};

export type RecordingUpdateInput = {
  artistCredit?: InputMaybe<RecordingArtistCreditUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  release?: InputMaybe<RecordingReleaseUpdateFieldInput>;
  work?: InputMaybe<RecordingWorkUpdateFieldInput>;
};

export type RecordingWhere = {
  AND?: InputMaybe<Array<RecordingWhere>>;
  OR?: InputMaybe<Array<RecordingWhere>>;
  artistCredit?: InputMaybe<ArtistWhere>;
  artistCreditAggregate?: InputMaybe<RecordingArtistCreditAggregateInput>;
  artistCreditConnection?: InputMaybe<RecordingArtistCreditConnectionWhere>;
  artistCreditConnection_NOT?: InputMaybe<RecordingArtistCreditConnectionWhere>;
  artistCredit_NOT?: InputMaybe<ArtistWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  release?: InputMaybe<ReleaseWhere>;
  releaseAggregate?: InputMaybe<RecordingReleaseAggregateInput>;
  releaseConnection?: InputMaybe<RecordingReleaseConnectionWhere>;
  releaseConnection_NOT?: InputMaybe<RecordingReleaseConnectionWhere>;
  release_NOT?: InputMaybe<ReleaseWhere>;
  work?: InputMaybe<WorkWhere>;
  workAggregate?: InputMaybe<RecordingWorkAggregateInput>;
  workConnection?: InputMaybe<RecordingWorkConnectionWhere>;
  workConnection_NOT?: InputMaybe<RecordingWorkConnectionWhere>;
  work_NOT?: InputMaybe<WorkWhere>;
};

export type RecordingWorkAggregateInput = {
  AND?: InputMaybe<Array<RecordingWorkAggregateInput>>;
  OR?: InputMaybe<Array<RecordingWorkAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RecordingWorkNodeAggregationWhereInput>;
};

export type RecordingWorkConnectFieldInput = {
  connect?: InputMaybe<WorkConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<WorkConnectWhere>;
};

export type RecordingWorkConnection = {
  __typename?: 'RecordingWorkConnection';
  edges: Array<RecordingWorkRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RecordingWorkConnectionSort = {
  node?: InputMaybe<WorkSort>;
};

export type RecordingWorkConnectionWhere = {
  AND?: InputMaybe<Array<RecordingWorkConnectionWhere>>;
  OR?: InputMaybe<Array<RecordingWorkConnectionWhere>>;
  node?: InputMaybe<WorkWhere>;
  node_NOT?: InputMaybe<WorkWhere>;
};

export type RecordingWorkCreateFieldInput = {
  node: WorkCreateInput;
};

export type RecordingWorkDeleteFieldInput = {
  delete?: InputMaybe<WorkDeleteInput>;
  where?: InputMaybe<RecordingWorkConnectionWhere>;
};

export type RecordingWorkDisconnectFieldInput = {
  disconnect?: InputMaybe<WorkDisconnectInput>;
  where?: InputMaybe<RecordingWorkConnectionWhere>;
};

export type RecordingWorkFieldInput = {
  connect?: InputMaybe<RecordingWorkConnectFieldInput>;
  create?: InputMaybe<RecordingWorkCreateFieldInput>;
};

export type RecordingWorkNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RecordingWorkNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RecordingWorkNodeAggregationWhereInput>>;
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  comment_EQUAL?: InputMaybe<Scalars['String']>;
  comment_GT?: InputMaybe<Scalars['Int']>;
  comment_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_LT?: InputMaybe<Scalars['Int']>;
  comment_LTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  iswc_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  iswc_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  iswc_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  iswc_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  iswc_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  iswc_EQUAL?: InputMaybe<Scalars['String']>;
  iswc_GT?: InputMaybe<Scalars['Int']>;
  iswc_GTE?: InputMaybe<Scalars['Int']>;
  iswc_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  iswc_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  iswc_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  iswc_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  iswc_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  iswc_LT?: InputMaybe<Scalars['Int']>;
  iswc_LTE?: InputMaybe<Scalars['Int']>;
  iswc_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  iswc_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  iswc_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  iswc_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  iswc_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type RecordingWorkRelationship = {
  __typename?: 'RecordingWorkRelationship';
  cursor: Scalars['String'];
  node: Work;
};

export type RecordingWorkUpdateConnectionInput = {
  node?: InputMaybe<WorkUpdateInput>;
};

export type RecordingWorkUpdateFieldInput = {
  connect?: InputMaybe<RecordingWorkConnectFieldInput>;
  create?: InputMaybe<RecordingWorkCreateFieldInput>;
  delete?: InputMaybe<RecordingWorkDeleteFieldInput>;
  disconnect?: InputMaybe<RecordingWorkDisconnectFieldInput>;
  update?: InputMaybe<RecordingWorkUpdateConnectionInput>;
  where?: InputMaybe<RecordingWorkConnectionWhere>;
};

export type RecordingWorkWorkAggregationSelection = {
  __typename?: 'RecordingWorkWorkAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RecordingWorkWorkNodeAggregateSelection>;
};

export type RecordingWorkWorkNodeAggregateSelection = {
  __typename?: 'RecordingWorkWorkNodeAggregateSelection';
  comment: StringAggregateSelectionNullable;
  iswc: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RecordingsConnection = {
  __typename?: 'RecordingsConnection';
  edges: Array<RecordingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Release = {
  __typename?: 'Release';
  artistCredit: Artist;
  artistCreditAggregate?: Maybe<ReleaseArtistArtistCreditAggregationSelection>;
  artistCreditConnection: ReleaseArtistCreditConnection;
  comment?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  quality?: Maybe<ReleaseQuality>;
  qualityAggregate?: Maybe<ReleaseReleaseQualityQualityAggregationSelection>;
  qualityConnection: ReleaseQualityConnection;
  recordings: Array<Recording>;
  recordingsAggregate?: Maybe<ReleaseRecordingRecordingsAggregationSelection>;
  recordingsConnection: ReleaseRecordingsConnection;
  status: ReleaseStatus;
  statusAggregate?: Maybe<ReleaseReleaseStatusStatusAggregationSelection>;
  statusConnection: ReleaseStatusConnection;
};


export type ReleaseArtistCreditArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ArtistOptions>;
  where?: InputMaybe<ArtistWhere>;
};


export type ReleaseArtistCreditAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ArtistWhere>;
};


export type ReleaseArtistCreditConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ReleaseArtistCreditConnectionSort>>;
  where?: InputMaybe<ReleaseArtistCreditConnectionWhere>;
};


export type ReleaseQualityArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ReleaseQualityOptions>;
  where?: InputMaybe<ReleaseQualityWhere>;
};


export type ReleaseQualityAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ReleaseQualityWhere>;
};


export type ReleaseQualityConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ReleaseQualityConnectionSort>>;
  where?: InputMaybe<ReleaseQualityConnectionWhere>;
};


export type ReleaseRecordingsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RecordingOptions>;
  where?: InputMaybe<RecordingWhere>;
};


export type ReleaseRecordingsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RecordingWhere>;
};


export type ReleaseRecordingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ReleaseRecordingsConnectionSort>>;
  where?: InputMaybe<ReleaseRecordingsConnectionWhere>;
};


export type ReleaseStatusArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ReleaseStatusOptions>;
  where?: InputMaybe<ReleaseStatusWhere>;
};


export type ReleaseStatusAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ReleaseStatusWhere>;
};


export type ReleaseStatusConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ReleaseStatusConnectionSort>>;
  where?: InputMaybe<ReleaseStatusConnectionWhere>;
};

export type ReleaseAggregateSelection = {
  __typename?: 'ReleaseAggregateSelection';
  comment: StringAggregateSelectionNullable;
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type ReleaseArtistArtistCreditAggregationSelection = {
  __typename?: 'ReleaseArtistArtistCreditAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ReleaseArtistArtistCreditNodeAggregateSelection>;
};

export type ReleaseArtistArtistCreditNodeAggregateSelection = {
  __typename?: 'ReleaseArtistArtistCreditNodeAggregateSelection';
  beginDate: StringAggregateSelectionNonNullable;
  comment: StringAggregateSelectionNullable;
  creditCount: IntAggregateSelectionNonNullable;
  endDate: StringAggregateSelectionNullable;
  ipi: StringAggregateSelectionNullable;
  isni: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ReleaseArtistCreditAggregateInput = {
  AND?: InputMaybe<Array<ReleaseArtistCreditAggregateInput>>;
  OR?: InputMaybe<Array<ReleaseArtistCreditAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ReleaseArtistCreditNodeAggregationWhereInput>;
};

export type ReleaseArtistCreditConnectFieldInput = {
  connect?: InputMaybe<ArtistConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ArtistConnectWhere>;
};

export type ReleaseArtistCreditConnection = {
  __typename?: 'ReleaseArtistCreditConnection';
  edges: Array<ReleaseArtistCreditRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseArtistCreditConnectionSort = {
  node?: InputMaybe<ArtistSort>;
};

export type ReleaseArtistCreditConnectionWhere = {
  AND?: InputMaybe<Array<ReleaseArtistCreditConnectionWhere>>;
  OR?: InputMaybe<Array<ReleaseArtistCreditConnectionWhere>>;
  node?: InputMaybe<ArtistWhere>;
  node_NOT?: InputMaybe<ArtistWhere>;
};

export type ReleaseArtistCreditCreateFieldInput = {
  node: ArtistCreateInput;
};

export type ReleaseArtistCreditDeleteFieldInput = {
  delete?: InputMaybe<ArtistDeleteInput>;
  where?: InputMaybe<ReleaseArtistCreditConnectionWhere>;
};

export type ReleaseArtistCreditDisconnectFieldInput = {
  disconnect?: InputMaybe<ArtistDisconnectInput>;
  where?: InputMaybe<ReleaseArtistCreditConnectionWhere>;
};

export type ReleaseArtistCreditFieldInput = {
  connect?: InputMaybe<ReleaseArtistCreditConnectFieldInput>;
  create?: InputMaybe<ReleaseArtistCreditCreateFieldInput>;
};

export type ReleaseArtistCreditNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReleaseArtistCreditNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReleaseArtistCreditNodeAggregationWhereInput>>;
  beginDate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  beginDate_EQUAL?: InputMaybe<Scalars['String']>;
  beginDate_GT?: InputMaybe<Scalars['Int']>;
  beginDate_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  beginDate_LT?: InputMaybe<Scalars['Int']>;
  beginDate_LTE?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  comment_EQUAL?: InputMaybe<Scalars['String']>;
  comment_GT?: InputMaybe<Scalars['Int']>;
  comment_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_LT?: InputMaybe<Scalars['Int']>;
  comment_LTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creditCount_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_GT?: InputMaybe<Scalars['Int']>;
  creditCount_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_LT?: InputMaybe<Scalars['Int']>;
  creditCount_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  endDate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  endDate_EQUAL?: InputMaybe<Scalars['String']>;
  endDate_GT?: InputMaybe<Scalars['Int']>;
  endDate_GTE?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  endDate_LT?: InputMaybe<Scalars['Int']>;
  endDate_LTE?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  ipi_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  ipi_EQUAL?: InputMaybe<Scalars['String']>;
  ipi_GT?: InputMaybe<Scalars['Int']>;
  ipi_GTE?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  ipi_LT?: InputMaybe<Scalars['Int']>;
  ipi_LTE?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  isni_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  isni_EQUAL?: InputMaybe<Scalars['String']>;
  isni_GT?: InputMaybe<Scalars['Int']>;
  isni_GTE?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  isni_LT?: InputMaybe<Scalars['Int']>;
  isni_LTE?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ReleaseArtistCreditRelationship = {
  __typename?: 'ReleaseArtistCreditRelationship';
  cursor: Scalars['String'];
  node: Artist;
};

export type ReleaseArtistCreditUpdateConnectionInput = {
  node?: InputMaybe<ArtistUpdateInput>;
};

export type ReleaseArtistCreditUpdateFieldInput = {
  connect?: InputMaybe<ReleaseArtistCreditConnectFieldInput>;
  create?: InputMaybe<ReleaseArtistCreditCreateFieldInput>;
  delete?: InputMaybe<ReleaseArtistCreditDeleteFieldInput>;
  disconnect?: InputMaybe<ReleaseArtistCreditDisconnectFieldInput>;
  update?: InputMaybe<ReleaseArtistCreditUpdateConnectionInput>;
  where?: InputMaybe<ReleaseArtistCreditConnectionWhere>;
};

export type ReleaseConnectInput = {
  artistCredit?: InputMaybe<ReleaseArtistCreditConnectFieldInput>;
  quality?: InputMaybe<ReleaseQualityConnectFieldInput>;
  recordings?: InputMaybe<Array<ReleaseRecordingsConnectFieldInput>>;
  status?: InputMaybe<ReleaseStatusConnectFieldInput>;
};

export type ReleaseConnectWhere = {
  node: ReleaseWhere;
};

export type ReleaseCreateInput = {
  artistCredit?: InputMaybe<ReleaseArtistCreditFieldInput>;
  comment?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  quality?: InputMaybe<ReleaseQualityFieldInput>;
  recordings?: InputMaybe<ReleaseRecordingsFieldInput>;
  status?: InputMaybe<ReleaseStatusFieldInput>;
};

export type ReleaseDeleteInput = {
  artistCredit?: InputMaybe<ReleaseArtistCreditDeleteFieldInput>;
  quality?: InputMaybe<ReleaseQualityDeleteFieldInput>;
  recordings?: InputMaybe<Array<ReleaseRecordingsDeleteFieldInput>>;
  status?: InputMaybe<ReleaseStatusDeleteFieldInput>;
};

export type ReleaseDisconnectInput = {
  artistCredit?: InputMaybe<ReleaseArtistCreditDisconnectFieldInput>;
  quality?: InputMaybe<ReleaseQualityDisconnectFieldInput>;
  recordings?: InputMaybe<Array<ReleaseRecordingsDisconnectFieldInput>>;
  status?: InputMaybe<ReleaseStatusDisconnectFieldInput>;
};

export type ReleaseEdge = {
  __typename?: 'ReleaseEdge';
  cursor: Scalars['String'];
  node: Release;
};

export type ReleaseOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ReleaseSort objects to sort Releases by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReleaseSort>>;
};

export type ReleaseQualitiesConnection = {
  __typename?: 'ReleaseQualitiesConnection';
  edges: Array<ReleaseQualityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseQuality = {
  __typename?: 'ReleaseQuality';
  name?: Maybe<ReleaseQualityEnum>;
};

export type ReleaseQualityAggregateInput = {
  AND?: InputMaybe<Array<ReleaseQualityAggregateInput>>;
  OR?: InputMaybe<Array<ReleaseQualityAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
};

export type ReleaseQualityAggregateSelection = {
  __typename?: 'ReleaseQualityAggregateSelection';
  count: Scalars['Int'];
};

export type ReleaseQualityConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ReleaseQualityConnectWhere>;
};

export type ReleaseQualityConnectWhere = {
  node: ReleaseQualityWhere;
};

export type ReleaseQualityConnection = {
  __typename?: 'ReleaseQualityConnection';
  edges: Array<ReleaseQualityRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseQualityConnectionSort = {
  node?: InputMaybe<ReleaseQualitySort>;
};

export type ReleaseQualityConnectionWhere = {
  AND?: InputMaybe<Array<ReleaseQualityConnectionWhere>>;
  OR?: InputMaybe<Array<ReleaseQualityConnectionWhere>>;
  node?: InputMaybe<ReleaseQualityWhere>;
  node_NOT?: InputMaybe<ReleaseQualityWhere>;
};

export type ReleaseQualityCreateFieldInput = {
  node: ReleaseQualityCreateInput;
};

export type ReleaseQualityCreateInput = {
  name?: InputMaybe<ReleaseQualityEnum>;
};

export type ReleaseQualityDeleteFieldInput = {
  where?: InputMaybe<ReleaseQualityConnectionWhere>;
};

export type ReleaseQualityDisconnectFieldInput = {
  where?: InputMaybe<ReleaseQualityConnectionWhere>;
};

export type ReleaseQualityEdge = {
  __typename?: 'ReleaseQualityEdge';
  cursor: Scalars['String'];
  node: ReleaseQuality;
};

export enum ReleaseQualityEnum {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type ReleaseQualityFieldInput = {
  connect?: InputMaybe<ReleaseQualityConnectFieldInput>;
  create?: InputMaybe<ReleaseQualityCreateFieldInput>;
};

export type ReleaseQualityOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ReleaseQualitySort objects to sort ReleaseQualities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReleaseQualitySort>>;
};

export type ReleaseQualityRelationship = {
  __typename?: 'ReleaseQualityRelationship';
  cursor: Scalars['String'];
  node: ReleaseQuality;
};

/** Fields to sort ReleaseQualities by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReleaseQualitySort object. */
export type ReleaseQualitySort = {
  name?: InputMaybe<SortDirection>;
};

export type ReleaseQualityUpdateConnectionInput = {
  node?: InputMaybe<ReleaseQualityUpdateInput>;
};

export type ReleaseQualityUpdateFieldInput = {
  connect?: InputMaybe<ReleaseQualityConnectFieldInput>;
  create?: InputMaybe<ReleaseQualityCreateFieldInput>;
  delete?: InputMaybe<ReleaseQualityDeleteFieldInput>;
  disconnect?: InputMaybe<ReleaseQualityDisconnectFieldInput>;
  update?: InputMaybe<ReleaseQualityUpdateConnectionInput>;
  where?: InputMaybe<ReleaseQualityConnectionWhere>;
};

export type ReleaseQualityUpdateInput = {
  name?: InputMaybe<ReleaseQualityEnum>;
};

export type ReleaseQualityWhere = {
  AND?: InputMaybe<Array<ReleaseQualityWhere>>;
  OR?: InputMaybe<Array<ReleaseQualityWhere>>;
  name?: InputMaybe<ReleaseQualityEnum>;
  name_IN?: InputMaybe<Array<InputMaybe<ReleaseQualityEnum>>>;
  name_NOT?: InputMaybe<ReleaseQualityEnum>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<ReleaseQualityEnum>>>;
};

export type ReleaseRecordingRecordingsAggregationSelection = {
  __typename?: 'ReleaseRecordingRecordingsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ReleaseRecordingRecordingsNodeAggregateSelection>;
};

export type ReleaseRecordingRecordingsNodeAggregateSelection = {
  __typename?: 'ReleaseRecordingRecordingsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type ReleaseRecordingsAggregateInput = {
  AND?: InputMaybe<Array<ReleaseRecordingsAggregateInput>>;
  OR?: InputMaybe<Array<ReleaseRecordingsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ReleaseRecordingsNodeAggregationWhereInput>;
};

export type ReleaseRecordingsConnectFieldInput = {
  connect?: InputMaybe<Array<RecordingConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RecordingConnectWhere>;
};

export type ReleaseRecordingsConnection = {
  __typename?: 'ReleaseRecordingsConnection';
  edges: Array<ReleaseRecordingsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseRecordingsConnectionSort = {
  node?: InputMaybe<RecordingSort>;
};

export type ReleaseRecordingsConnectionWhere = {
  AND?: InputMaybe<Array<ReleaseRecordingsConnectionWhere>>;
  OR?: InputMaybe<Array<ReleaseRecordingsConnectionWhere>>;
  node?: InputMaybe<RecordingWhere>;
  node_NOT?: InputMaybe<RecordingWhere>;
};

export type ReleaseRecordingsCreateFieldInput = {
  node: RecordingCreateInput;
};

export type ReleaseRecordingsDeleteFieldInput = {
  delete?: InputMaybe<RecordingDeleteInput>;
  where?: InputMaybe<ReleaseRecordingsConnectionWhere>;
};

export type ReleaseRecordingsDisconnectFieldInput = {
  disconnect?: InputMaybe<RecordingDisconnectInput>;
  where?: InputMaybe<ReleaseRecordingsConnectionWhere>;
};

export type ReleaseRecordingsFieldInput = {
  connect?: InputMaybe<Array<ReleaseRecordingsConnectFieldInput>>;
  create?: InputMaybe<Array<ReleaseRecordingsCreateFieldInput>>;
};

export type ReleaseRecordingsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReleaseRecordingsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ReleaseRecordingsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ReleaseRecordingsRelationship = {
  __typename?: 'ReleaseRecordingsRelationship';
  cursor: Scalars['String'];
  node: Recording;
};

export type ReleaseRecordingsUpdateConnectionInput = {
  node?: InputMaybe<RecordingUpdateInput>;
};

export type ReleaseRecordingsUpdateFieldInput = {
  connect?: InputMaybe<Array<ReleaseRecordingsConnectFieldInput>>;
  create?: InputMaybe<Array<ReleaseRecordingsCreateFieldInput>>;
  delete?: InputMaybe<Array<ReleaseRecordingsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ReleaseRecordingsDisconnectFieldInput>>;
  update?: InputMaybe<ReleaseRecordingsUpdateConnectionInput>;
  where?: InputMaybe<ReleaseRecordingsConnectionWhere>;
};

export type ReleaseRelationInput = {
  artistCredit?: InputMaybe<ReleaseArtistCreditCreateFieldInput>;
  quality?: InputMaybe<ReleaseQualityCreateFieldInput>;
  recordings?: InputMaybe<Array<ReleaseRecordingsCreateFieldInput>>;
  status?: InputMaybe<ReleaseStatusCreateFieldInput>;
};

export type ReleaseReleaseQualityQualityAggregationSelection = {
  __typename?: 'ReleaseReleaseQualityQualityAggregationSelection';
  count: Scalars['Int'];
};

export type ReleaseReleaseStatusStatusAggregationSelection = {
  __typename?: 'ReleaseReleaseStatusStatusAggregationSelection';
  count: Scalars['Int'];
};

/** Fields to sort Releases by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReleaseSort object. */
export type ReleaseSort = {
  comment?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type ReleaseStatus = {
  __typename?: 'ReleaseStatus';
  name?: Maybe<ReleaseStatusEnum>;
};

export type ReleaseStatusAggregateInput = {
  AND?: InputMaybe<Array<ReleaseStatusAggregateInput>>;
  OR?: InputMaybe<Array<ReleaseStatusAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
};

export type ReleaseStatusAggregateSelection = {
  __typename?: 'ReleaseStatusAggregateSelection';
  count: Scalars['Int'];
};

export type ReleaseStatusConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ReleaseStatusConnectWhere>;
};

export type ReleaseStatusConnectWhere = {
  node: ReleaseStatusWhere;
};

export type ReleaseStatusConnection = {
  __typename?: 'ReleaseStatusConnection';
  edges: Array<ReleaseStatusRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseStatusConnectionSort = {
  node?: InputMaybe<ReleaseStatusSort>;
};

export type ReleaseStatusConnectionWhere = {
  AND?: InputMaybe<Array<ReleaseStatusConnectionWhere>>;
  OR?: InputMaybe<Array<ReleaseStatusConnectionWhere>>;
  node?: InputMaybe<ReleaseStatusWhere>;
  node_NOT?: InputMaybe<ReleaseStatusWhere>;
};

export type ReleaseStatusCreateFieldInput = {
  node: ReleaseStatusCreateInput;
};

export type ReleaseStatusCreateInput = {
  name?: InputMaybe<ReleaseStatusEnum>;
};

export type ReleaseStatusDeleteFieldInput = {
  where?: InputMaybe<ReleaseStatusConnectionWhere>;
};

export type ReleaseStatusDisconnectFieldInput = {
  where?: InputMaybe<ReleaseStatusConnectionWhere>;
};

export type ReleaseStatusEdge = {
  __typename?: 'ReleaseStatusEdge';
  cursor: Scalars['String'];
  node: ReleaseStatus;
};

export enum ReleaseStatusEnum {
  Released = 'RELEASED',
  ScheduledRelease = 'SCHEDULED_RELEASE',
  UnscheduledRelease = 'UNSCHEDULED_RELEASE'
}

export type ReleaseStatusFieldInput = {
  connect?: InputMaybe<ReleaseStatusConnectFieldInput>;
  create?: InputMaybe<ReleaseStatusCreateFieldInput>;
};

export type ReleaseStatusOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ReleaseStatusSort objects to sort ReleaseStatuses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReleaseStatusSort>>;
};

export type ReleaseStatusRelationship = {
  __typename?: 'ReleaseStatusRelationship';
  cursor: Scalars['String'];
  node: ReleaseStatus;
};

/** Fields to sort ReleaseStatuses by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReleaseStatusSort object. */
export type ReleaseStatusSort = {
  name?: InputMaybe<SortDirection>;
};

export type ReleaseStatusUpdateConnectionInput = {
  node?: InputMaybe<ReleaseStatusUpdateInput>;
};

export type ReleaseStatusUpdateFieldInput = {
  connect?: InputMaybe<ReleaseStatusConnectFieldInput>;
  create?: InputMaybe<ReleaseStatusCreateFieldInput>;
  delete?: InputMaybe<ReleaseStatusDeleteFieldInput>;
  disconnect?: InputMaybe<ReleaseStatusDisconnectFieldInput>;
  update?: InputMaybe<ReleaseStatusUpdateConnectionInput>;
  where?: InputMaybe<ReleaseStatusConnectionWhere>;
};

export type ReleaseStatusUpdateInput = {
  name?: InputMaybe<ReleaseStatusEnum>;
};

export type ReleaseStatusWhere = {
  AND?: InputMaybe<Array<ReleaseStatusWhere>>;
  OR?: InputMaybe<Array<ReleaseStatusWhere>>;
  name?: InputMaybe<ReleaseStatusEnum>;
  name_IN?: InputMaybe<Array<InputMaybe<ReleaseStatusEnum>>>;
  name_NOT?: InputMaybe<ReleaseStatusEnum>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<ReleaseStatusEnum>>>;
};

export type ReleaseStatusesConnection = {
  __typename?: 'ReleaseStatusesConnection';
  edges: Array<ReleaseStatusEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReleaseUpdateInput = {
  artistCredit?: InputMaybe<ReleaseArtistCreditUpdateFieldInput>;
  comment?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<ReleaseQualityUpdateFieldInput>;
  recordings?: InputMaybe<Array<ReleaseRecordingsUpdateFieldInput>>;
  status?: InputMaybe<ReleaseStatusUpdateFieldInput>;
};

export type ReleaseWhere = {
  AND?: InputMaybe<Array<ReleaseWhere>>;
  OR?: InputMaybe<Array<ReleaseWhere>>;
  artistCredit?: InputMaybe<ArtistWhere>;
  artistCreditAggregate?: InputMaybe<ReleaseArtistCreditAggregateInput>;
  artistCreditConnection?: InputMaybe<ReleaseArtistCreditConnectionWhere>;
  artistCreditConnection_NOT?: InputMaybe<ReleaseArtistCreditConnectionWhere>;
  artistCredit_NOT?: InputMaybe<ArtistWhere>;
  comment?: InputMaybe<Scalars['String']>;
  comment_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT?: InputMaybe<Scalars['String']>;
  comment_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  comment_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<ReleaseQualityWhere>;
  qualityAggregate?: InputMaybe<ReleaseQualityAggregateInput>;
  qualityConnection?: InputMaybe<ReleaseQualityConnectionWhere>;
  qualityConnection_NOT?: InputMaybe<ReleaseQualityConnectionWhere>;
  quality_NOT?: InputMaybe<ReleaseQualityWhere>;
  recordingsAggregate?: InputMaybe<ReleaseRecordingsAggregateInput>;
  recordingsConnection_ALL?: InputMaybe<ReleaseRecordingsConnectionWhere>;
  recordingsConnection_NONE?: InputMaybe<ReleaseRecordingsConnectionWhere>;
  recordingsConnection_SINGLE?: InputMaybe<ReleaseRecordingsConnectionWhere>;
  recordingsConnection_SOME?: InputMaybe<ReleaseRecordingsConnectionWhere>;
  /** Return Releases where all of the related Recordings match this filter */
  recordings_ALL?: InputMaybe<RecordingWhere>;
  /** Return Releases where none of the related Recordings match this filter */
  recordings_NONE?: InputMaybe<RecordingWhere>;
  /** Return Releases where one of the related Recordings match this filter */
  recordings_SINGLE?: InputMaybe<RecordingWhere>;
  /** Return Releases where some of the related Recordings match this filter */
  recordings_SOME?: InputMaybe<RecordingWhere>;
  status?: InputMaybe<ReleaseStatusWhere>;
  statusAggregate?: InputMaybe<ReleaseStatusAggregateInput>;
  statusConnection?: InputMaybe<ReleaseStatusConnectionWhere>;
  statusConnection_NOT?: InputMaybe<ReleaseStatusConnectionWhere>;
  status_NOT?: InputMaybe<ReleaseStatusWhere>;
};

export type ReleasesConnection = {
  __typename?: 'ReleasesConnection';
  edges: Array<ReleaseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type Spatial = {
  area: Area;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type Temporal = {
  beginDate: Scalars['String'];
  endDate?: Maybe<Scalars['String']>;
};

export type Track = {
  __typename?: 'Track';
  medium: Medium;
  mediumAggregate?: Maybe<TrackMediumMediumAggregationSelection>;
  mediumConnection: TrackMediumConnection;
  name: Scalars['String'];
  recording: Recording;
  recordingAggregate?: Maybe<TrackRecordingRecordingAggregationSelection>;
  recordingConnection: TrackRecordingConnection;
};


export type TrackMediumArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MediumOptions>;
  where?: InputMaybe<MediumWhere>;
};


export type TrackMediumAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MediumWhere>;
};


export type TrackMediumConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TrackMediumConnectionSort>>;
  where?: InputMaybe<TrackMediumConnectionWhere>;
};


export type TrackRecordingArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RecordingOptions>;
  where?: InputMaybe<RecordingWhere>;
};


export type TrackRecordingAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RecordingWhere>;
};


export type TrackRecordingConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TrackRecordingConnectionSort>>;
  where?: InputMaybe<TrackRecordingConnectionWhere>;
};

export type TrackAggregateSelection = {
  __typename?: 'TrackAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type TrackConnectInput = {
  medium?: InputMaybe<TrackMediumConnectFieldInput>;
  recording?: InputMaybe<TrackRecordingConnectFieldInput>;
};

export type TrackCreateInput = {
  medium?: InputMaybe<TrackMediumFieldInput>;
  name: Scalars['String'];
  recording?: InputMaybe<TrackRecordingFieldInput>;
};

export type TrackDeleteInput = {
  medium?: InputMaybe<TrackMediumDeleteFieldInput>;
  recording?: InputMaybe<TrackRecordingDeleteFieldInput>;
};

export type TrackDisconnectInput = {
  medium?: InputMaybe<TrackMediumDisconnectFieldInput>;
  recording?: InputMaybe<TrackRecordingDisconnectFieldInput>;
};

export type TrackEdge = {
  __typename?: 'TrackEdge';
  cursor: Scalars['String'];
  node: Track;
};

export type TrackMediumAggregateInput = {
  AND?: InputMaybe<Array<TrackMediumAggregateInput>>;
  OR?: InputMaybe<Array<TrackMediumAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TrackMediumNodeAggregationWhereInput>;
};

export type TrackMediumConnectFieldInput = {
  connect?: InputMaybe<MediumConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<MediumConnectWhere>;
};

export type TrackMediumConnection = {
  __typename?: 'TrackMediumConnection';
  edges: Array<TrackMediumRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TrackMediumConnectionSort = {
  node?: InputMaybe<MediumSort>;
};

export type TrackMediumConnectionWhere = {
  AND?: InputMaybe<Array<TrackMediumConnectionWhere>>;
  OR?: InputMaybe<Array<TrackMediumConnectionWhere>>;
  node?: InputMaybe<MediumWhere>;
  node_NOT?: InputMaybe<MediumWhere>;
};

export type TrackMediumCreateFieldInput = {
  node: MediumCreateInput;
};

export type TrackMediumDeleteFieldInput = {
  delete?: InputMaybe<MediumDeleteInput>;
  where?: InputMaybe<TrackMediumConnectionWhere>;
};

export type TrackMediumDisconnectFieldInput = {
  disconnect?: InputMaybe<MediumDisconnectInput>;
  where?: InputMaybe<TrackMediumConnectionWhere>;
};

export type TrackMediumFieldInput = {
  connect?: InputMaybe<TrackMediumConnectFieldInput>;
  create?: InputMaybe<TrackMediumCreateFieldInput>;
};

export type TrackMediumMediumAggregationSelection = {
  __typename?: 'TrackMediumMediumAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TrackMediumMediumNodeAggregateSelection>;
};

export type TrackMediumMediumNodeAggregateSelection = {
  __typename?: 'TrackMediumMediumNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type TrackMediumNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TrackMediumNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TrackMediumNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type TrackMediumRelationship = {
  __typename?: 'TrackMediumRelationship';
  cursor: Scalars['String'];
  node: Medium;
};

export type TrackMediumUpdateConnectionInput = {
  node?: InputMaybe<MediumUpdateInput>;
};

export type TrackMediumUpdateFieldInput = {
  connect?: InputMaybe<TrackMediumConnectFieldInput>;
  create?: InputMaybe<TrackMediumCreateFieldInput>;
  delete?: InputMaybe<TrackMediumDeleteFieldInput>;
  disconnect?: InputMaybe<TrackMediumDisconnectFieldInput>;
  update?: InputMaybe<TrackMediumUpdateConnectionInput>;
  where?: InputMaybe<TrackMediumConnectionWhere>;
};

export type TrackOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TrackSort objects to sort Tracks by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TrackSort>>;
};

export type TrackRecordingAggregateInput = {
  AND?: InputMaybe<Array<TrackRecordingAggregateInput>>;
  OR?: InputMaybe<Array<TrackRecordingAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TrackRecordingNodeAggregationWhereInput>;
};

export type TrackRecordingConnectFieldInput = {
  connect?: InputMaybe<RecordingConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RecordingConnectWhere>;
};

export type TrackRecordingConnection = {
  __typename?: 'TrackRecordingConnection';
  edges: Array<TrackRecordingRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TrackRecordingConnectionSort = {
  node?: InputMaybe<RecordingSort>;
};

export type TrackRecordingConnectionWhere = {
  AND?: InputMaybe<Array<TrackRecordingConnectionWhere>>;
  OR?: InputMaybe<Array<TrackRecordingConnectionWhere>>;
  node?: InputMaybe<RecordingWhere>;
  node_NOT?: InputMaybe<RecordingWhere>;
};

export type TrackRecordingCreateFieldInput = {
  node: RecordingCreateInput;
};

export type TrackRecordingDeleteFieldInput = {
  delete?: InputMaybe<RecordingDeleteInput>;
  where?: InputMaybe<TrackRecordingConnectionWhere>;
};

export type TrackRecordingDisconnectFieldInput = {
  disconnect?: InputMaybe<RecordingDisconnectInput>;
  where?: InputMaybe<TrackRecordingConnectionWhere>;
};

export type TrackRecordingFieldInput = {
  connect?: InputMaybe<TrackRecordingConnectFieldInput>;
  create?: InputMaybe<TrackRecordingCreateFieldInput>;
};

export type TrackRecordingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TrackRecordingNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TrackRecordingNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type TrackRecordingRecordingAggregationSelection = {
  __typename?: 'TrackRecordingRecordingAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TrackRecordingRecordingNodeAggregateSelection>;
};

export type TrackRecordingRecordingNodeAggregateSelection = {
  __typename?: 'TrackRecordingRecordingNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
};

export type TrackRecordingRelationship = {
  __typename?: 'TrackRecordingRelationship';
  cursor: Scalars['String'];
  node: Recording;
};

export type TrackRecordingUpdateConnectionInput = {
  node?: InputMaybe<RecordingUpdateInput>;
};

export type TrackRecordingUpdateFieldInput = {
  connect?: InputMaybe<TrackRecordingConnectFieldInput>;
  create?: InputMaybe<TrackRecordingCreateFieldInput>;
  delete?: InputMaybe<TrackRecordingDeleteFieldInput>;
  disconnect?: InputMaybe<TrackRecordingDisconnectFieldInput>;
  update?: InputMaybe<TrackRecordingUpdateConnectionInput>;
  where?: InputMaybe<TrackRecordingConnectionWhere>;
};

export type TrackRelationInput = {
  medium?: InputMaybe<TrackMediumCreateFieldInput>;
  recording?: InputMaybe<TrackRecordingCreateFieldInput>;
};

/** Fields to sort Tracks by. The order in which sorts are applied is not guaranteed when specifying many fields in one TrackSort object. */
export type TrackSort = {
  name?: InputMaybe<SortDirection>;
};

export type TrackUpdateInput = {
  medium?: InputMaybe<TrackMediumUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  recording?: InputMaybe<TrackRecordingUpdateFieldInput>;
};

export type TrackWhere = {
  AND?: InputMaybe<Array<TrackWhere>>;
  OR?: InputMaybe<Array<TrackWhere>>;
  medium?: InputMaybe<MediumWhere>;
  mediumAggregate?: InputMaybe<TrackMediumAggregateInput>;
  mediumConnection?: InputMaybe<TrackMediumConnectionWhere>;
  mediumConnection_NOT?: InputMaybe<TrackMediumConnectionWhere>;
  medium_NOT?: InputMaybe<MediumWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  recording?: InputMaybe<RecordingWhere>;
  recordingAggregate?: InputMaybe<TrackRecordingAggregateInput>;
  recordingConnection?: InputMaybe<TrackRecordingConnectionWhere>;
  recordingConnection_NOT?: InputMaybe<TrackRecordingConnectionWhere>;
  recording_NOT?: InputMaybe<RecordingWhere>;
};

export type TracksConnection = {
  __typename?: 'TracksConnection';
  edges: Array<TrackEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UpdateAreaTypesMutationResponse = {
  __typename?: 'UpdateAreaTypesMutationResponse';
  areaTypes: Array<AreaType>;
  info: UpdateInfo;
};

export type UpdateAreasMutationResponse = {
  __typename?: 'UpdateAreasMutationResponse';
  areas: Array<Area>;
  info: UpdateInfo;
};

export type UpdateArtistTypesMutationResponse = {
  __typename?: 'UpdateArtistTypesMutationResponse';
  artistTypes: Array<ArtistType>;
  info: UpdateInfo;
};

export type UpdateArtistsMutationResponse = {
  __typename?: 'UpdateArtistsMutationResponse';
  artists: Array<Artist>;
  info: UpdateInfo;
};

export type UpdateFormatsMutationResponse = {
  __typename?: 'UpdateFormatsMutationResponse';
  formats: Array<Format>;
  info: UpdateInfo;
};

export type UpdateGendersMutationResponse = {
  __typename?: 'UpdateGendersMutationResponse';
  genders: Array<Gender>;
  info: UpdateInfo;
};

export type UpdateGeosMutationResponse = {
  __typename?: 'UpdateGeosMutationResponse';
  geos: Array<Geo>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateLabelTypesMutationResponse = {
  __typename?: 'UpdateLabelTypesMutationResponse';
  info: UpdateInfo;
  labelTypes: Array<LabelType>;
};

export type UpdateLabelsMutationResponse = {
  __typename?: 'UpdateLabelsMutationResponse';
  info: UpdateInfo;
  labels: Array<Label>;
};

export type UpdateMediumsMutationResponse = {
  __typename?: 'UpdateMediumsMutationResponse';
  info: UpdateInfo;
  mediums: Array<Medium>;
};

export type UpdateRecordingsMutationResponse = {
  __typename?: 'UpdateRecordingsMutationResponse';
  info: UpdateInfo;
  recordings: Array<Recording>;
};

export type UpdateReleaseQualitiesMutationResponse = {
  __typename?: 'UpdateReleaseQualitiesMutationResponse';
  info: UpdateInfo;
  releaseQualities: Array<ReleaseQuality>;
};

export type UpdateReleaseStatusesMutationResponse = {
  __typename?: 'UpdateReleaseStatusesMutationResponse';
  info: UpdateInfo;
  releaseStatuses: Array<ReleaseStatus>;
};

export type UpdateReleasesMutationResponse = {
  __typename?: 'UpdateReleasesMutationResponse';
  info: UpdateInfo;
  releases: Array<Release>;
};

export type UpdateTracksMutationResponse = {
  __typename?: 'UpdateTracksMutationResponse';
  info: UpdateInfo;
  tracks: Array<Track>;
};

export type UpdateWorkTypesMutationResponse = {
  __typename?: 'UpdateWorkTypesMutationResponse';
  info: UpdateInfo;
  workTypes: Array<WorkType>;
};

export type UpdateWorksMutationResponse = {
  __typename?: 'UpdateWorksMutationResponse';
  info: UpdateInfo;
  works: Array<Work>;
};

export type Work = {
  __typename?: 'Work';
  artist: Artist;
  artistAggregate?: Maybe<WorkArtistArtistAggregationSelection>;
  artistConnection: WorkArtistConnection;
  comment?: Maybe<Scalars['String']>;
  iswc: Scalars['String'];
  name: Scalars['String'];
  type: WorkType;
};


export type WorkArtistArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ArtistOptions>;
  where?: InputMaybe<ArtistWhere>;
};


export type WorkArtistAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ArtistWhere>;
};


export type WorkArtistConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<WorkArtistConnectionSort>>;
  where?: InputMaybe<WorkArtistConnectionWhere>;
};

export type WorkAggregateSelection = {
  __typename?: 'WorkAggregateSelection';
  comment: StringAggregateSelectionNullable;
  count: Scalars['Int'];
  iswc: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type WorkArtistAggregateInput = {
  AND?: InputMaybe<Array<WorkArtistAggregateInput>>;
  OR?: InputMaybe<Array<WorkArtistAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<WorkArtistNodeAggregationWhereInput>;
};

export type WorkArtistArtistAggregationSelection = {
  __typename?: 'WorkArtistArtistAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<WorkArtistArtistNodeAggregateSelection>;
};

export type WorkArtistArtistNodeAggregateSelection = {
  __typename?: 'WorkArtistArtistNodeAggregateSelection';
  beginDate: StringAggregateSelectionNonNullable;
  comment: StringAggregateSelectionNullable;
  creditCount: IntAggregateSelectionNonNullable;
  endDate: StringAggregateSelectionNullable;
  ipi: StringAggregateSelectionNullable;
  isni: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
};

export type WorkArtistConnectFieldInput = {
  connect?: InputMaybe<ArtistConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ArtistConnectWhere>;
};

export type WorkArtistConnection = {
  __typename?: 'WorkArtistConnection';
  edges: Array<WorkArtistRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type WorkArtistConnectionSort = {
  node?: InputMaybe<ArtistSort>;
};

export type WorkArtistConnectionWhere = {
  AND?: InputMaybe<Array<WorkArtistConnectionWhere>>;
  OR?: InputMaybe<Array<WorkArtistConnectionWhere>>;
  node?: InputMaybe<ArtistWhere>;
  node_NOT?: InputMaybe<ArtistWhere>;
};

export type WorkArtistCreateFieldInput = {
  node: ArtistCreateInput;
};

export type WorkArtistDeleteFieldInput = {
  delete?: InputMaybe<ArtistDeleteInput>;
  where?: InputMaybe<WorkArtistConnectionWhere>;
};

export type WorkArtistDisconnectFieldInput = {
  disconnect?: InputMaybe<ArtistDisconnectInput>;
  where?: InputMaybe<WorkArtistConnectionWhere>;
};

export type WorkArtistFieldInput = {
  connect?: InputMaybe<WorkArtistConnectFieldInput>;
  create?: InputMaybe<WorkArtistCreateFieldInput>;
};

export type WorkArtistNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkArtistNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<WorkArtistNodeAggregationWhereInput>>;
  beginDate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  beginDate_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  beginDate_EQUAL?: InputMaybe<Scalars['String']>;
  beginDate_GT?: InputMaybe<Scalars['Int']>;
  beginDate_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  beginDate_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  beginDate_LT?: InputMaybe<Scalars['Int']>;
  beginDate_LTE?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  beginDate_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  comment_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  comment_EQUAL?: InputMaybe<Scalars['String']>;
  comment_GT?: InputMaybe<Scalars['Int']>;
  comment_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  comment_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  comment_LT?: InputMaybe<Scalars['Int']>;
  comment_LTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  comment_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creditCount_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creditCount_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_GT?: InputMaybe<Scalars['Int']>;
  creditCount_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_LT?: InputMaybe<Scalars['Int']>;
  creditCount_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_GT?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_LT?: InputMaybe<Scalars['Int']>;
  creditCount_MAX_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_GT?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_LT?: InputMaybe<Scalars['Int']>;
  creditCount_MIN_LTE?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_GT?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_GTE?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_LT?: InputMaybe<Scalars['Int']>;
  creditCount_SUM_LTE?: InputMaybe<Scalars['Int']>;
  endDate_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  endDate_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  endDate_EQUAL?: InputMaybe<Scalars['String']>;
  endDate_GT?: InputMaybe<Scalars['Int']>;
  endDate_GTE?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  endDate_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  endDate_LT?: InputMaybe<Scalars['Int']>;
  endDate_LTE?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  endDate_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  ipi_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  ipi_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  ipi_EQUAL?: InputMaybe<Scalars['String']>;
  ipi_GT?: InputMaybe<Scalars['Int']>;
  ipi_GTE?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  ipi_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  ipi_LT?: InputMaybe<Scalars['Int']>;
  ipi_LTE?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  ipi_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  isni_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  isni_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  isni_EQUAL?: InputMaybe<Scalars['String']>;
  isni_GT?: InputMaybe<Scalars['Int']>;
  isni_GTE?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  isni_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  isni_LT?: InputMaybe<Scalars['Int']>;
  isni_LTE?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  isni_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type WorkArtistRelationship = {
  __typename?: 'WorkArtistRelationship';
  cursor: Scalars['String'];
  node: Artist;
};

export type WorkArtistUpdateConnectionInput = {
  node?: InputMaybe<ArtistUpdateInput>;
};

export type WorkArtistUpdateFieldInput = {
  connect?: InputMaybe<WorkArtistConnectFieldInput>;
  create?: InputMaybe<WorkArtistCreateFieldInput>;
  delete?: InputMaybe<WorkArtistDeleteFieldInput>;
  disconnect?: InputMaybe<WorkArtistDisconnectFieldInput>;
  update?: InputMaybe<WorkArtistUpdateConnectionInput>;
  where?: InputMaybe<WorkArtistConnectionWhere>;
};

export type WorkConnectInput = {
  artist?: InputMaybe<WorkArtistConnectFieldInput>;
};

export type WorkConnectWhere = {
  node: WorkWhere;
};

export type WorkCreateInput = {
  artist?: InputMaybe<WorkArtistFieldInput>;
  comment?: InputMaybe<Scalars['String']>;
  iswc: Scalars['String'];
  name: Scalars['String'];
};

export type WorkDeleteInput = {
  artist?: InputMaybe<WorkArtistDeleteFieldInput>;
};

export type WorkDisconnectInput = {
  artist?: InputMaybe<WorkArtistDisconnectFieldInput>;
};

export type WorkEdge = {
  __typename?: 'WorkEdge';
  cursor: Scalars['String'];
  node: Work;
};

export type WorkOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more WorkSort objects to sort Works by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<WorkSort>>;
};

export type WorkRelationInput = {
  artist?: InputMaybe<WorkArtistCreateFieldInput>;
};

/** Fields to sort Works by. The order in which sorts are applied is not guaranteed when specifying many fields in one WorkSort object. */
export type WorkSort = {
  comment?: InputMaybe<SortDirection>;
  iswc?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type WorkType = {
  __typename?: 'WorkType';
  name?: Maybe<WorkTypeEnum>;
};

export type WorkTypeAggregateSelection = {
  __typename?: 'WorkTypeAggregateSelection';
  count: Scalars['Int'];
};

export type WorkTypeCreateInput = {
  name?: InputMaybe<WorkTypeEnum>;
};

export type WorkTypeEdge = {
  __typename?: 'WorkTypeEdge';
  cursor: Scalars['String'];
  node: WorkType;
};

export enum WorkTypeEnum {
  Editing = 'EDITING',
  Songwriting = 'SONGWRITING'
}

export type WorkTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more WorkTypeSort objects to sort WorkTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<WorkTypeSort>>;
};

/** Fields to sort WorkTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one WorkTypeSort object. */
export type WorkTypeSort = {
  name?: InputMaybe<SortDirection>;
};

export type WorkTypeUpdateInput = {
  name?: InputMaybe<WorkTypeEnum>;
};

export type WorkTypeWhere = {
  AND?: InputMaybe<Array<WorkTypeWhere>>;
  OR?: InputMaybe<Array<WorkTypeWhere>>;
  name?: InputMaybe<WorkTypeEnum>;
  name_IN?: InputMaybe<Array<InputMaybe<WorkTypeEnum>>>;
  name_NOT?: InputMaybe<WorkTypeEnum>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<WorkTypeEnum>>>;
};

export type WorkTypesConnection = {
  __typename?: 'WorkTypesConnection';
  edges: Array<WorkTypeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type WorkUpdateInput = {
  artist?: InputMaybe<WorkArtistUpdateFieldInput>;
  comment?: InputMaybe<Scalars['String']>;
  iswc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type WorkWhere = {
  AND?: InputMaybe<Array<WorkWhere>>;
  OR?: InputMaybe<Array<WorkWhere>>;
  artist?: InputMaybe<ArtistWhere>;
  artistAggregate?: InputMaybe<WorkArtistAggregateInput>;
  artistConnection?: InputMaybe<WorkArtistConnectionWhere>;
  artistConnection_NOT?: InputMaybe<WorkArtistConnectionWhere>;
  artist_NOT?: InputMaybe<ArtistWhere>;
  comment?: InputMaybe<Scalars['String']>;
  comment_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT?: InputMaybe<Scalars['String']>;
  comment_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  comment_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  comment_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  comment_STARTS_WITH?: InputMaybe<Scalars['String']>;
  iswc?: InputMaybe<Scalars['String']>;
  iswc_CONTAINS?: InputMaybe<Scalars['String']>;
  iswc_ENDS_WITH?: InputMaybe<Scalars['String']>;
  iswc_IN?: InputMaybe<Array<Scalars['String']>>;
  iswc_NOT?: InputMaybe<Scalars['String']>;
  iswc_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  iswc_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  iswc_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  iswc_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  iswc_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type WorksConnection = {
  __typename?: 'WorksConnection';
  edges: Array<WorkEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', formats: Array<{ __typename?: 'Format', description: string, name: string }> };


export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;