Turns out open source GitHub Packages are totally worthless because they always require a personal access token to download, requiring you to inject access tokens into _everything_ just to install packages.

# How to install from GitHub Packages

For how to publish, see
For how to install, see https://github.com/electrovir/github-packages-experiment-1

1.  Follow the `Authenticating to GitHub Packages` steps here: https://docs.github.com/en/enterprise-server@3.4/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
2.  Create an `.npmrc` file that looks like the one in this repo inside the repo that will install from GitHub Packages.
3.  Add a new line for each user or organization whose packages should come from the GitHub Packages registry (rather than npm registry) into the `.npmrc` file.
4.  Run `npm i @owner/package-name`
