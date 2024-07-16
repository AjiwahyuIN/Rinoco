
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
                        <a href="#" class="btn-details trigger">Details</a>
                        <a href="#" class="button-yellow">Adopt This</a>
                    </div>
                </div>
            </div>
            <div class="modal">
                <div class="modal-content">
                    <div class="modal-tab">
                        <div id="tabs" class="modal-tab-btn">
                            <button class="current" data-tab="tab-1">About</button>
                            <button data-tab="tab-2">Base Stats</button>
                            <button data-tab="tab-3">Moves</button>
                        </div>
                        <div class="modal-tab-content">
                            <div class="tab-content current" id="tab-1">
                                <div class="about-tab">
                                    tab 1
                                </div>
                            </div>
                            <div class="tab-content" id="tab-2">
                                <span>tab 2</span>
                            </div>
                            <div class="tab-content" id="tab-3">
                                <span>tab 3</span>
                            </div>
                        </div>

                    </div>
                    <div class="modal-img-wrapper">
                        <div class="close-button"><img src="../assets/images/heroicons-outline/x-mark.svg" alt=""></div>
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
    <Footer/>
</template>

<style scoped>
.modal-tab {
    border-radius: 48px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(100px);
    padding: 24px;
    min-width: 572px;
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
    font-weight: 400;
    line-height: 20px; /* 125% */
    border: none;
    border-radius: 100px;
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
}
.tab-content.current {
    display: flex;
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
    opacity: 0;
    visibility: hidden;
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
    align-items: flex-start;
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
    gap: 50px;
    width: fit-content;
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
.show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}


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

<script>

$(document).ready(()=>{
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


$('#tabs button').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('#tabs button').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
})

});

</script>
