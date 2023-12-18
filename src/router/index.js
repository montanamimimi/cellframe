import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Certificates from '@/pages/Certificates.vue'
import Wallet from '@/pages/Wallet.vue'
import Dex from '@/pages/Dex.vue'
import Txexplorer from '@/pages/Txexplorer.vue'
import Tokens from '@/pages/Tokens.vue'
import Vpnclient from '@/pages/Vpnclient.vue'
import Vpnservice from '@/pages/Vpnserviсe.vue'
import Console from '@/pages/Console.vue'
import Logs from '@/pages/Logs.vue'
import Settings from '@/pages/Settings.vue'
import Dapps from '@/pages/Dapps.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
    { 
        path: '/', 
        name: 'Home',
        component: Home
    },
    { 
        path: '/certificates', 
        name: 'Certificates',
        component: Certificates
    },
    { 
        path: '/wallet', 
        name: 'Wallet',
        component: Wallet
    },
    { 
        path: '/dex', 
        name: 'Dex',
        component: Dex
    },
    { 
        path: '/txexplorer', 
        name: 'Txexplorer',
        component: Txexplorer
    },
    { 
        path: '/tokens', 
        name: 'Tokens',
        component: Tokens
    },
    { 
        path: '/vpnclient', 
        name: 'Vpnclient',
        component: Vpnclient
    },
    { 
        path: '/vpnservice', 
        name: 'Vpnservice',
        component: Vpnservice
    },
    { 
        path: '/console', 
        name: 'Console',
        component: Console
    },
    { 
        path: '/logs', 
        name: 'Logs',
        component: Logs
    },
    { 
        path: '/settings', 
        name: 'Settings',
        component: Settings
    },
    { 
        path: '/dapps', 
        name: 'Dapps',
        component: Dapps
    },
    {
        path: '/:pathName(.*)',
        name: 'PageNotFound',
        component: NotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})