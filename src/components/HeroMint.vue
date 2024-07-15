<script>

</script>

<template>
    <section class="sec-hero-mint">
        <div class="container">
            <div class="hero-mint">
                <img src="../assets/images/The Rinodex.svg" alt="">
                <div class="card-slider">
                    <img src="../assets/images/item.svg" alt="">
                    <div class="card-slider-content">
                        <h4>Aria Windrider</h4>
                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt aute irure dolor in reprehenderit in voluptate</span>
                    </div>
                    <div class="card-slider-button">
                        <a href="#" class="btn-details">Details</a>
                        <a href="#" class="button-yellow">Adopt This</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<style scoped>
.sec-hero-mint {    
    /* background-image: url('../assets/images/Mint.png'); */
    background-position: bottom center;
    background: linear-gradient(180deg, rgb(77, 150, 164) 0%, rgba(112,226,247,1) 60%, rgba(255,255,255,1) 100%);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    margin-top: -100px;
    padding-top: 140px;
}
.hero-mint {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card-slider {
    margin-top: 180px;
    border-radius: 80px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(10px);
    padding: 115px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: relative;
}
.card-slider img {
    position: absolute;
    top: -110px;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.card-slider-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    max-width: 340px;
}
.card-slider-content h4 {
    color: #30323D;
    text-align: center;
    font-family: "Yellow Candy";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.card-slider-content span {
    color: rgba(48, 71, 85, 0.80);
    text-align: center;
    text-overflow: ellipsis;
    font-family: "Artegra Soft Condensed";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.card-slider-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
}
.btn-details {
    padding: 14px 24px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #FFF;
    box-shadow: 0px -8px 8px 0px rgba(128, 222, 234, 0.50) inset;
    color: #006277;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
}
.card-slider-button a {
    width: 100%;
}
</style>