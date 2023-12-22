<script setup>
  import MenuItem from '@/components/MenuItem.vue'
  import MenuItemMobile from '@/components/MenuItemMobile.vue'
  import FooterItem from '@/components/FooterItem.vue'

  import { ref, onMounted, onBeforeUnmount} from 'vue'

  const isWideScreen = ref(false);

  const handleResize = () => {
      isWideScreen.value = window.innerWidth >= 768;
  };

  onMounted(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
  });


</script>

<template>
    <main :class="{ 'main-mobile': !isWideScreen }">
      <MenuItem v-if="isWideScreen" />
      <MenuItemMobile v-else />

      <RouterView :wide="isWideScreen" />
    </main>
    <FooterItem />

</template>

<style scoped>

  .main-mobile {
    flex-direction: column;
  }

</style>
