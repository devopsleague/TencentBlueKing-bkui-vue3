<template>
  <div style="width: 100%; height: 300px; overflow: auto">
    <bk-tree
      :data="treeData"
      children="children"
      label="name"
      expand-all
      level-line
      show-checkbox
    />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { BASIC_DATA } from './options';
  export default defineComponent({
    components: {},
    data() {
      return {
        treeData: [...JSON.parse(JSON.stringify(BASIC_DATA))],
      };
    },
  });
</script>
