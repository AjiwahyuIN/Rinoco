<script>
  export default{
    name: 'PopupList',
    data(){
        return{
            showModal: false,
            modalProgress: false,
            modalCongrats: false,
            modalCongrats2: false,
            tabState: 1
        }
    },
    methods: {
        toggleModal(){
            this.showModal = !this.showModal
        },
        toggleModalProgress(){
            this.modalProgress = !this.modalProgress
        },
        toggleModalCongrats(){
            this.modalCongrats = !this.modalCongrats
        },
        toggleModalCongrats2(){
            this.modalCongrats2 = !this.modalCongrats2
        },
        switchTab(state){
            this.tabState = state
        }
    }
  }
</script>

<template>
    <section class="sec-popup-list">
        <div class="container">
            <div class="modals-wrapper">
                <div class="modals-wrapper-btn">
                    <button class="btn-confirm-modal trigger" v-on:click="toggleModal()" >Confirm</button>
                    <button class="btn-confirm-modal trigger" v-on:click="toggleModalProgress()" >progress</button>
                    <button class="btn-confirm-modal trigger" v-on:click="toggleModalCongrats()" >congrats</button>
                    <button class="btn-confirm-modal trigger" v-on:click="toggleModalCongrats2()" >congrats 2</button>
                </div>
                <div class="modal">
                    <div class="modal-content">
                        <div class="modals-content">
                            <div class="confirm-modal" v-if="showModal">
                                <div class="close-button" v-on:click="toggleModal()"><img src="../assets/images/heroicons-outline/x-mark.svg" alt=""></div>
                                <div class="modal-img-content">
                                    <img src="../assets/images/Frame 1321315713.png" alt="">
                                    <h2>confirm adopt</h2>
                                    <span>Are you sure you want to adopt this Rinoco?</span>
                                </div>
                                <div class="btn-modals-wrapper">
                                    <a href="#" class="button-white">Cancel</a>
                                    <a href="#" class="button-yellow">Adopt</a>
                                </div>
                            </div>
                            <div class="confirm-modal modal-progress" v-if="modalProgress">
                                <div class="close-button" v-on:click="toggleModal()"><img src="../assets/images/heroicons-outline/x-mark.svg" alt=""></div>
                                <div class="modal-img-content">
                                    <img class="modal-progress-img" src="../assets/images/Frame 1321315713.png" alt="">
                                    <h2>Adoption in progress</h2>
                                    <span>Don’t close this page untill this Rinoco successfully adopted</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-value">
                                        <span>50%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="confirm-modal" v-if="modalCongrats">
                                <img class="bg-modal" src="../assets/images/bg-modal.svg" alt="">
                                <div class="close-button" v-on:click="toggleModalCongrats()"><img src="../assets/images/heroicons-outline/x-mark.svg" alt=""></div>
                                <div class="modal-img-content">
                                    <img src="../assets/images/check.png" alt="">
                                    <h2>Congratulations! 🎉</h2>
                                    <span>You've successfully adopted your Rinoco. Welcome Aria Windrider to your list!</span>
                                </div>
                                <div class="btn-modals-wrapper">
                                    <a href="#" class="button-white">View my list</a>
                                    <a href="#" class="button-yellow">See another Rinoco</a>
                                </div>
                            </div>
                            <div class="confirm-modal" v-if="modalCongrats2">
                                <img class="bg-modal" src="../assets/images/bg-modal.svg" alt="">
                                <div class="close-button" v-on:click="toggleModalCongrats2()"><img src="../assets/images/heroicons-outline/x-mark.svg" alt=""></div>
                                <div class="modal-img-content">
                                    <img src="../assets/images/Frame 1321315713.png" alt="">
                                    <h2>Congratulations! 🎉</h2>
                                    <span>You've successfully adopted your Rinoco. Welcome Aria Windrider to your list!</span>
                                </div>
                                <div class="btn-modals-wrapper">
                                    <a href="#" class="button-white">View my list</a>
                                    <a href="#" class="button-yellow">See another Rinoco</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.modals-wrapper-btn {
    position: relative;
    z-index: 1;
}
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
.sec-popup-list {
    background-position: bottom center;
    background: linear-gradient(180deg, rgb(77, 150, 164) 0%, rgba(112,226,247,1) 60%, rgba(255,255,255,1) 100%);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    margin-top: -100px;
    padding-top: 140px;
}
.confirm-modal {
    border-radius: 48px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(100px);
    width: 480px;
    padding: 24px;
    position: relative;
}
.bg-modal {
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
}
.modal-progress {
    width: 770px;
}
.modal-progress-img {
    width: 120px;
}
.progress {
    width: 100%;
    height: 48px;
    border-radius: 100px;
    background: rgba(48, 50, 61, 0.08);
    margin-top: 40px;
}
.progress-value {
    border-radius: 100px;
    background: linear-gradient(11deg, #FB0 25.24%, #FFEEC0 110.34%);
    width: 100%;
    height: 100%;
    max-width: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.progress-value span {
    color: #FFF;
    font-family: "Artegra Soft Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
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
    position: relative;
    z-index: 2;
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
    font-weight: 600;
    line-height: normal;
    width: 350px;
}
.btn-modals-wrapper a {
    margin-top: 40px;
    width: 100%;
}
.close-button {
    position: absolute;
    z-index: 3;
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
.btn-modals-wrapper {
    width: 100%;
    display: flex;
    gap: 8px;
}
</style>

