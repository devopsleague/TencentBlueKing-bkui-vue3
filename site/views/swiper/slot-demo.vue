<template>
  <bk-swiper
    class="swiper"
    :height="200"
    :is-loop="false"
    :list="list"
  >
    <template #default="item">
      <div style="text-align: center">
        {{ item }}
      </div>
    </template>
  </bk-swiper>
</template>

<script setup>
  const list = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6'];
</script>
