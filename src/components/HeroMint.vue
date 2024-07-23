<script>

  export default{
    name: 'HeroMint',
    data(){
        return{
            showModal: false,
            tabState: 1,
        }
    },
    methods: {
        toggleModal(){
            this.showModal = !this.showModal
        },
        switchTab(state){
            this.tabState = state
        },
    },
  }


</script>


<template id="HeroMint">
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
                        <button class="btn-details trigger" v-on:click="toggleModal()" >Details</button>
                        <router-link to="/popup">
                            <button class="button-yellow">Adopt This</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="mint-load">
                <div class="mint-load-header">
                    <h4>total Rinoco's adopted</h4>
                    <div class="mint-load-txt">
                        <h5>790</h5>
                        <span>/1500</span>
                    </div>
                </div>
                <div class="mint-progress">
                    <div class="mint-progress-value">

                    </div>
                </div>
            </div>
            <div class="modal" v-if="showModal">
                <div class="modal-content">
                    <div class="modal-tab">
                        <div id="tabs" class="modal-tab-btn">
                            <button :class="tabState == 1 ? 'current' : ''" data-tab="tab-1" v-on:click="switchTab(1)">About</button>
                            <button :class="tabState == 2 ? 'current' : ''" data-tab="tab-2" v-on:click="switchTab(2)">Base Stats</button>
                            <button :class="tabState == 3 ? 'current' : ''" data-tab="tab-3" v-on:click="switchTab(3)">Moves</button>
                        </div>
                        <div class="modal-tab-content">
                            <div :class="tabState == 1 ? 'tab-content current' : 'tab-content'"  id="tab-1">
                                <div class="about-tab">
                                    <h4>description</h4>
                                    <div class="about-tab-txt-wrapper">
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-left">
                                                <h5>SPECIES:</h5>
                                                <span>Seed</span>
                                            </div>
                                            <div class="about-tab-txt-left">
                                                <h5>ABILITIES:</h5>
                                                <span>Overgrow, Chlorophyl</span>
                                            </div>
                                        </div>
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-right">
                                                <h5>HEIGHT:</h5>
                                                <span>0.70 cm</span>
                                            </div>
                                            <div class="about-tab-txt-right">
                                                <h5>WEIGHT:</h5>
                                                <span>15.2 lbs (6.9 kg)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-tab">
                                    <h4>Breeding</h4>
                                    <div class="about-tab-txt-wrapper">
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-left">
                                                <h5>MALE:</h5>
                                                <span>875%</span>
                                            </div>
                                            <div class="about-tab-txt-left">
                                                <h5>FEMALE:</h5>
                                                <span>12.5%</span>
                                            </div>
                                        </div>
                                        <div class="about-tab-txt">
                                            <div class="about-tab-txt-right">
                                                <h5>EGG GROUPS:</h5>
                                                <span>Monster</span>
                                            </div>
                                            <div class="about-tab-txt-right">
                                                <h5>EGG CYCLE:</h5>
                                                <span>Grass</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div :class="tabState == 2 ? 'tab-content current' : 'tab-content'" id="tab-2">
                                <div class="base-tab">
                                    <h4>POWER</h4>
                                    <div class="base-content">
                                        <div class="base-content-wrapper">
                                            <span>HP</span>
                                            <div class="base-progress">
                                                <div class="red-value value-1"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>ATTACK</span>
                                            <div class="base-progress">
                                                <div class="green-value value-2"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>DEFENSE</span>
                                            <div class="base-progress">
                                                <div class="red-value value-3"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>SP. ATK</span>
                                            <div class="base-progress">
                                                <div class="green-value value-4"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>SP. DEF</span>
                                            <div class="base-progress">
                                                <div class="green-value value-5"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>SPEED</span>
                                            <div class="base-progress">
                                                <div class="red-value value-6"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                        <div class="base-content-wrapper">
                                            <span>TOTAL</span>
                                            <div class="base-progress">
                                                <div class="green-value value-7"></div>
                                            </div>
                                            <span>45</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="base-tab">
                                    <h4>TYPE DEFENSES</h4>
                                    <span>The effectiveness of each type of Aria Windrider</span>
                                </div>
                            </div>
                            <div :class="tabState == 3 ? 'tab-content current' : 'tab-content'" id="tab-3">
                                <div class="moves-tab">
                                    <div class="moves-heading">
                                        <h4>DAMAGE</h4>
                                        <div class="moves-banner">
                                            Normal moves
                                        </div>
                                    </div>
                                    <div class="moves-content">
                                        <div class="moves-content-txt">
                                            <span>BASE DAMAGE</span>
                                            <h3>9000</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>DPS</span>
                                            <h3>4736.8</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>EPS</span>
                                            <h3>-13.2</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="moves-tab">
                                    <div class="moves-heading">
                                        <h4>pvp damage</h4>
                                    </div>
                                    <div class="moves-content">
                                        <div class="moves-content-txt">
                                            <span>BASE DAMAGE</span>
                                            <h3>0</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>DPS</span>
                                            <h3>0</h3>
                                        </div>
                                        <div class="moves-content-txt">
                                            <span>EPS</span>
                                            <h3>0</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-img-wrapper">
                        <div class="close-button" v-on:click="toggleModal()"><img src="../assets/images/heroicons-outline/x-mark.svg" alt=""></div>
                        <div class="modal-img-content">
                            <img src="../assets/images/Frame 1321315713.png" alt="">
                            <h2>Aria Windrider</h2>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</span>
                        </div>
                        <a href="#" class="button-yellow">Choose this character</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <Footer/> -->
