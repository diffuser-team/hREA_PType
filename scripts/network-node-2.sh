# RUST_LOG=info holochain -c dev-network-node2.yml

# hc sandbox call --running=1235 install-app-bundle --app-id=hrea_tester ./bundles/app/full_suite/hrea_suite.happ

# hc sandbox call --running=1235 add-app-ws 8881

echo "ppp" | RUST_LOG=info holochain --piped -c conductor-config2.yml