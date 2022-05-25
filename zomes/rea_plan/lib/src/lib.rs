/**
 * Holo-REA plan zome library API
 *
 * Contains helper methods that can be used to manipulate `Plan` data
 * structures in either the local Holochain zome, or a separate DNA-local zome.
 *
 * @package Holo-REA
 */
use paste::paste;
use hdk_records::{
    RecordAPIResult,
    records::{
        create_record,
        read_record_entry,
        update_record,
        delete_record,
    },
};
use hdk_semantic_indexes_client_lib::*;

use hc_zome_rea_plan_storage::*;
use hc_zome_rea_plan_rpc::*;

pub use hc_zome_rea_plan_storage::PLAN_ENTRY_TYPE;

pub fn handle_create_plan<S>(entry_def_id: S, plan: CreateRequest) -> RecordAPIResult<ResponseData>
    where S: AsRef<str>
{
    let (header_addr, base_address, entry_resp): (_,_, EntryData) = create_record(&entry_def_id, plan)?;
    construct_response(&base_address, header_addr, &entry_resp, get_link_fields(&base_address)?)
}

pub fn handle_get_plan<S>(entry_def_id: S, address: PlanAddress) -> RecordAPIResult<ResponseData>
    where S: AsRef<str>
{
    let (revision, base_address, entry) = read_record_entry::<EntryData, EntryStorage, _,_,_>(&entry_def_id, address.as_ref())?;
    construct_response(&base_address, revision, &entry, get_link_fields(&base_address)?)
}

pub fn handle_update_plan<S>(entry_def_id: S, plan: UpdateRequest) -> RecordAPIResult<ResponseData>
    where S: AsRef<str>
{
    let revision_hash = plan.get_revision_id().clone();
    let (revision_id, identity_address, entry, _prev_entry): (_,_, EntryData, EntryData) = update_record(&entry_def_id, &revision_hash, plan)?;
    construct_response(&identity_address, revision_id, &entry, get_link_fields(&identity_address)?)
}

pub fn handle_delete_plan(address: HeaderHash) -> RecordAPIResult<bool> {
    delete_record::<EntryData>(&address)
}

/// Create response from input DHT primitives
fn construct_response<'a>(
    address: &PlanAddress, revision: HeaderHash, e: &EntryData, (
        processes,
    ): (
        Vec<ProcessAddress>,
    ),
) -> RecordAPIResult<ResponseData> {
    Ok(ResponseData {
        plan: Response {
            id: address.to_owned(),
            revision_id: revision.to_owned(),
            name: e.name.to_owned(),
            created: e.created.to_owned(),
            due: e.due.to_owned(),
            note: e.note.to_owned(),
            deletable: e.deletable.to_owned(),
            processes: processes.to_owned(),
            commitments: commitments.to_owned(),
        }
    })
}

//---------------- READ ----------------

/// Properties accessor for zome config
fn read_plan_index_zome(conf: DnaConfigSlice) -> Option<String> {
    Some(conf.plan.index_zome)
}

// @see construct_response
fn get_link_fields(base_address: &PlanAddress) -> RecordAPIResult<(
    Vec<ProcessAddress>,
    Vec<CommitmentAddress>,
)> {
    Ok((
        read_index!(plan(base_address).processes)?,
        read_index!(plan(base_address).commitments)?,
    ))
}
