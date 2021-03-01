FROM registry.access.redhat.com/ubi8/ubi-minimal:8.3

COPY entrypoint.sh /entrypoint.sh
COPY tyr-cli-runner /tyr-cli

ENTRYPOINT ["/entrypoint.sh"]
