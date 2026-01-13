<div>
  <h1 align="center"><a href="https://www.epicweb.dev/workshops">Beginner JavaScript 🟨</a></h1>
  <strong>
    Learn JavaScript fundamentals from the ground up
  </strong>
  <p>
    Master the building blocks of JavaScript: variables, operators, control flow, functions, arrays, and objects. No prior programming experience required.
  </p>
</div>

<hr />

<div align="center">
  <a
    alt="Epic Web logo with the words Deployed Version"
    href="https://beginner-javascript.epicweb.dev/"
  >
    <img
      width="300px"
      src="https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/254000390-447a3559-e7b9-4918-947a-1b326d239771.png"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

This workshop assumes **no prior programming experience**. You'll learn
JavaScript from the very beginning.

However, you should be comfortable with:

- Using a computer and navigating files/folders
- Using a text editor or IDE (we recommend [VS Code][vscode])
- Basic typing skills

## Pre-workshop Resources

Here are some optional resources to get you excited about JavaScript:

- [JavaScript on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) -
  The definitive JavaScript reference
- [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) -
  A gentle introduction to what JavaScript is and why it matters

## System Requirements

- [git][git] v2.18 or greater
- [NodeJS][node] v18 or greater
- [npm][npm] v8 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

Use the Epic Workshop CLI to get this setup:

```sh nonumber
npx --yes epicshop@latest add beginner-javascript
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

## The Workshop App

Learn all about the workshop app on the
[Epic Web Getting Started Guide](https://www.epicweb.dev/get-started).

[![Kent with the workshop app in the background](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/280407082-0e012138-e01d-45d5-abf2-86ffe5d03c69.png)](https://www.epicweb.dev/get-started)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[vscode]: https://code.visualstudio.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/beginner-javascript/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/beginner-javascript/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/beginner-javascript/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/beginner-javascript/issues/new
<!-- prettier-ignore-end -->
