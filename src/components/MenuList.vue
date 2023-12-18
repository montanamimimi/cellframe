<script setup>
    import sourceData from '@/data.json'
    import MenuListItem from '@/components/MenuListItem.vue'
    import { ref } from 'vue'

    const categories = ref(sourceData.categories)

</script>

<template>
    <div class="menu-items">
        <MenuListItem v-for="category in categories" :key="category.id" :menu="category"/>
    </div>
</template>

<style scoped>

.menu-items {
    width: 180px;
}
</style>