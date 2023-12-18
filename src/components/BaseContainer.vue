<template>
    <div class="base-container">
        <slot></slot>
    </div>
</template>

<style scoped>

.base-container {
    width: 100%;
    border-radius: 12px;
    background: var(--panelColor); 
    margin: 6px 6px 6px 3px;
    padding: 20px;
}

</style>