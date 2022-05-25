/**
 * Commitment query indexes for planning DNA
 *
 * @package Holo-REA
 * @since   2021-08-28
 */
use hdk_semantic_indexes_zome_derive::index_zome;
use hc_zome_rea_commitment_rpc::*;

// :TODO: remove this; should not be necessary since all these types are imported
// along with their entry_def! in dependent crates
#[hdk_extern]
fn entry_defs(_: ()) -> ExternResult<EntryDefsCallbackResult> {
    Ok(EntryDefsCallbackResult::from(vec![
        PathEntry::entry_def(),
        ProcessAddress::entry_def(),
        SatisfactionAddress::entry_def(),
        CommitmentAddress::entry_def(),
        ProcessAddress::entry_def(),
        AgreementAddress::entry_def(),
        FulfillmentAddress::entry_def(),
        PlanAddress::entry_def(),
    ]))
}

#[index_zome]
struct Commitment {
    fulfilled_by: Local<fulfillment, fulfills>,
    satisfies: Local<satisfaction, satisfied_by>,
    input_of: Local<process, committed_inputs>,
    output_of: Local<process, committed_outputs>,
    clause_of: Local<agreement, commitments>,
    independent_demand_of: Remote<plan, independent_demands>,
    planned_within: Remote<plan, independent_demands>,
}
