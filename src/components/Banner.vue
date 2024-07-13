<template>
    <div class="banner">
        <div class="top-banner">
            <img src="../assets/images/kon.png" alt="" width="112px">
            <img src="../assets/images/kon.png" alt="" width="112px">
        </div>
        <div class="banner-content">
            <span>Check if your wallet is registered in our system</span>
            <form action="">
                <input type="text" placeholder="Enter wallet here...">
                <button type="submit">Enter</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
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
    font-weight: 400;
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
    font-weight: 400;
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
font-weight: 400;
line-height: normal;
}
</style>