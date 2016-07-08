# vue-cordova
## 屏幕适配
游戏的需求是要可以横屏+全屏，所以适配方案选择缩放viewport的方案，然后设计稿尺寸多大就做成多大。需要注意的是ios在切换横竖屏的时候，`window.screen.width`值是不会变的，需要动态改变下。
```html
<meta name="viewport" content="target-densitydpi=device-dpi,width=1334">
    <script>
        function changeViewport() {
          var u = navigator.userAgent;
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
          
          if (window.orientation == 90 || window.orientation == -90 && isiOS) {  
            var windowWidth = window.screen.height;
          } 

          else {
            var windowWidth = window.screen.width;
          }
            
          if (windowWidth < 1334) {
              var ratio = windowWidth / 1334;
              var metas = document.querySelectorAll("meta[name=viewport]");
              for (var i in metas) {
                  if (typeof metas[i].setAttribute == 'function') {
                      metas[i].setAttribute('content', 'width=1334, initial-scale=' + ratio + ', maximum-scale=' + ratio + '');
                  }
              }
          }
        }
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", changeViewport, false);
    </script>
```
## 自动横屏+全屏
考虑到浏览器有的不能隐藏地址栏，并且不能自动切换到横屏，所以用cordova封装成app。游戏是单页的，所以选择vue。整体的目录结构如下。
```
-app
 -build
 -config
 -src
-hooks
-platforms
-plugins
-www
config.xml
```
根目录是cordova工程，app下是vue工程，用[cordova-cli](https://github.com/apache/cordova-cli)和[vue-cli](https://github.com/vuejs/vue-cli)初始化。修改`config.xml`文件让app支持默认横屏+全屏
```xml
    <platform name="android">
        <allow-intent href="market:*" />
        <preference name="Fullscreen" value="true" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
        <preference name="EnableViewportScale" value="true"/>
    </platform>
    <preference name="Orientation" value="landscape" />
```
修改app/config/index.js，把vue的打包路径改为www
```js
index: path.resolve(__dirname, '../../www/index.html'),
assetsRoot: path.resolve(__dirname, '../../www'),
```
## 修改绝对路径为相对路径
vue默认打包是绝对路径的，cordova是不支持的，github的gh-pages也不支持，所以改成相对路径，修改app/config/index.js文件
```js
assetsPublicPath: '',
```
修改app/build/webpack.prod.conf.js
```js
vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: false
    })
  },
```
## css3兼容
[vue-loader](https://github.com/vuejs/vue-loader)可以配置支持[autoprefixer](http://vue-loader.vuejs.org/en/features/postcss.html)，但是只支持单文件，`@import`导入的没效果，还没找到解决方案。
