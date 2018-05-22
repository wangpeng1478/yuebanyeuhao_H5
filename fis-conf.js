/**
 * 
 * @authors wangpeng (wang760635994@outlook.com)
 * @date    2017-11-08 17:48:48
 * @name FIS3配置fis-conf.js
 */
// **********************************************************************************

// 添加md5戳：对 js、css、png 图片引用 URL 添加 md5 戳：
fis.match('*.{js,css}', {
  useHash: true
});
// **********************************************************************************

// js压缩：使用fis-optimizer-uglify-js 插件，已内置
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});
// **********************************************************************************

// CSS压缩：使用fis-optimizer-clean-css 插件，已内置

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});
// **********************************************************************************


// //less转换为css
// fis.match('*.less', {
//   parser: fis.plugin('less'),
//   rExt: '.css'
// });

// **********************************************************************************

// //将less转换出来的css与其他css合并
// fis.match('*.{less,css}', {
//   packTo: '/static/aio.css'
// });


// **********************************************************************************


// *   定位JS：所有的 js   发布到/static/js/xxx目录下

// *   fis.match('**.js', {
// *       release : '/static/js$0'
// *   });
// *   定位CSS：所有的 css 发布到/static/css/xxx目录下

     fis.match('**.less', {
         release : '/less$0'
     });
// *   定位图片：所有image目录下的.png，.gif文件发布到/static/pic/xxx目录下

// *   fis.match('/img/(*.{png,gif})', {
// *       release: '/static/pic/$1$2'
// *   });
 

// **********************************************************************************

//   li.list-1::before {
//     background-image: url('./img/list-1.png?__sprite');
//   }

//   li.list-2::before {
//     background-image: url('./img/list-2.png?__sprite');
//   }


// ********************************************************************************


// // 启用 fis-spriter-csssprites 插件
// fis.match('::package', {
//   spriter: fis.plugin('csssprites')
// })

// // 对 CSS 进行图片合并
// fis.match('*.css', {
//   // 给匹配到的文件分配属性 `useSprite`
//   useSprite: true
// });


//*        fis3 server start 快速开启
//*        fis3 server open  目录

//*        cd C:\use-es6
//*        构建发布到项目目录的 output 目录下
//*        fis3 release -d /output
//*        构建发布到项目父级目录的 dist 子目录下
//*        fis3 release -d ../dist
//*        发布到其他盘 （Windows）
//*        fis3 release -d D:\output启动内置服务器进行预览；
//*        fis3 server start --type node
//*        fis3 server stop 
//*        终止服务 
//*        fis3 server start -p 1111 
//          端口
//         //全局或本地安装插件 
//         npm install -g fis3-hook-relative 

        //启用插件 
        fis.hook('relative'); 
        //让所有文件，都使用相对路径。 
        fis.match('**', { relative: true })