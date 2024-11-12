<template>
    <div class="text-container" align="left" style="margin: 40px 98px 30px 98px">
        <h2 style="padding-bottom:20px ; ">Evinizi aksesuarlarla süsleyerek yeni yılın gelişini kutlayın</h2>
        <p style="padding-bottom:15px ;font-size: 0.85rem;">Yeni yıl için evinizi dekore etmenin tam zamanı! Yılbaşı dekorasyonuna 
                                                            oturma odanıza çam ağacı kurarak başlayabilirsiniz. Aynı zamanda yemek
                                                            masanızın üzerine şamdanlar ekleyebilir, duvarınıza bir duvar dekorasyonu 
                                                            asabilir veya pencerenizden bile gözüken bir abajuru da sergileyebilirsiniz.
                                                            Yeni yılın gelişini aileniz ile birlikte evinizi dekore ederek başlayabilirsiniz.</p>
        <v-btn rounded="xl" variant="outlined" class="text-none hovering">
            Tüm dekorasyon ürünlerini inceleyin
        </v-btn>
    </div>

    <div class="images-container">
        <v-row>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../../assets/dekorasyon-imgs/strala-abajur-basligi.png" alt="" style="height: 250px;width: 300px;margin-left: 98px;">
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../../assets/dekorasyon-imgs/vinterfint-hediye-paketi-kagidi.png" alt="" style="height: 400px;width: 300px; margin-left: 98px;">
                </div>
            </v-col>
            <v-col cols="3">
                <div class="image-parent" style="position: relative;">
                    <img src="../../assets/dekorasyon-imgs/hauga-mutfak-masasi.png" alt="" style="height: 400px;width: 300px; margin-left: 75px;">
                </div>
                <div class="image-parent" style="position: relative;">
                    <img src="../../assets/dekorasyon-imgs/vinterfint-dekoratif-aksesuar.png" alt="" style="height: 250px;width: 300px; margin-left:75px">
                </div>
            </v-col>
            <v-col cols="6" md="6">
                <div class="image-parent">
                    <img src="../../assets/dekorasyon-imgs/hyltarp-2-li-kanepe.png" alt="" style="width: 85%; height: auto; object-fit: cover;">
                    <div class="info-box">
                        <h3>HYLTARP</h3>
                        <h4>2'li kanepe, hallarp beyaz</h4>
                        <h3>21.999₺</h3>
                        <v-btn 
                        rounded="xl" 
                        size="large" 
                        class="text-none"
                        base-color=#0058a3
                        style="font-weight: 500;"
                        ><img src="../../assets/add-to-basket.png" style="height: 24px;width: 24px;">Sepete Ekle</v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>

    <div class="yilbasi-container" align="left" style="margin: 70px 98px 30px 98px">
        <h2 style="padding-bottom:20px ;margin-bottom: 40px ">Yılbaşı hediye önerileri</h2>
        <v-row class="boxes" justify="space-between" align="center" style="gap: 0px; margin-left: 0px;margin-right: -45px; ">
            <v-col
                cols="auto"
                class="inner-box"
                :class="{ 'hovered': hoveredBox ===1 }"
                @mouseover="hoveredBox = 1"
                @mouseleave="hoveredBox = null"
                style="background-color: #ab1818; height: 260px; width: 380px;"
                >
                <div>
                500 TL Altı Yılbaşı dekorasyon <br> ürünleri
                </div>
                <div style="padding-top: 20px;">
                <v-btn size="x-large" icon="mdi-arrow-right"></v-btn>
                </div>
            </v-col>

            <v-col
                cols="auto"
                class="inner-box"
                :class="{ 'hovered': hoveredBox ===2 }"
                @mouseover="hoveredBox = 2"
                @mouseleave="hoveredBox = null"
                style="background-color: #0f4811; height: 260px; width: 380px;"
                >
                <div>
                1.000 TL Altı Yılbaşı dekorasyon <br> ürünleri
                </div>
                <div style="padding-top: 20px;">         
                    <v-btn size="x-large" icon="mdi-arrow-right"></v-btn>               
                 </div>    
            </v-col>

            <v-col
                cols="auto"
                class="inner-box"
                :class="{ 'hovered': hoveredBox ===3 }"
                @mouseover="hoveredBox = 3"
                @mouseleave="hoveredBox = null"
                style="background-color: #ab1818; height: 260px; width: 380px;"
                >
                <div>
                1.500 TL Altı Yılbaşı dekorasyon <br> ürünleri
                </div>
                <div style="padding-top: 20px;">
                    <v-btn size="x-large" icon="mdi-arrow-right"></v-btn>                
                </div>
            </v-col>
        </v-row>

    </div>
   
</template>

<script>

export default {
    data() {
        return {
            hoveredBox: null
        };
    }
}
</script>

<style>

.text-container , .yilbasi-container{
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    color: #242424;
}

.image-parent {
    position: relative;
}

.info-box {
    position: absolute;
    bottom: 0;
    left: 0;
    width: fit-content;
    padding: 10px;
    margin-left: 230px;
    color: #fff;
    text-align: center;
    font-family: 'Noto IKEA Latin Regular', sans-serif;
}

.info-box h3,
.info-box h4 {
    margin: 5px 0;
}

.boxes {
    color: white;
    text-align: left;
}

.inner-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-weight: 600;
  font-size: 23px;
  padding-left: 50px;
  padding-top: 40px;
  line-height: 40px;
  transition: text-decoration 0.3s;
}

.inner-box.hovered {
    text-decoration: underline;
    cursor: pointer;
}

</style>