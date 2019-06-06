# VS Code

## prettier

### .prettierrc

```js
{
  "printWidth": 120,               // 换行字符串阈值
  "semi": true,                    // 句末加分号
  "singleQuote": true,             // 用单引号
  "trailingComma": "es5",         // 最后一个对象元素加逗号
  "bracketSpacing": true,          // 对象，数组加空格
  "jsxBracketSameLine": false,     // jsx > 是否另起一行
  "arrowParens": "avoid",          // (x) => {} 是否要有小括号
  "requirePragma": false,          // 是否要注释来决定是否格式化代码
  "proseWrap": "preserve"          // 是否要换行
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    }
  ]
}
```

### .prettierignore

```
package.json
gatsby/**
```

## ESLint

```js
module.exports = {
  rules: {
    // 缩进
    indent: ["error", 4, { SwitchCase: 1 }],
    "arrow-parens": ["error", "as-needed"]
  }
};
```

## Plugin

### HTML

- **Auto Close Tag**
- **Auto Rename Tag**
- **htmltagwrap**

### CSS

- **CSS Modules**
- **Beautify** - Beautify javascript, JSON, CSS, Sass, and HTML in Visual Studio Code.
- **Beautify css/sass/scss/less**

### JS

- **Document This**
- **ESLint**
- **Prettier** - Code formatter

### Editor

- **GitLens**
- **Live Server**
- **npm-import-package-version**
- **Path Intellisense**
- **Markdown All in One**
- **REST Client** - Send HTTP request and view the response in Visual Studio Code directly.

### Theme

- **vscode-icons**
