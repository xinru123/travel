<template>
  <div id="app">
    <!--keep-alive中的数据被缓存起来了 -->
    <keep-alive>
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
