<template>
  <div class="flowManageWrap">
    <router-link tag="div" class="routerBox" to="/main/formFlowCategory">
      <i class="el-icon-folder" />
      <div>流程分类</div>
    </router-link>
    <router-link to="/main/formFlowEntry" tag="div" class="routerBox">
      <i class="el-icon-s-marketing" />
      <div>流程设计</div>
    </router-link>
    <router-link to="/main/formAllInstance" tag="div" class="routerBox">
      <i class="el-icon-set-up" />
      <div>流程实例</div>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.flowManageWrap{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .routerBox{
    text-align: center;
    margin: 80px 60px;
    i{
      color: #00968899;
      font-size: 120px;
    }
    div{
      font-size: 14px;
    }
  }
}
</style>
