<template>
  <Section id="skills" class="flex flex-col">
    <div class="flex items-center justify-center">
      <h4 class="text-2xl text-gray-300 text-center">The team</h4>
      <div class="i-fxemoji:sportsmedal ml-2 text-xl"></div>
    </div>
    <p class="text-center text-gray-400 text-lg mt-4 px-10">
      We are an efficient group with a wide range of knowledge, ready to meet
      your technological requirements
    </p>
    <div class="mt-9 flex gap-5 text-5xl justify-center flex-wrap px-10">
      <!-- Gunnar -->
      <SkillCard
        title="Gunnar"
        subtitle="Proficient in"
        media-url="/images/2.png"
      >
        <template #default>
          <SkillRow title="Frontend">
            <template #default>
              <div class="i-logos:vue"></div>
              <div class="i-logos:javascript"></div>
              <div class="i-logos:typescript-icon"></div>
            </template>
          </SkillRow>
          <SkillRow title="Data analysis">
            <template #default>
              <div class="i-logos:numpy"></div>
              <div class="i-logos:python"></div>
            </template>
          </SkillRow>
          <SkillRow title="Optimization">
            <div class="i-logos:google-optimize"></div>
          </SkillRow>
        </template>
      </SkillCard>

      <!-- Erlend -->
      <SkillCard
        title="Erlend"
        subtitle="Proficient in"
        media-url="/images/4.png"
      >
        <template #default>
          <SkillRow title="Machine learning">
            <template #default>
              <div class="i-logos:python"></div>
              <div class="i-logos:pytorch-icon"></div>
            </template>
          </SkillRow>
          <SkillRow title="Backend">
            <template #default>
              <div class="i-logos:github-actions"></div>
              <div class="i-logos:docker-icon"></div>
              <div class="i-logos:postgresql"></div>
              <div class="i-logos:python"></div>
            </template>
          </SkillRow>
          <SkillRow title="Optimization">
            <div class="i-logos:google-optimize"></div>
          </SkillRow>
        </template>
      </SkillCard>

      <!-- Aksel -->

      <SkillCard
        title="Aksel"
        subtitle="Proficient in"
        media-url="/images/6.png"
      >
        <template #default>
          <SkillRow title="Data visualization">
            <template #default>
              <div class="i-logos:python"></div>
              <div class="i-logos:javascript"></div>
            </template>
          </SkillRow>
          <SkillRow title="Data analysis">
            <template #default>
              <div class="i-logos:numpy"></div>
              <div class="i-logos:python"></div>
            </template>
          </SkillRow>
          <SkillRow title="Optimization">
            <div class="i-logos:google-optimize"></div>
          </SkillRow>
        </template>
      </SkillCard>

      <!-- Fredrik -->

      <SkillCard
        title="Fredrik"
        subtitle="Proficient in"
        media-url="/images/5.png"
      >
        <template #default>
          <SkillRow title="Machine learning">
            <template #default>
              <div class="i-logos:python"></div>
              <div class="i-logos:pytorch-icon"></div>
            </template>
          </SkillRow>
          <SkillRow title="Data analysis">
            <template #default>
              <div class="i-logos:numpy"></div>
              <div class="i-logos:python"></div>
            </template>
          </SkillRow>
          <SkillRow title="Optimization">
            <div class="i-logos:google-optimize"></div>
          </SkillRow>
        </template>
      </SkillCard>

      <!-- Benjamin -->

      <SkillCard
        title="Benjamin"
        subtitle="Proficient in"
        media-url="/images/1.png"
      >
        <template #default>
          <SkillRow title="Backend">
            <template #default>
              <div class="i-logos:python"></div>
              <div class="i-logos:c-sharp"></div>
            </template>
          </SkillRow>
          <SkillRow title="Machine learning">
            <template #default>
              <div class="i-logos:pytorch-icon"></div>
              <div class="i-logos:python"></div>
            </template>
          </SkillRow>
          <SkillRow title="Optimization">
            <div class="i-logos:google-optimize"></div>
          </SkillRow>
        </template>
      </SkillCard>
    </div>
  </Section>
</template>

<script setup lang="ts"></script>

<style></style>
