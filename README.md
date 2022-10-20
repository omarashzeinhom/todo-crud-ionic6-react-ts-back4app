# About
<a href="https://ionic-6-ts-back4app-todolist-andgoedu.netlify.app/login">Demo</a>

An ionic 6 , web application built in typescript and react js framework ,while in terms of the backend back 4app was used as the api .

- Project Built With

## Project Requirements

1. [nodejs 16.18.0](https://nodejs.org/en/)

Make sure you installed node and node package manager using ```npm -v``` and ```node -v```

2. [yarn](https://yarnpkg.com/)
  
- Install yarn by using
  
```
npm install -g yarn
```

3. [ionic framework](https://ionicframework.com/getting-started)

```
npm i -g @ionic/cli
```

## Setup the project

```ts
ionic start todoApp --type=react --capacitor
```

-- use yarn instead of npm
```ionic config set -g yarn true```

### Packages to install

`parse` From [parse  - yarn pkg](https://yarnpkg.com/package/parse)
``` @parse/react ``` From [@parse/react - yarn pkg](https://yarnpkg.com/package/@parse/react)

& [Getting started with the Parse React hook for real time updates using Parse](https://www.back4app.com/docs/react/real-time/react-hook-real-time)

```
yarn add @parse/react parse
```

``` ``` []()

#### Setup BackEnd Schema

```ts
// Step 1 Add Parse API Keys into App.tsx
//  Require Parse for tsx
const Parse = require('parse');

// Step 1 Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = ' ';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = ' ';

```

###### References

1. [Using Yarn Instead of Npm for Ionic #10647](https://github.com/ionic-team/ionic-framework/issues/10647)


Omar Zeinhom . AKA ANDGOEDU 2022-2023