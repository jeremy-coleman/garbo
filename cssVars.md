
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
 const ExpectedPalette = {
  themeDarker: 'var(--themeDarker)',
  themeDark: 'var(--themeDark)',
};
```

now write some jss like this:
```js
var myButtonStyle = theme => {
 root: {
  theme.palette.themeDarker
  }
}
```
or for better performance
```js
import {theme} from './someFile'
var myButtonStyle = {
 root: {
  theme.palette.themeDarker
  }
}
```

notice you dont need a callback on the theme, because you update the variables in the dom. you're NOT rewriting any new css



and you're jss is still encapsulated and themed to generic , completely overridable css.
you also change it through DOM apis. meaning no need for style props in react components
you can also provide a 2nd arguement for fallback values incase browsers don't support CssVar

step 2 - 
We only changed the theme definition so far, we havn't applied any colors yet
note: copy and pasting into the head is about 10x less to think about

the following code will take the original theme definition, then apply the color palette to the css variables
this function staticly selects document.body, but you can also add a 2nd selector arguement if you want.
ex: https://github.com/jeremy-coleman/preactive-htm/blob/mdc-theme/src/components/theme-changer.tsx
 using material web components with nesting

browser
```js
function applyTheme(themeObject) {
  Object.entries(themeObject).forEach(_ => document.body.style.setProperty(`"--${_[0]}", ${_[1]}`));
}
```

node / sanity check
```js
function consoleLogApplyTheme(themeObject) {
  Object.entries(themeObject).forEach(_ => console.log(`"--${_[0]}", ${_[1]}`));
}

```

will output, which is the input format you need to pass into the dom using style.setProperty(k, v)
and in the proper format. 
k: should be formatted as a string aka: "--MYVARIABLE". It's case sensitive.
v: any valid DOM color value work for the value:

each line in this format will need to be called inside setProperty()
```js
"--themeDarker", #004578
"--themeDark", #005a9e
```

or write to css directly 
this is ideal if you want to just insert into head once,
although if you use setProperty, you can nest it and it'll act similar to a JssThemeProvider with proper boundaries etc
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



so to recap
```js
originalJss: themeDarker: '#004578'
```
```js
newJss: themeDarker: 'var(--themeDarker)'
```
apply the original props to the dom : 
```js
..style.setProperty('--themeDarker', #004578)
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
