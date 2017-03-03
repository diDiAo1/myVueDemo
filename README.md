# myVueDemo
vue demo

1.安装node

2.安装npm
安装淘宝npm镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

3.# 全局安装 vue-cli
npm install --global vue-cli
通过vue –V查看是否安装成功

4.# 创建一个基于 webpack 模板的新项目
vue init webpack my-project

5.# 安装依赖
cd my-project
npm install
npm run dev

6. cnpm install vue-resource为了进行后台请求
this.$http.post();

7. vue-router 
页面跳转

8.vuex
子组件之间传递数据

9.中间安装vuex时一直报error
Error: read ECONNRESET
    at exports._errnoException (util.js:890:11)
    at TCP.onread (net.js:554:26)
执行一下
cnpm config set registry http://registry.npmjs.org/
让cnpm请求http url而不是https
然后就可以了

