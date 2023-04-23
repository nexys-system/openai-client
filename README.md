# Template typescript package

[![npm version](https://img.shields.io/npm/v/@nexys/template.svg)](https://www.npmjs.com/package/@nexys/template)
[![Build and Test Package](https://github.com/nexys-system/typescript-package-template/actions/workflows/test.yml/badge.svg)](https://github.com/nexys-system/typescript-package-template/actions/workflows/test.yml)
[![Publish](https://github.com/nexys-system/typescript-package-template/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-system/typescript-package-template/actions/workflows/publish.yml)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

## Badges

Generate badges automatically, using [this link](https://nexys-system.github.io/repository-badges/)

## Config

* `NPM_AUTH_TOKEN` is required for the CI and auto-publish

## Node version

This packages uses node `v18`.

This allows you to use [`fetch` natively without needing to install any extra packages](https://blog.logrocket.com/fetch-api-node-js/).
However, make sure you are running the right node version when working with it or in parent projects. `node --version` should return 18 or greater.

See also: [SO: how can i use native fetch with node in typescript (node v17.6)](https://stackoverflow.com/questions/71294230/how-can-i-use-native-fetch-with-node-in-typescript-node-v17-6/74112582#74112582)
