# Transfr [![npm][npm-image]][npm-url] [![Travis][travis-image]][travis-url] [![David][david-image]][david-url] [![npm downloads][downloads-image]][downloads-url]
> A Node.js CLI to upload files with [transfer.sh](https://transfer.sh)

transfer.sh is a super easy way to upload files directly from the command line, and it's [open source](https://github.com/dutchcoders/transfer.sh/).

This Node.js based CLI is just a thin wrapper around transfer.sh's API for convenience.

## Installation

```sh
# Make sure you have node and npm installed and in your $PATH
npm install -g transfr
```

## Usage

#### Single file

```sh
transfr cat.png
```

This command will upload your file to transfer.sh and print out the link (and also add it to your clipboard).

#### Multiple files

```sh
transfer cat1.png cat2.png cat3.png
```

This will bundle all the files into a zip-file and upload that. And as before the link will be printed out (and copied to your clipboard).

## License
MIT © [Adam Bergman](https://fransvilhelm.com)


[npm-image]: https://img.shields.io/npm/v/transfr.svg
[npm-url]: https://www.npmjs.com/package/transfr
[travis-image]: https://img.shields.io/travis/adambrgmn/transfr.svg
[travis-url]: https://travis-ci.org/adambrgmn/transfr
[david-image]: https://img.shields.io/david/adambrgmn/transfr.svg
[david-url]: https://david-dm.org/adambrgmn/transfr
[downloads-image]: https://img.shields.io/npm/dt/transfr.svg
[downloads-url]: https://www.npmjs.com/package/transfr
