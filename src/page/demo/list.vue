<!--
****--@date     2018-11-06 16:22
****--@author   YC
****--@describe 列表
-->
<template>
  <div>
    这是other列表
    <router-link :to="{name:'login'}">go login</router-link>
  </div>
</template>
<script>
  /* 当前组件必要引入 */
  export default {
    name: 'noticeList',
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
