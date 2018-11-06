<!--
****--@date     2018-11-06 16:36
****--@author   YC
****--@describe 路由内容
-->
<template>
  <router-view></router-view>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'content',
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
