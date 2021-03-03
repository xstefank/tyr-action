const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('child_process');

try {
    const prJson = JSON.stringify(github.context.payload, undefined, 2)
    const formatURL = core.getInput('formatURL')
    const token = core.getInput('token')
    const pushStatus = core.getInput('pushStatus')

    const result = exec(`../../_actions/xstefank/tyr-action/dev/tyr-cli-runner \
        -Dtyr.template.format.url=${formatURL} \
        -Dtyr.github.oauth.token=${token} \
        -Dtyr.github.status.push=${pushStatus} \
        '${prJson}'`,
        (error, stdout, stderr) => {
            console.log(stdout)

            if (error !== null && pushStatus === 'false') {
                // the stdout contains the error message from Tyr
                core.setFailed(stdout)
            }
            // if the pushStatus is true then the status is pushed as a part of the tyr-cli execution
            // thus finish successfully
        })
} catch (error) {
    core.setFailed(error.message);
}
