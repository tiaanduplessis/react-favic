
# react-favic
[![package version](https://img.shields.io/npm/v/react-favic.svg?style=flat-square)](https://npmjs.org/package/react-favic)
[![package downloads](https://img.shields.io/npm/dm/react-favic.svg?style=flat-square)](https://npmjs.org/package/react-favic)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-favic.svg?style=flat-square)](https://npmjs.org/package/react-favic)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Add Favicons to the head of your React app

## Table of Contents

- [About](#about)
- [Features](#features)
- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## About

Little React component to add multiple meta tags for different sized favicons to your app's document `head`.

## Usage

Generate all your icons using [Favic-o-Matic](http://www.favicomatic.com/) and copy them into a directory in your project e.g. `static/images/meta`, then:

```js
import ReactFavic from 'react-favic'

 <Head>
  <meta
    name='viewport'
    content='initial-scale=1.0, width=device-width'
    key='viewport'
  />
  <meta charSet='utf-8' />

  <title>Example Site</title>

  <ReactFavic
    name='Lesson Desk Head Office'
    color='#797979'
    href='static/images/meta'
  />

</Head>

```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install react-favic
$ # OR
$ yarn add react-favic
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT © [[object Object]]([object Object])
