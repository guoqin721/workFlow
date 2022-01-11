<template>
  <div class="flowManageWrap">
    <router-link v-for="(item, index) in routerArr" :key="index" tag="div" class="routerBox" :to="item.to">
      <i :class="item.icon" />
      <div>{{ item.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'WorkFlow',
  data() {
    return {
      routerArr: [
        {
          to: '/main/formFlowCategory',
          icon: 'el-icon-folder',
          title: '流程分类'
        },
        {
          to: '/main/formFlowEntry',
          icon: 'el-icon-s-marketing',
          title: '流程设计'
        },
        {
          to: '/main/formAllInstance',
          icon: 'el-icon-set-up',
          title: '流程实例'
        }
      ]
    }
  },
  mounted() {
  }
}
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
