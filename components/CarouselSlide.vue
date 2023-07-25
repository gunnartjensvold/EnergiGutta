<template>
  <Transition>
    <div
      v-show="slideIdx === activeSlide + 1"
      class="carousel-slide"
      ref="slideEl"
    >
      <slot></slot>
      <div class="absolute bottom-5 left-5">
        <slot name="caption"></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { activeSlide } = inject("carouselData");

const slideEl = ref<HTMLElement | null>();
const slideContainerEl = useParentElement(slideEl);

const slideIdx = ref<number | null>();

watch(
  () => [slideEl.value, slideContainerEl.value],
  ([slide, container]) => {
    if (slide && container) {
      let slideIndex: number | null = null;
      container.childNodes.forEach((el, idx) => {
        if (el === slide) {
          slideIndex = idx;
        }
      });
      slideIdx.value = slideIndex;
    }
  }
);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
