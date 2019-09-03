use hdk::{
    holochain_json_api::{
        json::JsonString,
        error::JsonError,
    },
};
use holochain_json_derive::{ DefaultJson };

use hdk_graph_helpers::{
    MaybeUndefined,
    record_interface::Updateable,
};

use vf_core::type_aliases::{
    ProcessAddress,
    Timestamp,
    ExternalURL,
    ProcessSpecificationAddress,
    PlanAddress,
    // EventAddress,
    // CommitmentAddress,
    // IntentAddress,
};

#[derive(Serialize, Deserialize, Debug, DefaultJson, Default, Clone)]
pub struct Entry {
    name: String,
    has_beginning: Option<Timestamp>,
    has_end: Option<Timestamp>,
    before: Option<Timestamp>,
    after: Option<Timestamp>,
    classified_as: Option<Vec<ExternalURL>>,
    based_on: Option<ProcessSpecificationAddress>,
    planned_within: Option<PlanAddress>,
    finished: bool,
    in_scope_of: Option<Vec<String>>,
    note: Option<String>,
}

/// Handles update operations by merging any newly provided fields
impl Updateable<UpdateRequest> for Entry {
    fn update_with(&self, e: &UpdateRequest) -> Entry {
        Entry {
            name: if e.name == MaybeUndefined::Undefined { self.name.to_owned() } else { e.name.to_owned().to_option().unwrap() },
            has_beginning: if e.has_beginning == MaybeUndefined::Undefined { self.has_beginning.to_owned() } else { e.has_beginning.to_owned().into() },
            has_end: if e.has_end == MaybeUndefined::Undefined { self.has_end.to_owned() } else { e.has_end.to_owned().into() },
            before: if e.before == MaybeUndefined::Undefined { self.before.to_owned() } else { e.before.to_owned().into() },
            after: if e.after == MaybeUndefined::Undefined { self.after.to_owned() } else { e.after.to_owned().into() },
            classified_as: if e.classified_as == MaybeUndefined::Undefined { self.classified_as.to_owned() } else { e.classified_as.to_owned().into() },
            based_on: if e.based_on == MaybeUndefined::Undefined { self.based_on.to_owned() } else { e.based_on.to_owned().into() },
            planned_within: if e.planned_within == MaybeUndefined::Undefined { self.planned_within.to_owned() } else { e.planned_within.to_owned().into() },
            finished: if e.finished == MaybeUndefined::Undefined { self.finished.to_owned() } else { e.finished.to_owned().to_option().unwrap() },
            in_scope_of: if e.in_scope_of== MaybeUndefined::Undefined { self.in_scope_of.to_owned() } else { e.in_scope_of.to_owned().into() },
            note: if e.note== MaybeUndefined::Undefined { self.note.to_owned() } else { e.note.to_owned().into() },
        }
    }
}

/// I/O struct to describe the complete input record, including all managed links
#[derive(Serialize, Deserialize, Debug, DefaultJson, Default, Clone)]
#[serde(rename_all = "camelCase")]
pub struct CreateRequest {
    name: String,
    #[serde(default)]
    has_beginning: MaybeUndefined<Timestamp>,
    #[serde(default)]
    has_end: MaybeUndefined<Timestamp>,
    #[serde(default)]
    before: MaybeUndefined<Timestamp>,
    #[serde(default)]
    after: MaybeUndefined<Timestamp>,
    #[serde(default)]
    classified_as: MaybeUndefined<Vec<ExternalURL>>,
    #[serde(default)]
    based_on: MaybeUndefined<ProcessSpecificationAddress>,
    #[serde(default)]
    planned_within: MaybeUndefined<PlanAddress>,
    #[serde(default = "default_false")]
    finished: MaybeUndefined<bool>,
    #[serde(default)]
    in_scope_of: MaybeUndefined<Vec<String>>,
    #[serde(default)]
    note: MaybeUndefined<String>,
}

// :TODO: refactor this out into shared code
fn default_false() -> MaybeUndefined<bool> {
    MaybeUndefined::Some(false)
}

