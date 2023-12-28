<template>
  <div class="page-footer">
    <p>本网页不做任何商业用途，仅作为游玩桌游时的对照参考</p>
    <p>本网页的使用到的内容版权归こちら異世界転生局、六角えんぴつ所有</p>
    <p>
      <a href="https://github.com/bennyhe/kochiten" target="_blank"
        >Github
      </a>
    </p>
    <p>
      <a href="javascript:;" @click="handleClickShowUpdateLog()">更新日志</a>
    </p>
    <CptDialogUpdateLog v-bind:key="dialogId" :isShow="isShowDialog" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CptDialogUpdateLog from '../DialogUpdateLog/index.vue'

export default defineComponent({
  name: 'PageFooter',
  props: [],
  components: {
    CptDialogUpdateLog
  },
  setup(props, context) {
    const isShowDialog = ref(false)
    const dialogId = ref(false)
    function handleClickShowUpdateLog() {
      dialogId.value = `updateLogDialog${Math.random()}`
      isShowDialog.value = true
    }
    return {
      handleClickShowUpdateLog,
      isShowDialog,
      dialogId
    }
  }
})
</script>

<style lang="scss">
@import "./index.scss";
</style>