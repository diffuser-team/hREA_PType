#!/usr/bin/env bash
#
# Runs a Holochain conductor for development, using the `hc` utility.
#
# @package: hREA
# @author:  pospi <pospi@spadgos.com>
# @since:   2021-08-22
#
##

UTIL="${HOLOCHAIN_DNA_UTIL_PATH:-hc}"

echo \"pass\" | RUST_LOG=warn "$UTIL" s --piped create -n 2 network --bootstrap https://bootstrap-staging.holo.host/ quic 
echo \"pass\" | RUST_LOG=warn "$UTIL" s --piped call 0 1 install-app ./bundles/app/full_suite/hrea_suite.happ
echo \"pass\" | WASM_LOG=debug RUST_LOG=warn "$UTIL" s --piped run --all -p 8880 8881
