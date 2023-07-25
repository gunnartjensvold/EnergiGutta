<script setup lang="ts">
type Props = {
  text: string;
};

const props = defineProps<Props>();
const typespeed = 150;

const currentMessage = ref<string>("");

const increaseMessage = () => {
  console.log("increasing");
  setTimeout(() => {
    const nextIdx = currentMessage.value?.length as number;
    currentMessage.value += props.text.charAt(nextIdx);
    if (nextIdx < props.text.length) {
      increaseMessage();
    }
  }, typespeed);
};
onMounted(() => {
  console.log("Hello world");
  increaseMessage();
});
</script>

<template>
  <span
    class="typeline border-solid border-l-0 border-b-0 border-t-0 pr-1"
    :class="[
      currentMessage === props.text ? 'border-r-0' : 'border-r-gray-300',
    ]"
    >{{ currentMessage }}</span
  >
</template>

<style>
.typeline {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  from {
    border-right-color: rgba(227, 227, 227, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
