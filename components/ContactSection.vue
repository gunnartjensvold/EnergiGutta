<template>
  <Section id="contact" class="flex flex-col">
    <h4 class="text-2xl text-gray-300 text-center">Contact</h4>
    <p class="text-center text-gray-400 text-lg mt-4 px-10">
      Send us a message and we'll get back to you as soon as possible!
    </p>
    <div class="mt-9 flex gap-5 text-5xl justify-center flex-wrap px-10">
      <form
        accept-charset="UTF-8"
        action="https://www.formbackend.com/f/{your-identifier}"
        method="POST"
        class="flex flex-col gap-5 w-150"
      >
        <div class="flex flex-col gap-2 text-base text-gray-300">
          <label class="ml-1 text-gray-300" for="name">Name</label>
          <input
            autocomplete="name"
            class="grow-1 px-1 border-none outline-none focus-within:outline-fuchsia-500 outline-solid py-1 rounded bg-gray-300 text-dark-900 font-normal text-base"
            type="text"
            id="name"
            name="name"
            required
            v-model="name"
          />
        </div>

        <div class="flex flex-col gap-2 text-base text-gray-300">
          <label class="ml-1 text-gray-300" for="email">Email</label>
          <input
            autocomplete="email"
            class="grow-1 px-1 border-none outline-none focus-within:outline-fuchsia-500 outline-solid py-1 rounded bg-gray-300 text-dark-900 font-normal text-base"
            type="email"
            id="email"
            name="email"
            v-model="email"
            required
          />
        </div>

        <div class="flex flex-col gap-2 text-base text-gray-300">
          <label class="ml-1 text-gray-300" for="message">Message</label>
          <textarea
            class="grow-1 px-1 border-none outline-none focus-within:outline-fuchsia-500 outline-solid py-1 rounded bg-gray-300 text-dark-900 font-normal text-base"
            id="message"
            name="message"
            required
            v-model="message"
          ></textarea>
        </div>

        <button
          class="mt-3 hover:bg-fuchsia-500/80 hover:scale-105 duration-300 cursor-pointer border-transparent bg-fuchsia-500 text-dark-900 text-lg w-fit px-4 py-2 rounded border-2 border-style-solid"
          type="submit"
          @click.prevent="sendMessage"
        >
          Send message
        </button>
      </form>
    </div>
  </Section>
</template>

<script setup lang="ts">
const name = ref();
const email = ref();
const message = ref();

// TODO: Set up mail service in backend and send an email, this requires a server route ?
const sendMessage = () => {
  console.log("The Name is :", name.value);
  console.log("The Email is :", email.value);
  console.log("The Message is :", message.value);

  // Only send if user has entered values
  if (name.value && email.value && message.value) {
  }
};
</script>

<style></style>
