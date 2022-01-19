<template>
  <div class="flowManageWrap">
    <router-link v-for="(item, index) in routerArr" :key="index" tag="div" class="routerBox" :to="{'name': item.formRouterName}">
      <i :class="item.icon" />
      <div>{{ item.menuName }}</div>
    </router-link>
  </div>
</template>

<script>
import { SystemController } from '@/api'
export default {
  name: 'WorkFlow',
  data() {
    return {
      routerArr: [
        {
          formRouterName: 'formFlowCategory',
          icon: 'el-icon-folder',
          menuName: '流程分类'
        },
        {
          formRouterName: 'formFlowEntry',
          icon: 'el-icon-s-marketing',
          menuName: '流程设计'
        },
        {
          formRouterName: 'formAllInstance',
          icon: 'el-icon-set-up',
          menuName: '流程实例'
        }
      ]
    }
  },
  mounted() {
    // new Promise((resolve, reject) => {
    //   SystemController.menuList(this, {}).then(res => {
    //     resolve(res)
    //     this.routerArr = res.data.menuList
    //   }).catch(e => {
    //     reject(e)
    //   })
    // }).catch(e => {})
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
