<template>
  <bk-checkbox-group v-model="checkboxGroupValue">
    <bk-checkbox
      label="微信"
      checked
    />
    <bk-checkbox label="QQ" />
    <bk-checkbox label="Email" />
  </bk-checkbox-group>
  <div style="margin-top: 10px">选中：{{ checkboxGroupValue.join('，') }}</div>
</template>
<script setup>
  import { ref } from 'vue';

  import { BkCheckbox, BkCheckboxGroup } from '@bkui-vue/checkbox';

  const checkboxGroupValue = ref(['微信']);
</script>
