vite-vue-jsx项目模板

基于vite所以运行的话可以打开网页，但其实目的是用作node项目

如果要用作网页可以在根目录中新建`index.html`，并添加以下代码：

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

使用`yarn dev`或者`npm run dev`运行项目