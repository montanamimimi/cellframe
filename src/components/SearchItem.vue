<script setup>
    import { ref } from 'vue'

    const searchValue = ref("")
</script>

<template>
    <div class="search">
        <input id="search" type="text" class="search-input" v-model="searchValue" placeholder="Search" @keyup="$emit('searchByName', searchValue)">
    </div>
</template>

<style scoped>
    .search {
        height: 60px; 
        width: 100%;
        padding: 10px 36px;
        border-radius: 0px 0px 0px 16px; 
        box-shadow: 1px 1px 0px 0px #524D64 inset, 5px 5px 10px 0px rgba(8, 7, 13, 0.42); 
    }


    .search-input {
        background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.39253 4.39252C2.58599 6.19905 2.58599 9.12803 4.39253 10.9346C6.19906 12.7411 9.12804 12.7411 10.9346 10.9346C12.7411 9.12803 12.7411 6.19906 10.9346 4.39252C9.12804 2.58598 6.19906 2.58598 4.39253 4.39252ZM3.83178 3.83177C5.94801 1.71554 9.3791 1.71554 11.4953 3.83177C13.5172 5.85368 13.6074 9.07587 11.7657 11.2048L16.1682 15.6075C16.3231 15.7623 16.3231 16.0134 16.1682 16.1682C16.0134 16.3231 15.7623 16.3231 15.6075 16.1682L11.205 11.7655C9.07608 13.6074 5.85375 13.5173 3.83178 11.4953C1.71555 9.37909 1.71555 5.948 3.83178 3.83177Z" fill="white"/></svg>');
        background-repeat: no-repeat;
        width: 224px;
        padding: 7px 24px 8px 36px;
        font-size: 16px; 
        font-weight: 200;
        border-bottom: 1px solid var(--panelColor);
        background-position: left top 7px;
    }

    ::placeholder {
        color: var(--placeholderColor);
        opacity: 1; /* Firefox */
        font-weight: 300;
    }

    ::-ms-input-placeholder { /* Edge 12 -18 */
        color: var(--placeholderColor);
        font-weight: 300;
    }
</style>