<template>
<div id="loginCon">
  <div class="banner_bg">
	<div class="banner">
		<form class="login_form" method="post">
			<div class="form_title">
				<span class="title_word"><img src="static/images/pen_icon.png" class="loginImg"/>请登录</span>
			</div>
			<div class="submit_box">
				<div id="userCodeDiv">
                    <input class="txt1" type="text" id="txt_UserCode" v-model="username" placeholder="用户名"/>
                    <label class='error errorShow'></label>
                </div>
				<button class="submit_btn" type="button" @click="login()">登录试试</button>
			</div>
		</form>
	</div>
  </div>
  <div class="login_footer">
   Copyright ©2015 All rights reserved 哈哈哈{{msg}}
  </div>
  <div id="loginMessageBox">
		<div class="mbTitle">
			消息</div>
		<div class="mbContent">
		</div>
	</div>
</div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '698d51a19d8a121ce581499d7b701668'
    }
  },
  methods: {
    login: function () {
      this.$http.post('/Jails/servlet/LoginServlet',
        {
          methodName: 1,
          userCode: this.username,
          userPassword: this.password
        })
        .then(function (res) {
          console.log(res)
          if (res.data.success) {
            this.$router.push({name: 'start.electronicMap', params: {topId: res.body.data.systemId, systemName: res.body.data.systemName}})
          }
          else {
            alert("用户名或密码有误！");
          }
        }, function (err) {
          console.warn(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
