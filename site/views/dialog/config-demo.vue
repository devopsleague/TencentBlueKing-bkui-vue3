<template>
  <div>
    <bk-button
      class="mr10"
      @click="() => (exampleSetting1.dialog1.isShow = true)"
    >
      自定义内容1
    </bk-button>
    <bk-dialog
      :is-show="exampleSetting1.dialog1.isShow"
      :theme="'primary'"
      :title="'这是标题'"
      @closed="() => (exampleSetting1.dialog1.isShow = false)"
      @confirm="() => (exampleSetting1.dialog1.isShow = false)"
    >
      <bk-input placeholder="文字个数不超过8个汉字" />
    </bk-dialog>

    <bk-button
      class="mr10"
      @click="() => (exampleSetting1.dialog2.isShow = true)"
    >
      不显示关闭 icon
    </bk-button>
    <bk-dialog
      :close-icon="false"
      :is-show="exampleSetting1.dialog2.isShow"
      :theme="'primary'"
      :title="'这是标题'"
      @closed="() => (exampleSetting1.dialog2.isShow = false)"
      @confirm="() => (exampleSetting1.dialog2.isShow = false)"
    >
      <div>不显示关闭 icon</div>
    </bk-dialog>

    <bk-button
      class="mr10"
      @click="() => (exampleSetting1.dialog3.isShow = true)"
    >
      配置按钮文案
    </bk-button>
    <bk-dialog
      :cancel-text="'按钮2'"
      :confirm-text="'按钮1'"
      :is-show="exampleSetting1.dialog3.isShow"
      :theme="'primary'"
      :title="'这是标题'"
      @closed="() => (exampleSetting1.dialog3.isShow = false)"
      @confirm="() => (exampleSetting1.dialog3.isShow = false)"
    >
      <div>配置按钮文案</div>
    </bk-dialog>

    <bk-button
      class="mr10"
      @click="() => (exampleSetting1.dialog4.isShow = true)"
    >
      不允许拖拽
    </bk-button>
    <bk-dialog
      :draggable="false"
      :is-show="exampleSetting1.dialog4.isShow"
      :title="'这是标题'"
      @closed="() => (exampleSetting1.dialog4.isShow = false)"
      @confirm="() => (exampleSetting1.dialog4.isShow = false)"
    >
      <div>不允许拖拽</div>
    </bk-dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import BkButton from '@bkui-vue/button';
  import BkDialog from '@bkui-vue/dialog';
  import BkInput from '@bkui-vue/input';

  const exampleSetting1 = ref({
    dialog1: {
      isShow: false,
    },
    dialog2: {
      isShow: false,
    },
    dialog3: {
      isShow: false,
    },
    dialog4: {
      isShow: false,
    },
  });
</script>
