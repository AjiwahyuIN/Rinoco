<script setup>

import  '../style/component/Navbar.css'
</script>

<template>
    <section>
        <div class="container">
            <nav class="navbar">
                <router-link to="/" class="brand">
                    <img src="../assets/images/brand.svg" alt="">
                    <span>Rinoco</span>
                </router-link>
                <div class="nav-menu">
                    <router-link to="/" class="nav-link">
                    home
                    </router-link>
                    <router-link to="/mint" class="nav-link">
                        mint
                    </router-link>
                </div>
                <router-link to="/" class="button-yellow">
                    Connect Wallet
                </router-link>
            </nav>
        </div>
    </section>
</template>

