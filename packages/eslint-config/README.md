# ESLint Config Package (`eslint-config`)

This package provides shared ESLint configurations for the Bolt Mobile App monorepo.
Use it to enforce consistent code style and best practices across all apps and packages.

---

## Usage

Extend this config in your app or package:

```js
// .eslintrc.js
module.exports = {
  extends: [require.resolve('@bolt/eslint-config/base')],
};
```

---

## About

- Part of the [Bolt Mobile App Monorepo](https://github.com/mdkulkarni2005/bolt-mobile-app)
- Maintained by [Manas Kulkarni](https://github.com/mdkulkarni2005)

---

*Feel free to contribute or open issues!*
