<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
    <div class="navbar">
        <router-link to="/" class="brand">
            <img src="../assets/images/brand.svg" alt="">
            <span>Rinoco</span>
        </router-link>
        <router-link class="button-yellow">
            Connect Wallet
        </router-link>
    </div>
</template>

<style scoped>
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