impl<'a> CreateRequest {
    // :TODO: accessors for field data
}

/// I/O struct to describe the complete input record, including all managed links
#[derive(Serialize, Deserialize, Debug, DefaultJson, Clone)]
#[serde(rename_all = "camelCase")]
pub struct UpdateRequest {
    id: ProcessAddress,
    #[serde(default)]
    name: MaybeUndefined<String>,
    #[serde(default)]
    has_beginning: MaybeUndefined<Timestamp>,
    #[serde(default)]
    has_end: MaybeUndefined<Timestamp>,
    #[serde(default)]
    before: MaybeUndefined<Timestamp>,
    #[serde(default)]
    after: MaybeUndefined<Timestamp>,
    #[serde(default)]
    classified_as: MaybeUndefined<Vec<ExternalURL>>,
    #[serde(default)]
    based_on: MaybeUndefined<ProcessSpecificationAddress>,
    #[serde(default)]
    planned_within: MaybeUndefined<PlanAddress>,
    #[serde(default)]
    finished: MaybeUndefined<bool>,
    #[serde(default)]
    in_scope_of: MaybeUndefined<Vec<String>>,
    #[serde(default)]
    note: MaybeUndefined<String>,
}

impl<'a> UpdateRequest {
    pub fn get_id(&'a self) -> &ProcessAddress {
        &self.id
    }

    // :TODO: accessors for other field data
}

/// I/O struct to describe the complete output record, including all managed link fields
#[derive(Serialize, Deserialize, Debug, DefaultJson, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Response {
    id: ProcessAddress,
    name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    has_beginning: Option<Timestamp>,
    #[serde(skip_serializing_if = "Option::is_none")]
    has_end: Option<Timestamp>,
    #[serde(skip_serializing_if = "Option::is_none")]
    before: Option<Timestamp>,
    #[serde(skip_serializing_if = "Option::is_none")]
    after: Option<Timestamp>,
    #[serde(skip_serializing_if = "Option::is_none")]
    classified_as: Option<Vec<ExternalURL>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    based_on: Option<ProcessSpecificationAddress>,
    #[serde(skip_serializing_if = "Option::is_none")]
    planned_within: Option<PlanAddress>,
    finished: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    in_scope_of: Option<Vec<String>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    note: Option<String>,
}

/// I/O struct to describe what is returned outside the gateway
#[derive(Serialize, Deserialize, Debug, DefaultJson, Clone)]
#[serde(rename_all = "camelCase")]
pub struct ResponseData {
    process: Response,
}

/// Pick relevant fields out of I/O record into underlying DHT entry
impl From<CreateRequest> for Entry {
    fn from(e: CreateRequest) -> Entry {
        Entry {
            name: e.name.into(),
            has_beginning: e.has_beginning.into(),
            has_end: e.has_end.into(),
            before: e.before.into(),
            after: e.after.into(),
            classified_as: e.classified_as.into(),
            based_on: e.based_on.into(),
            planned_within: e.planned_within.into(),
            finished: e.finished.to_option().unwrap(),  // :NOTE: unsafe, would crash if not for "default_false" binding via Serde
            in_scope_of: e.in_scope_of.into(),
            note: e.note.into(),
        }
    }
}

/// Create response from input DHT primitives
pub fn construct_response(address: &ProcessAddress, e: &Entry) -> ResponseData {
    ResponseData {
        process: Response {
            id: address.to_owned(),
            name: e.name.to_owned(),
            has_beginning: e.has_beginning.to_owned(),
            has_end: e.has_end.to_owned(),
            before: e.before.to_owned(),
            after: e.after.to_owned(),
            classified_as: e.classified_as.to_owned(),
            based_on: e.based_on.to_owned(),
            planned_within: e.planned_within.to_owned(),
            note: e.note.to_owned(),
            in_scope_of: e.in_scope_of.to_owned(),
            finished: e.finished.to_owned(),
        }
    }
}
