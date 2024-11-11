<script setup lang="ts">
import HeaderContent from '../HeaderContent.vue';
import FooterContent from '../FooterContent.vue';
</script>

<template>
  <HeaderContent/>
  <main>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
