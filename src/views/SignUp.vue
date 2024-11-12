<template>
    <div class="main-container" absolute>
        <v-row>
            <v-col cols="5">
                <h1 class="hej-class">Hej!</h1>
                <p style="font-size: 1rem;">İsveççe "Merhaba" demektir.</p>
                <h2 style="line-height: 130px;">Üye Girişi</h2>
                
                <div class="form-group">
                    <v-label for="username" class="ok">E-Posta Adresi</v-label>
                    <v-text-field
                    placeholder="E-Posta Adresi"
                    type="email"
                    variant="outlined"
                    class="email-box custom-border"
                    ></v-text-field>
                </div>
                </v-col>
                <v-slider thumb-size="0" thumb-color=#000000 disabled track-size=0.1 direction="vertical"></v-slider>

            <v-col cols="6">
                <div class="header"> <h3>Henüz üye değil misiniz?</h3> </div>
                <div class="body">
                    <p>İnternet sitemize üye olun, iyi tasarımlı, kullanışlı ve kaliteli binlerce
                        mobilya ve ev aksesuarı alışverişinizi kolayca ve hızla tamamlayın.
                        IKEA üyeliğiniz ile siparişlerinizi ve kuponlarınızı takip edebilir,
                        oluşturduğunuz favori listelerini kaydedip e-posta ile gönderebilir,
                        IKEA’daki yenilik ve kampanyalardan haberdar olabilirsiniz.</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap');

.main-container {
    text-align: left;
    margin-left: 13%;
    margin-top: 60px;
    font-family: 'Noto IKEA Latin Regular', sans-serif;
    color: #242424;
}

.hej-class {
    font-size: 2.3rem;
}

.ok {
    font-size: 15px;
    line-height: 40px;
    color: #141414;
    font-weight: bold;
}

.email-box {
    width: 100%;
}


</style>