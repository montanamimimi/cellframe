<script setup>
    import sourceData from '@/data.json'
    import MenuListItem from '@/components/MenuListItem.vue'
    import { ref } from 'vue'

    const categories = ref(sourceData.categories)

</script>

<template>
    <div class="menu-items">
        <MenuListItem v-for="category in categories" :key="category.id" :menu="category" />
    </div>
</template>

<style scoped>

.menu-items {
    width: 180px;
}


.image {
    margin-right: 20px;
}
.menu-item {
    width: 170px;
    padding: 16px 24px 16px 28px;
    border-radius: 0px 16px 16px 0px; 
    cursor: pointer;
    font-size: 13px; 
    display: flex;
    align-items: center;
}

.menu-item:nth-child(even) {
    padding: 160px 24px 16px 28px;
    }

.menu-item:hover {
    box-shadow: 3px 3px 5px 0px rgba(8, 7, 13, 0.25) inset, 1px 1px 0px 0px rgba(107, 102, 126, 0.49);
}

.router-link-active {
    .menu-item {
        box-shadow: 3px 3px 5px 0px rgba(8, 7, 13, 0.25) inset, 1px 1px 0px 0px rgba(107, 102, 126, 0.49);

    }
}
</style>