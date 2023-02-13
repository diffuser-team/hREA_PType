echo "" | RUST_LOG=info holochain --piped -c conductor-config.yml
hc sandbox call --running=1234 install-app --app-id=hrea_suite ./bundles/app/full_suite/hrea_suite.happ
hc sandbox call --running=1234 add-app-ws 8880
# echo "did it my way"