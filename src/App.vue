<script setup lang="ts">
import { useDesign, variables } from '@/hooks/web/useDesign'
// import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login/Login.vue'
import { ref } from 'vue'

defineOptions({ name: 'APP' })
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('app')
const greyMode = ref(false)
</script>

<template>
  <div :class="greyMode ? `${prefixCls}-grey-mode` : ''" class="relative PageMain">
    <Login></Login>
  </div>
</template>

<style scoped lang="scss">
.PageMain {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
}
</style>
