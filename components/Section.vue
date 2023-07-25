<script setup lang="ts">
type Props = {
    id?: string
}
const props = defineProps<Props>()
   
</script>

<template>
    <section :id="props.id">
        <slot></slot>
    </section>
</template>