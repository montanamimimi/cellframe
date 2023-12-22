<template>
    <footer>
        <div class="footer-items">
            <div class="footer-item"><span>Cellnet</span></div>
            <div class="footer-item"><span>Mainnet</span></div>
            <div class="footer-item"><span>Somenet</span></div>
            <div class="footer-item"><span>Testnet</span></div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        height: 42px; 
        width: 100%;
        box-shadow: 5px -5px 10px 0px rgba(8, 7, 13, 0.42), 1px 1px 0px 0px #524D64 inset;
    }

    span {
        position: relative;
    }

    span::after {
        content: '';
        display: inline-block;
        width: 8px; /* Adjust the size of the circle */
        height: 8px; /* Adjust the size of the circle */
        background-color: #A9E81C;
        border-radius: 50%;
        margin-left: 9px; /* Adjust the space between text and circle */
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        }

    .footer-items {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        font-size: 12px; 
        padding: 0 50px;
    }

    .footer-item {
        width: 25%;
        padding-right: 16px;
        text-align: center;
    }

    @media (max-width: 300px) {
        footer {
            height: unset;
            padding: 8px 32px;
        }

        .footer-items {
            flex-direction: column;
        }

        .footer-item {        
            background-repeat: no-repeat;
            background-position: left center;
            padding: 4px 20px;
            width: 100%;
        }
    }

</style>

