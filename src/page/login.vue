<!--
****--@date     2018-11-06 16:19
****--@author   YC
****--@describe 登录
-->
<template>
  <div>
    这是登录
    <router-link :to="{name:'other'}">go other</router-link>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'login',
    props: [],
    data () {
      return {};
    },
    methods: {
      // 初始化
      init () {
      }

    },
    created () {
      this.init();
    },
    mounted () {
    },
    components: {}
  };

</script>
