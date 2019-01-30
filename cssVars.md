
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

will output, which is the input format you need to pass into the dom using style.setProperty()
```js
"--themeDarker", #004578
"--themeDark", #005a9e
```

or write to css directly 
this is ideal if you want to just insert into head once,
if you use setProperty though , it'll act similar to a JssThemeProvider
```js
function writeThemeToCss(themeObject) {
    let obj = []
  for(var k in themeObject){
       obj+= `--${k}: ${themeObject[k]};`
  }
    console.log(obj)
    //apend  or write to .css file in node
}
```







other stuf


copy on write / no proxy immer 
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
