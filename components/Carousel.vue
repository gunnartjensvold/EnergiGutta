<script setup lang="ts">
const activeSlide = ref(0);
provide("carouselData", { activeSlide });

const increaseSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % numSlides.value;
};

const decreaseSlide = () => {
  activeSlide.value =
    (activeSlide.value - 1 + numSlides.value) % numSlides.value;
};

const slideContainerEl = ref<HTMLElement | null>();
const numSlides = ref<number>(0);

const { direction, isSwiping } = useSwipe(slideContainerEl);
const stopScroll = ref(false);
const scrollY = ref(0);
const { x, y } = useWindowScroll();

watch(
  () => isSwiping.value,
  (swiping) => {
    scrollY.value = y.value;
    if (swiping && direction.value === "right") {
      stopScroll.value = true;
      decreaseSlide();
    } else if (swiping && direction.value === "left") {
      stopScroll.value = true;
      increaseSlide();
    }
  }
);

watch(
  () => slideContainerEl.value,
  (el) => {
    numSlides.value = el?.childElementCount as number;
  }
);
</script>

<template>
  <div class="carousel touch-pan-y">
    <div
      class="carousel-slides"
      ref="slideContainerEl"
      :active-slide="activeSlide"
    >
      <slot></slot>
    </div>
    <div
      class="absolute top-1/2 -translate-y-1/2 pointer-events-none justify-between items-center flex px-4 left-0 right-0"
    >
      <button
        class="pointer-events-auto flex py-2 px-2 border-none bg-gray-300 rounded-2 cursor-pointer hover:bg-fuchsia-500/80 hover:scale-105 duration-300"
        @click="decreaseSlide"
      >
        <span class="text-2xl text-dark-900 i-ic:round-arrow-back-ios"></span>
      </button>
      <button
        class="pointer-events-auto flex py-2 px-2 border-none bg-gray-300 rounded-2 cursor-pointer hover:bg-fuchsia-500/80 hover:scale-105 duration-300"
        @click="increaseSlide"
      >
        <span
          class="text-2xl text-dark-900 i-ic:round-arrow-forward-ios"
        ></span>
      </button>
    </div>
    <div
      class="absolute pointer-events-none bottom-5 right-5 px-3 py-2 select-none text-dark-900 bg-gray-300 rounded-2"
    >
      {{ activeSlide + 1 }}/{{ numSlides }}
    </div>
  </div>
</template>

<style>
.carousel {
  position: relative;
}

.carousel-slides {
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  inset: 0;
}

img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}
</style>
