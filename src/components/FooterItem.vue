<template>
    <footer>
        <div class="footer-items">
            <div class="footer-item">Cellnet</div>
            <div class="footer-item">Mainnet</div>
            <div class="footer-item">Somenet</div>
            <div class="footer-item">Testnet</div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        height: 42px; 
        width: 100%;
        box-shadow: 5px -5px 10px 0px rgba(8, 7, 13, 0.42), 1px 1px 0px 0px #524D64 inset;
    }

    .footer-items {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
        font-size: 12px; 
    }

    .footer-item {
        background-image: url('data:image/svg+xml,<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 4C0.5 1.79086 2.29086 0 4.5 0C6.70914 0 8.5 1.79086 8.5 4C8.5 6.20914 6.70914 8 4.5 8C2.29086 8 0.5 6.20914 0.5 4Z" fill="url(%23paint0_radial_1815_11)"/><defs><radialGradient id="paint0_radial_1815_11" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.5 4) rotate(90) scale(4)"><stop stop-color="%23A9E81C"/><stop offset="1" stop-color="%238ECC00"/></radialGradient></defs></svg> ');
        background-repeat: no-repeat;
        background-position: right center;
        padding-right: 16px;
    }
</style>

