<script setup lang="ts">
type Props = {
  title?: string;
};

const props = defineProps<Props>();
</script>
<template>
  <div class="flex justify-between">
    <span class="text-base">{{ props.title }}</span>
    <div class="flex gap-2 text-xl">
      <slot></slot>
    </div>
  </div>
</template>
