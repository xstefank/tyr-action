# Tyr GitHub Action

This application verifies the GitHub pull request formatting according to the predefined template. 
It integrates the JBoss Tyr project (https://github.com/jboss/tyr).

## Inputs

### `formatUrl`

**Required** The URL of the format.yaml file that defines the PR formatting.

### `token`

**Required** The GitHub token that is used for validating the application with GitHub.

### `pushStatus`

**Required** A boolean value representing whether the Tyr application should push a separate
status to the Pull Request commit. Default `'true''`.

## Example usage

```
uses: xstefank/tyr-action@v1
with:
    formatUrl: https://raw.githubusercontent.com/xstefank/test-repo/master/.github/format.yaml
    token: ${{ secrets.GITHUB_TOKEN }}
    pushStatus: false
```
