<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
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

<style scoped>
@media only screen and (max-width: 767px) {
    .brand img {
        max-width: 30px;
    }
    .brand span {
        font-size: 18px !important;
    }
}
.nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.20);
    padding: 4px;
}
.nav-link {
    color: #FFF;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
    padding: 10px 24px;
    text-transform: capitalize;
    border-radius: 100px;
}

@media only screen and (max-width: 767px) {
    .nav-link {
        font-size: 14px;
        padding: 6px 12px;
    }
}
.router-link-active.nav-link  {
    background: #FFF;
    box-shadow: 0px -8px 8px 0px rgba(128, 222, 234, 0.50) inset;
    color: #006277;
    font-weight: 700;
}
.navbar {
    padding-block: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.brand {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
}
.brand span {
    color: #FFF;
    font-family: "Yellow Candy";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
