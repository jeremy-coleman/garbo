
2 step process here


some theme
```js
 const DefaultPalette = {
  themeDarker: '#004578',
  themeDark: '#005a9e',
};
```

step 1 - this function will convert our Jss object to reference itself as css vars
```js
function convertObjectToCssVariables(themeObject){
  let a = Object.assign({}, themeObject)
  let x = Object.keys(themeObject).map(_ => a[_] = `var(--${_})`)
  console.log(a)
}
```
will change the palette to:
```js
 const DefaultPalette = {
  themeDarker: 'var(--themeDarker)',
  themeDark: 'var(--themeDark)',
};
```
step 2

browser
```js
function applyTheme(themeObject) {
  Object.entries(themeObject).forEach(_ => document.body.style.setProperty(`"--${_[0]}", ${_[1]}`));
}
```
node
```js
function nodeTheme(themeObject) {
  Object.entries(themeObject).forEach(_ => console.log(`"--${_[0]}", ${_[1]}`));
}

```










other stuf


cow
```js
function update(current, updater) {
  if (
    Object.prototype.toString.call(current) === "[object Object]" ||
    Array.isArray(current)
  ) {
    var draft = JSON.parse(JSON.stringify(current));
    updater(draft);
    return draft;
  }
}
```
