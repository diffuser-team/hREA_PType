/**
 * Observation module datatypes & behaviours
 */

extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;

extern crate vf_core;

pub use vf_core::{ type_aliases, measurement };

pub mod process_specification;
pub mod resource_specification;
pub mod unit;

pub mod identifiers {
    pub const ECONOMIC_RESOURCE: &str = "ECONOMIC_RESOURCE";
    pub const ECONOMIC_RESOURCE_BASE: &str = "ECONOMIC_RESOURCE_BASE";
    pub const ECONOMIC_RESOURCE_INITIAL_ENTRY_LINK: &str = "ECONOMIC_RESOURCE_INITIAL_ENTRY_LINK";
    pub const ECONOMIC_RESOURCE_CONFORMING: &str = "ECONOMIC_RESOURCE_CONFORMING";
    pub const ECONOMIC_RESOURCE_CONFORMING_TAG: &str = "ECONOMIC_RESOURCE_CONFORMING_TAG";

    pub const PROCESS_SPECIFICATION: &str = "ECONOMIC_RESOURCE";
    pub const PROCESS_SPECIFICATION_BASE: &str = "ECONOMIC_RESOURCE_BASE";
    pub const PROCESS_SPECIFICATION_INITIAL_ENTRY_LINK: &str = "ECONOMIC_RESOURCE_INITIAL_ENTRY_LINK";
}
