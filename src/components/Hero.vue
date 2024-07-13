<template>
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
                        <img src="../assets/images/Iconly/Bold/Arrow - Right.svg" alt="">
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.heading-wrapper {
    padding-top: 64px;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end !important;

}
.heading-wrapper h3{
    color: #FFF;
    font-family: "Artegra Soft Condensed ExtraBold";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: -40px;
}

.heading-wrapper h3 span {
    background: linear-gradient(358deg, #FB0 21.69%, #FFEEC0 120.62%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Artegra Soft Condensed";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.heading-content {
    border-radius: 48px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(10px);
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 16px;
}
.heading-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.heading-content-wrapper h4 {
    color: #004958;
    text-align: center;
    font-family: "Artegra Soft Condensed";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.heading-content-wrapper h4 span {
    color: #004958;
    text-align: center;
    font-family: "Artegra Soft Condensed";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.hero-button {
    display: flex;
    height: 80px;
    padding: 12px 12px 12px 32px;
    align-items: center;
    gap: 24px;
    color: #30323D;
    font-family: "Artegra Soft Condensed";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 100px;
    background: #FFF;
}
.hero-button-ic {
    display: flex;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: linear-gradient(358deg, #FB0 21.69%, #FFEEC0 120.62%);
}

</style>