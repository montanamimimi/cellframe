<script setup>

    import { ref } from 'vue'

    const props = defineProps({
        menu: {
            type: Object,
            required: true
        }
    })   

    const imagePath = ref('');

    const changeImage = async () => {
    const newImagePath = (await import(`@/assets/images/${props.menu.slug}.svg`)).default;
    imagePath.value = newImagePath;
    };

    changeImage()

</script>

<template>
    <RouterLink :to="`/${menu.slug}`">
        <div class="menu-item">
            <div class="image">
                <img :src="imagePath" alt="Example Image" />
            </div>
            {{ menu.name }}
        </div>
    </RouterLink>
</template>

<style scoped>

.image {
    margin-right: 20px;
}
.menu-item {
    width: 170px;
    padding: 16px 24px;
    border-radius: 0px 16px 16px 0px; 
    cursor: pointer;
    font-size: 13px; 
    display: flex;
    align-items: center;
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