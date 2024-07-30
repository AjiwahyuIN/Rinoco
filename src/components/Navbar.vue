<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import  '../style/component/Navbar.css'
</script>

<template>
    <section>
        <div class="container">
            <nav class="navbar" data-aos="fade-down" data-aos-duration="1000">
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

