<template>
  <div id="app">
    <!--keep-alive中的数据被缓存起来了 -->
    <!--exclude="Detail" 除了Detail组件不被缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
