<script setup lang="ts">
type Props = {
  title?: string;
  subtitle?: string;
  mediaUrl?: string;
};

const props = defineProps<Props>();
</script>
<template>
  <div
    class="flex flex-col bg-dark-500 hover:border-fuchsia border-2 border-transparent border-solid aspect-square w-76 rounded py-3 px-4 gap-2 text-gray-300"
  >
    <h5 class="text-xl">{{ props.title }}</h5>
    <img class="aspect-square" :src="props.mediaUrl" />
    <h6 class="text-lg text-gray-400">{{ props.subtitle }}</h6>
    <div class="flex-col">
      <slot></slot>
    </div>
  </div>
</template>
