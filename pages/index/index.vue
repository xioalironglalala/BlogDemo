<template>
  <view class="container">
    <form @submit="login">
      <view class="uni-form-item uni-column">
        <view class="title">用户名</view>
        <input class="uni-input" name="name" placeholder="请输入用户名" />
      </view>
      <view class="uni-form-item uni-column">
        <view class="title"><text class="uni-form-item__title">密码</text></view>
        <view class="uni-input-wrapper">
          <input class="uni-input" placeholder="请输入密码" name="password" :password="showPassword" />
          <text class="uni-icon" :class="[!showPassword ? 'uni-eye-active' : '']"
                @click="changePassword">&#xe568;</text>
        </view>
      </view>
      <button form-type="submit">登录</button>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      showPassword: true
    }
  },
  methods: {
    login: function(e) {
      debugger
      uni.request({
        url: 'https://console-mock.apipost.cn/mock/2acce6ca-4df6-474f-99c1-b033fce62330/mock/2acce6ca-4df6-474f-99c1-b033fce62330/mock/2acce6ca-4df6-474f-99c1-b033fce62330/getInfo?apipost_id=d3ccf7', //仅为示例，并非真实接口地址。
        method: 'POST',
        // data: e.detail.value,
        data: {
          name: 'poppy',
          password: 'poppy'
        },
        success: (res) => {
          if (res.data.code == '200') {
            this.text = '登陆成功';
            uni.navigateTo({
              url: '/pages/echartsDemo/home'
            });
          } else {
            this.text = res.data.data;
          }
        }
      });
    },
    changePassword: function() {
      this.showPassword = !this.showPassword;
    }

  }
}
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>