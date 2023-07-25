<template>
  <Section
    id="home"
    class="flex gap-4 flex-col justify-around lg:items-center lg:gap-30 lg:justify-center lg:flex-row"
  >
    <div class="flex flex-col px-6 pt-7 lg:pt-0 text-center lg:text-left">
      <h1 class="text-4xl text-gray-300">
        <VueWriter text="EnergiGutta" />
      </h1>
      <h3 class="slide-in-left description text-xl mt-2 text-gray-400">
        The best software team you can hire!
      </h3>
      <div class="mt-4 slide-in-right buttons flex gap-4 mx-auto lg:mx-0">
        <NuxtLink
          to="/#contact"
          class="hover:bg-fuchsia-500/80 hover:scale-105 duration-300 cursor-pointer border-transparent bg-fuchsia-500 text-dark-900 text-lg w-fit px-4 py-2 rounded border-2 border-style-solid"
          >Get in touch</NuxtLink
        >

        <NuxtLink
          class="hover:bg-fuchsia-500/80 hover:border-transparent hover:text-dark-900 hover:scale-105 duration-300 cursor-pointer border-2 bg-transparent text-gray-300 text-lg w-fit px-4 py-2 rounded border-gray-300 border-style-solid"
          to="/demos"
        >
          Our demos
        </NuxtLink>
      </div>
    </div>
    <div class="lg:flex lg:items-center">
      <Carousel
        class="mx-auto aspect-square w-[min(100%,28rem)] lg:w-[28rem] mt-8"
      >
        <CarouselSlide>
          <img src="/images/6.png" />
          <template #caption>
            <span class="text-dark-900 text-lg bg-gray-300 px-3 py-2 rounded">
              Aksel
            </span>
          </template>
        </CarouselSlide>
        <CarouselSlide>
          <img src="/images/1.png" />
          <template #caption>
            <span class="text-dark-900 text-lg bg-gray-300 px-3 py-2 rounded">
              Benjamin
            </span>
          </template>
        </CarouselSlide>
        <CarouselSlide>
          <img src="/images/2.png" />
          <template #caption>
            <span class="text-dark-900 text-lg bg-gray-300 px-3 py-2 rounded">
              Gunnar
            </span>
          </template>
        </CarouselSlide>
        <CarouselSlide>
          <img src="/images/4.png" />
          <template #caption>
            <span class="text-dark-900 text-lg bg-gray-300 px-3 py-2 rounded">
              Erlend
            </span>
          </template>
        </CarouselSlide>
        <CarouselSlide>
          <img src="/images/5.png" />
          <template #caption>
            <span class="text-dark-900 text-lg bg-gray-300 px-3 py-2 rounded">
              Fredrik
            </span>
          </template>
        </CarouselSlide>
      </Carousel>
    </div>
  </Section>
</template>

<style>
.slide-in-left {
  opacity: 0;
  animation: slide-in-left 1s forwards;
}

.slide-in-right {
  opacity: 0;
  animation: slide-in-right 1s forwards;
}

.description {
  animation-delay: 1.5s;
}

.buttons {
  animation-delay: 2s;
}

:root {
  --animation-distance: 50px;
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(var(--animation-distance));
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(calc(-1 * var(--animation-distance)));
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
