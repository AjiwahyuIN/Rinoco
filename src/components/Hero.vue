<script setup>
import "../style/component/Hero.css"
</script>

<template>
    <section class="sec-hero">
        <div class="container">
            <div class="heading-wrapper">
                <h3>Welcome to the <span>world</span> of</h3>
                <img src="../assets/images/Rinoco.svg" alt="">

            </div>
            <div class="heading-content">
                <div class="heading-content-wrapper">
                    <h4>Join us on a journey through a vast and breathtaking realm inhabited by the extraordinary creatures known as Rinocos. These magnificent beings come in a dazzling array of types and species—some are friendly, others more formidable, ranging from the tiniest critters to colossal giants.</h4>
                    <h4>One thing is certain:<span> the world of Rinoco</span> is brimming with adventure and wonders just waiting to be discovered. Explore, encounter, and immerse yourself in the magical experiences this enchanting world has to offer.</h4>
                </div>
                <div class="hero-button-wrapper">
                    <router-link to="/">
                        <div class="hero-button">
                            Join the community
                            <div class="hero-button-ic">
                                <img src="../assets/images/arrow-white.svg" alt="">
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>