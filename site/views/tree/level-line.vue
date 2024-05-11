<template>
  <div class="row">
    <div class="cell">
      <span>默认连线</span>
      <bk-tree
        :data="treeData"
        children="children"
        label="name"
        level-line
      />
    </div>
    <div class="cell">
      <span>自定义连线</span>
      <bk-tree
        :data="treeData"
        :level-line="'solid 1px red'"
        children="children"
        label="name"
      />
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { BASIC_DATA } from './options';
  export default defineComponent({
    components: {},
    data() {
      return {
        treeData: [...BASIC_DATA],
      };
    },
  });
</script>
<style scoped>
  .row {
    display: flex;
    width: 100%;
    height: 300px;
    overflow: auto;
  }

  .cell {
    padding: 0 15px;
    overflow: auto;
    border-right: solid 1px #ddd;
    flex: 1;
  }
</style>
