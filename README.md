# babel-plugin-transform-remove-console-enhance

This plugin removes all `console.*` calls.

## Example

**In**

```javascript
console.log("foo");
console.error("bar");
```

**Out**

```javascript
```

**In**

```javascript
console.log("foo");
console.error("bar");
```

**Out**

```javascript
console.error("bar"); // set options to ignore error
```

**In**

```javascript
console.log("foo");
// remove--console-disable
console.log("i should not remove");
console.error("bar");
```

**Out**

```javascript
// remove--console-disable
console.log("i should not remove");
console.error("bar"); // set options to ignore error
```

## Installation

```sh
npm install babel-plugin-transform-remove-console-enhance
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-remove-console-enhance"]
}
```

or

```json
{
  "plugins": [
    ["transform-remove-console-enhance", {
        "exclude": ["error"]
    }]
  ]
}
```

### options
`options` can be object.

```javascript
{
  "exclude": ["error"]
}
```

### Via CLI

```sh
babel --plugins transform-remove-console-enhance script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-remove-console-enhance"]
});
```
