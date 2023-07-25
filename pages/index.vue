<template>
  <div class="text-primary">
    <header>
      <NavBar></NavBar>
    </header>
    <HeroSection></HeroSection>
    <TechnologySection></TechnologySection>
    <SkillSection></SkillSection>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;
  background-color: rgb(20, 18, 23);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  margin: 0;
  min-height: 100svh;
}

section {
  padding-top: 4rem;
  padding-bottom: 2rem;
}

section + section {
  margin-top: 2rem;
}
</style>
