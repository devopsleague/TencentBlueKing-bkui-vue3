<template>
  <div style="width: 100%; overflow: auto">
    <div class="row">
      <div class="cell">
        <span>draggable: <code>draggable = true</code></span>
        <bk-tree
          :data="treeData"
          children="children"
          label="name"
          draggable
        />
      </div>
      <div class="cell">
        <span>draggable<code>drag-sort = true</code></span>
        <bk-tree
          :data="treeData"
          children="children"
          label="name"
          drag-sort
          draggable
        />
      </div>
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
    padding-top: 15px;
    overflow: auto;
  }

  .cell {
    padding: 0 15px;
    overflow: auto;
    border-right: solid 1px #ddd;
    flex: 1;
  }
</style>
