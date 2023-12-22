<script setup>
    import LogoImage from '@/components/LogoImage.vue'
    import BurgerImage from '@/components/BurgerImage.vue'
    import MenuList from '@/components/MenuList.vue'

    import { ref } from 'vue'

    const displayMenu = ref(false)


</script>

<template>
    <div class="menu">
        <div class="topbar">
            <div class="logo">
                <RouterLink :to="{name: 'Home'}">
                    <LogoImage />
                </RouterLink>            
            </div>
                <div class="burger" @click="displayMenu = !displayMenu">
                    <BurgerImage />
                </div>
        </div>

        <MenuList v-if="displayMenu" @click="displayMenu = !displayMenu" />
    </div>
</template>

<style scoped>
    .topbar {
        width: 100%;
        height: 46px;
        display: flex;
        justify-content: space-between;
    }

    .burger {
        padding: 4px 8px;
    }

    .cover {
        width: 100%;
    }
</style>
