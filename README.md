# fifty-two-challenge

## Install

```sh
yarn add fifty-two-challenge # npm install fifty-two-challenge
```

## Usage

```js
const { generate } = require('fifty-two-challenge')

generate({
  initialValue: 5,
  weeks: 4
}) // return a array of weeks
```

## API

### generate(options = {})

Generate an array of weeks with corresponding values from each week

#### Arguments

`options`: An object with two fields:

* **initialValue**: initial value to generate data. Default is 2
* **weeks**: number of weeks. Default is 52

#### Returns

* Array of weeks: the week object is a object with value and week fields

## Author

Emanuel Gonçalves
* Twitter [@emanuelgsouza](https://twitter.com/emanuelgsouza)
* Github [@emanuelgsouza](https://github.com/emanuelgsouza)