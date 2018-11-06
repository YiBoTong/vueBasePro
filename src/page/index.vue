<!--
****--@date     2018-11-06 16:44
****--@author   YC
****--@describe 首页
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'index',
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
