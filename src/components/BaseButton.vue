<script setup>

const props = defineProps({
        className: {
            type: String,
            required: false,
            default: 'button--primary'
        }
    })
</script>

<template>
    <div class="button" :class="className">
        <slot></slot>
    </div>
</template>

<style scoped>

.button {
    font-size: 14px;
    font-style: normal;
    font-weight: 500; 
    height: 36px;
    padding: 0px 40px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
}

.button--primary {
    border-radius: 30px;
    background: var(--mainButtonColor, linear-gradient(230deg, #9580FF 0%, #A361FF 92.48%));
    box-shadow: 1px 1px 4px 0px #F1E7FF inset, 2px 2px 7px 0px rgba(11, 10, 13, 0.44);
}

.button--inactive {
    cursor: default;
    border-radius: 30px;
    background: #B0AEB9;
    box-shadow: 1px 1px 4px 0px rgba(241, 231, 255, 0.30) inset, 2px 2px 7px 0px rgba(11, 10, 13, 0.44);
}

@media (max-width: 1279px) {
    .button {
        font-size: 13px;
        height: unset;
        min-height: 32px;
        padding: 8px 40px; 
        text-align: center;
    }
}

</style>