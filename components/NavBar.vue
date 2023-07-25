<template>
  <nav
    class="fixed py-4 flex items-center justify-between z-10 w-full bg-dark-500 shadow text-light px-6"
    ref="nav"
  >
    <NuxtLink to="/#home">
      <div class="flex items-center gap-1">
        <span>EnergiGutta</span>
        <div class="i-fxemoji:lightbulb"></div>
      </div>
    </NuxtLink>
    <ul class="ml-auto gap-4 list-none h-fit display-none lg:flex">
      <li v-for="link in links">
        <NuxtLink
          :to="link.link"
          class="hover:text-fuchsia-500 duration-100 py-2"
          >{{ link.title }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const links = [
  {
    title: 'Home',
    link: '#home'
  },
  {
    title: 'Technologies',
    link: '#technologies'
  },
  {
    title: 'Skills',
    link: '#skills'
  },
  {
    title: 'Contact',
    link: '#contact'
  }
]
</script>
