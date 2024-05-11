<template>
  <div class="row">
    <div class="cell">
      <span>prefix-icon: true</span>
      <bk-tree
        :data="treeData"
        children="children"
        label="name"
        level-line
        prefix-icon
      />
    </div>
    <div class="cell">
      <span>function 函数返回 'default' 将会调用系统默认样式</span>
      <bk-tree
        :data="treeData"
        :prefix-icon="getPrefixIcon"
        children="children"
        label="name"
        level-line
      />
    </div>
    <div class="cell">
      <span>function 返回字符串</span>
      <bk-tree
        :data="treeData"
        :prefix-icon="getPrefixIcon2"
        children="children"
        label="name"
        level-line
      />
    </div>
    <div class="cell">
      <span>function 返回对象</span>
      <bk-tree
        :data="treeData"
        :prefix-icon="getPrefixIcon3"
        children="children"
        label="name"
        level-line
      />
    </div>
  </div>
</template>

<script setup>
  import { BASIC_DATA } from './options';
  const treeData = [...BASIC_DATA];
  /**
   * Tree Prop: prefixIcon function
   * @param {} isRoot 是否为分跟节点
   * @param {} hasChildNode 是否有孩子节点
   * @param {} isOpened 当前节点是否展开
   * @param {} renderType 当前渲染类型（node_action: 用来标识当前节点状态，展开 | 收起, node_type：节点类型，文件、文件夹）
   */

  const getPrefixIcon = () => 'default';

  const getPrefixIcon2 = (item, renderType) => {
    const { isRoot } = item;
    if (renderType === 'node_action') {
      return 'default';
    }

    if (isRoot) {
      return null;
    }

    return 'Node-';
  };

  const getPrefixIcon3 = (item, renderType) => {
    const { isRoot } = item;
    if (renderType === 'node_action') {
      return 'default';
    }

    if (isRoot) {
      return {
        node: 'span',
        className: 'custom-node custom-root',
        text: '0',
        style: {
          fontSize: '12px',
        },
      };
    }

    return {
      node: 'span',
      className: 'custom-node',
      text: '1',
      style: {
        fontSize: '8px',
      },
    };
  };
</script>
<style>
  .custom-node {
    display: flex;
    width: 18px;
    height: 18px;
    padding: 0 5px;
    margin: 0 2px 0 0;
    background: #cccc;
    align-items: center;
  }

  .custom-root {
    background: #fafb;
  }
</style>
<style scoped>
  .row {
    display: flex;
    width: 100%;
    height: 300px;
    overflow: auto;
  }

  .cell {
    width: 25%;
    padding: 0 15px;
    overflow: auto;
    border-right: solid 1px #ddd;
    flex: 1;
  }
</style>
