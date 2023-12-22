<script setup>
    import LogoImage from '@/components/LogoImage.vue'
    import MenuList from '@/components/MenuList.vue'
</script>

<template>
    <div class="sidebar">
        <div class="logo">
            <RouterLink :to="{name: 'Home'}">
                <LogoImage />
            </RouterLink>
            
        </div>
        <MenuList />
    </div>
</template>

<style scoped>
    .sidebar {
        margin: 0 3px 5px 0;
        box-shadow: 5px 5px 10px 0px rgba(8, 7, 13, 0.42), 1px 1px 0px 0px #524D64 inset;
        border-radius: 0 0 12px 0;  
    }   
    .logo {
        margin-top: 7px;
        margin-left: 11px;
    }
</style>
