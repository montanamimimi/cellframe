<script setup>
  import MenuItem from '@/components/MenuItem.vue'
  import FooterItem from '@/components/FooterItem.vue'
</script>

<template>
    <main>
      <MenuItem />
      <RouterView />
    </main>
    <FooterItem />

</template>

<style scoped>

</style>
