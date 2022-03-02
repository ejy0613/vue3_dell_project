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

### BEM CSS样式规范

`BEM`: block__element--modifier

```HTML
  <div class="content">
    <div class="content__item content__item--active"></div>
  </div>
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

### Vue文件中引入内容顺序

+ 系统内容引入放置在顶部: `import xx from 'vue' ...`
+ 自定义内容放在下面: `import  xx from '../../components/xx.vue'`

### SCCS

+ 引入SCSS

  ```markdonwn
    1.使用vue-cli创建项目时，选择 dart-scss
    2.单独引用 npm install sass-loader dart-scss
  ```

+ `main.js` 中引入 `index.scss`

  ```javascript
    import './style/index.scss'
  ```

+ `index.scss` 引入全局相关css内容
  
+ `base.scss` 基础css内容定义

+ `viriables.scss` 通用css变量定义

  ```javascript
    // viriables.scss
    $content-bgColor: #F1F1F1

    // index.vue
    <style>
      @import '../style/viriables.scss'
      .element {
        color: $content-bgColor;
      }
    </style>
  ```

+ `mixins.scss` 混合使用css内容定义

  ```javascript
    // mixins.scss
    @mixin ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    // index.vue
    <style>
      @import '../style/mixins.scss'
      .element {
        @include ellipsis
      }
    </style>
  ```
