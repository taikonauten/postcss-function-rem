<p align="center">
  <img src="https://i.imgur.com/dV1aZjJ.png" title="Taikonauten">
</p>

<h1 align="center">Taikonauten postCSS function rem</h1>

<p>&nbsp;</p>

## Installation

```bash
npm install --save-dev @taikonauten/postcss-function-rem
```

Create a `postcss.config.js` file in your project root:

```javascript
const postCSSFunctions = {
  functions: {
    rem: require('@taikonauten/postcss-function-rem'),
  }
};

module.exports = {
  plugins: [
    require('postcss-functions')(postCSSFunctions),
  ]
};
```

## Usage

```css
body {

  padding: rem(20 20);
}
```

Use default base font size of 16. result: `padding: 1.25rem 1.25rem`

```css
body {

  padding: rem(20 20, 24);
}
```

Overwrite default base font size with 24. result: `padding: 0.8333333333333334rem 0.8333333333333334rem`

---

Made with ♡ at Taikonauten
