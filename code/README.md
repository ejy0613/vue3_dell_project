# Vue3 Project Code

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Technology

```markdown
  normalize.css --- 解决浏览器css表现差异
```

### 解决图片加载抖动

1. 计算图片的宽高比(宽：高)
2. 为父元素设置一下内容(CSS Hack)

   ```HTML
    .parent {
      height: 0;
      overflow: hidden;
      padding-bottom: $ratio
    }
   ```

3. 原理：提前进行元素占位，避免内容抖动影响页面布局