</template>

<style scoped>
.mint-load {
    border-radius: 24px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(10px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 64px;
    margin-bottom: 24px;
}
.mint-load-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mint-load-header h4 {
    color: #304755;
    text-align: center;
    font-family: "Yellow Candy";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.mint-load-txt h5 {
    color: #304755;
    text-align: right;
    font-family: "Yellow Candy";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.mint-load-txt {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
.mint-progress {
    min-width: 100%;
    width: 100%;
    height: 16px;
    border-radius: 100px;
    background: rgba(48, 50, 61, 0.08);
}
.mint-progress-value {
    width: 100%;
    height: 100%;
    max-width: 625px;
    border-radius: 100px;
    background: linear-gradient(11deg, #2BA7B7 25.24%, #6ACFDC 110.34%);
}
.mint-load-txt span {
    color: rgba(48, 71, 85, 0.50);
    text-align: right;
    font-family: "Yellow Candy";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.moves-tab {
    border-radius: 32px;
    background: #FFF;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
}
.moves-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.moves-heading h4 {
    color: #304755;
    font-family: "Yellow Candy";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.moves-banner {
    border-radius: 100px;
    background: #2BA7B7;
    padding: 4px 10px;
    color: #FFF;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.moves-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.moves-content-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 120px;
}
.moves-content-txt span {
    color: rgba(0, 73, 88, 0.80);
    text-align: center;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.moves-content-txt h3 {
    color: #30323D;
    text-align: center;
    font-family: "Artegra Soft Condensed";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.base-tab h4 {
    color: #304755;
    font-family: "Yellow Candy";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.base-content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
}
.base-content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
}
.base-content-wrapper span:nth-child(1) {
    color: #30323D;
    text-align: left;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    width: 72px;   
}
.base-content-wrapper span:nth-last-child(1) {
    color: #30323D;
    text-align: right;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    width: 48px;   
}
.base-progress {
    height: 10px;
    width: 100%;
    max-width: 320px;
    position: relative;
    border-radius: 100px;
    background: rgba(48, 50, 61, 0.08);
}
.red-value{
    border-radius: 100px;
    background: #FB6C6C;
    height: 10px;
    width: 100%;
    position: absolute;
    left: 0;
}
.green-value{
    border-radius: 100px;
    background: rgba(71, 209, 178, 1);
    height: 10px;
    width: 100%;
    position: absolute;
    left: 0;
}
.red-value.value-1{
    max-width: 140px;
}
.green-value.value-2{
    max-width: 230px;
}
.red-value.value-3{
    max-width: 160px;
}
.green-value.value-4{
    max-width: 250px;
}
.green-value.value-5{
    max-width: 250px;
}
.red-value.value-6{
    max-width: 150px;
}
.green-value.value-7{
    max-width: 260px;
}
.base-tab {
    border-radius: 32px;
    background: #FFF;
    padding: 24px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction:column;
    align-items: flex-start;
    gap: 16px;
}
.modal-tab {
    border-radius: 48px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(100px);
    padding: 24px;
    min-width: 572px;
    min-height: 100%;
}
.modal-tab-btn {
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.20);
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
}
.modal-tab-btn button {
    display: flex;
    width: 117px;
    padding: 10px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;
    background: transparent;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
    border: none;
    border-radius: 100px;
    cursor: pointer;
}
.modal-tab-btn button.current {
    background: #FFF;
    box-shadow: 0px -8px 8px 0px rgba(128, 222, 234, 0.50) inset;
    color: #006277;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
}
.tab-content {
    display: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 32px;
}
.tab-content.current {
    display: flex;
}
.about-tab {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    width: 100%;
    border-radius: 32px;
    background: #FFF;
    padding: 24px;
}
.about-tab h4 {
    color: #304755;
    font-family: "Yellow Candy";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}
.about-tab-txt-wrapper {
    display: flex;
    justify-content: flex-start;
    gap: 56px;
    align-items: flex-start;
    width: 100%;
}
.about-tab-txt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}
.about-tab-txt-left h5 {
    color: rgba(0, 73, 88, 0.80);
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 72px;
}
.about-tab-txt-left span {
    color: #30323D;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.about-tab-txt-right h5 {
    color: rgba(0, 73, 88, 0.80);
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 56px;
}
.about-tab:nth-child(2) .about-tab-txt-right h5 {
    width: 90px;
}
.about-tab-txt-right span {
    color: #30323D;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.about-tab-txt-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    width: 220px;
}
.about-tab-txt-right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
}
/* .trigger{
      text-align: center;
    padding: 7px 13px;
    background: #3e3e3e;
    color: #fff;
    font-size: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: cursive;
    cursor: pointer;
} */

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(71, 141, 154, 0.30);
    backdrop-filter: blur(25px);
    /* opacity: 0;
    visibility: hidden; */
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
   
}
.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: white; */
    padding: 1rem 1.5rem;
    width: 24rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: stretch;
}
@media only screen and (max-width: 767px) {
    .modal-content {
        flex-direction: column-reverse;
    }
    .modal-tab {
        width: 100%;
        min-width: 100%;
        padding: 20px 16px;
        display: none;
    }
    .modal-img-wrapper {
        padding: 20px;
        height: unset !important;
    }
    .modal-img-content img {
        max-width:120px !important ;
    }
    .modal-img-content h2 {
        font-size: 24px !important;
    }
    .modal-img-content span {
        width: 100% !important;
        font-size: 14px !important;
    }
    .modal-tab-btn button {
        width: fit-content;
        padding: 10px 24px;
    }
    .about-tab-txt-wrapper {
        flex-direction: column;
    }
    .about-tab {
        padding: 20px;
    }
    .about-tab h4 {
        font-size: 18px;
    }
    .about-tab-txt-left h5 {
        font-size: 14px !important;
    }
}
.modal-img-wrapper {
    border-radius: 48px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(100px);
    position: relative;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    width: fit-content;
    height: 560px;
}
.modal-img-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.modal-img-content img {
    max-width: 200px;
}
.modal-img-content h2 {
    color: #304755;
    text-align: center;
    font-family: "Yellow Candy";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 8px;
}
.modal-img-content span {
    color: rgba(48, 50, 61, 0.80);
    text-align: center;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 350px;
}
.modal-img-wrapper a {
    width: 100%;
}
.close-button {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    text-align: center;
    cursor: pointer;
    border-radius: 100px;
    padding: 12px;
    background: linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(358deg, #FB0 21.69%, #FFEEC0 120.62%);
    box-shadow: 0px -8px 8px 0px rgba(128, 222, 234, 0.50) inset;
}
.close-button:hover {
    background-color: darkgray;
}
/* .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
} */


.sec-hero-mint {    
    /* background-image: url('../assets/images/Mint.png'); */
    background-position: bottom center;
    background: linear-gradient(180deg, rgb(77, 150, 164) 0%, rgba(112,226,247,1) 60%, rgba(255,255,255,1) 100%);
    background-size: cover;
    background-repeat: no-repeat;
    /* height: 100vh; */
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
    border: none;
    cursor: pointer;
}
.card-slider-button button {
    width: 100%;
}
</style>

