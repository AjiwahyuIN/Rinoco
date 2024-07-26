<template>
    <section class="sec-banner">
        <div class="container">
            <div class="banner">
                <div class="top-banner">
                    <img src="../assets/images/kon.png" alt="" width="112px">
                    <img src="../assets/images/kon.png" alt="" width="112px">
                </div>
                <div class="banner-content">
                    <span data-aos="fade-up" data-aos-duration="400">Check if your wallet is registered in our system</span>
                    <form action="" data-aos="fade-up" data-aos-duration="800">
                        <input type="text" placeholder="Enter wallet here...">
                        <button type="submit">Enter</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.sec-banner {
    background: #fff;
}
.banner {
    width: 100%;
    padding-block: 80px;
}
.top-banner {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.banner-content {
    border-radius: 48px;
    padding: 80px 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background:url("../assets/images/Bg.svg"), #6ACEE0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% ;
}
.banner-content span {
    color: #004958;
    font-family: "Artegra Soft Condensed";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.banner-content form {
    padding: 12px 24px;
    background: #fff;
    border-radius: 100px;
    width: 646px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.banner-content form input {
    height: 30px;
    background: #fff;
    border: none;
    width: 100%;
}
.banner-content form button {
    border-radius: 100px;
    background: linear-gradient(11deg, #2BA7B7 25.24%, #6ACFDC 110.34%);
    padding: 12px 24px;
    border: none;
    color: #FFF;
    font-family: "Artegra Soft Condensed";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
}
.banner-content form input:active {
    border: none;
}
.banner-content form input::placeholder {
    color: rgba(6, 60, 50, 0.50);
font-family: "Artegra Soft Condensed";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

@media only screen and (max-width: 767px) {
    .banner-content span {
    font-size: 20px;
    text-align: center;
    }
  .banner-content form {
    width: 100%;
    /* width: 280px; */
    margin: 0 auto;
  }
  .banner {
    padding-block: 40px;
  }
  .banner-content {
    padding: 20px 20px;
  }
  .banner-content form input::placeholder {
    font-size:16px ;
  }
  .banner-content form button {
    font-size: 16px;
    padding: 12px 20px;
  }
  .top-banner img {
    max-width: 80px;
  }
  .top-banner {
    max-width: 85%;
  }
}
</style>