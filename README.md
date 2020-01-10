# Starter-Web

[![License][license-img]](https://github.com/astraloverflow/starter-web/blob/master/LICENSE)
[![Version][version-img]](https://github.com/astraloverflow/starter-web/releases)
[![Last Commit][last-commit-img]](https://github.com/astraloverflow/starter-web/commits/master)
[![Open Issues][issues-img]](https://github.com/astraloverflow/starter-web/issues)

> A minimal config starter template for web projects

---

## Requirements

- Node.js (LTS or newer).
- Latest NPM (comes included with Node.js) or Yarn.

It can alternatively be used with CodeSandBox.io, though not all functionality will be available.

## Quick Start

```shell
$ cd ~/dev/
$ npx degit astraloverflow/starter-web#2020-1-9 my-new-website
$ cd my-new-website
$ npm install
$ npm run dev
```

---

## NPM Scripts

### `npm run test`

- Runs [stylelint](https://stylelint.io) (using [stylelint-config-astraloverflow](https://github.com/astraloverflow/stylelint-config-astraloverflow), see `.stylelintrc`) and [eslint](https://eslint.org) (using [healthier](https://github.com/KidkArolis/healthier) and more, see `.eslintrc`) to check files for syntax and coding style errors.

### `npm run format`

- Runs [Prettier](https://prettier.io) to format all code to the same style. See Prettier website for full list of supported languages. Best used with the Prettier plugin for your chosen editor.

### `npm run prod`

- Runs Parcel in production mode and builds the project.

### `npm run dev`

- Runs Parcel in development mode and runs a development server.

---

## Package.json

It is HIGHLY recommended that you customize `package.json` with the details of your project, mainly the following fields:

```jsonc
{
  // Prevents your project from unintentionally being published to NPM.
  "private": true,
  // SPDX license identifier for your project's license.
  // The list of SPDX license identifiers can be found here: https://spdx.org/licenses/
  "license": "",
  // Your project's version number, as seen by NPM.
  "version": "0.0.0",
  // Your project's name, as seen by NPM. See NPM docs for allowed characters.
  "name": "starter-web",
  // Your project's description, as seen by NPM. Can be left blank.
  "description": "",
  // URL to your project's code repository.
  // If hosted on GitHub you can use the shorthand "user/repo"
  "repository": ""
}
```

[license-img]: https://img.shields.io/github/license/astraloverflow/starter-web.svg
[version-img]: https://img.shields.io/github/release/astraloverflow/starter-web.svg
[last-commit-img]: https://img.shields.io/github/last-commit/astraloverflow/starter-web.svg
[issues-img]: https://img.shields.io/github/issues-raw/astraloverflow/starter-web.svg
