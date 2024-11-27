<template>
    <div class="main-container" absolute>
        <v-row>
            <v-col cols="5">
                <h1 class="hej-class">Hej!</h1>
                <p style="font-size: 1rem;">İsveççe "Merhaba" demektir.</p>
                <h2 style="line-height: 130px;">Üye Girişi</h2>
                
                <div class="form-group">
                    <v-label for="username" class="fill-box">E-Posta Adresi</v-label>
                    <v-text-field
                    placeholder="E-Posta Adresi"
                    type="email"
                    variant="outlined"
                    class="email-box custom-border"
                    :error-messages="emptyEmail"
                    ></v-text-field>
                </div>

                <div class="form-group">
                    <v-label for="password" class="fill-box">Şifre</v-label>
                    <span class="fill-box" style="margin-left: 220px; color: #0058a3;font-weight: 200;">Şifremi Unuttum</span>
                    <v-text-field
                    placeholder="Şifre"
                    type="password"
                    variant="outlined"
                    class="email-box custom-border"
                    :error-messages="emptyPassword"
                    ></v-text-field>

                    <v-checkbox
                        color=#0058a3
                        label="Beni Hatırla"
                        value="Beni Hatırla"
                    ></v-checkbox>  
                </div>
                
                    <!-- reCaptcha will be inserted here -->


                    <v-btn 
                    rounded="xl" 
                    size="large" 
                    style="width: 384.656px; margin-bottom: 150px;height: 54px;" 
                    class="text-none " 
                    color="#0058a3" dark
                    type="submit"
                    @click="onSubmit"
                    >Giriş Yap</v-btn>

                </v-col>
                
                <v-slider thumb-size="0" thumb-color=#000000 disabled track-size=2 direction="vertical"></v-slider>

            <v-col cols="6" style="margin-left: 60px; margin-top: 70px;">
                <div class="header" style="line-height: 100px; font-weight: bolder; font-size: 0.9rem; color: black; "> <h2>Henüz üye değil misiniz?</h2> </div>
                <div class="body" >
                    <p style="width: 395px; margin-bottom: 25px">İnternet sitemize üye olun, iyi tasarımlı, kullanışlı ve kaliteli binlerce
                        mobilya ve ev aksesuarı alışverişinizi kolayca ve hızla tamamlayın.
                        IKEA üyeliğiniz ile siparişlerinizi ve kuponlarınızı takip edebilir,
                        oluşturduğunuz favori listelerini kaydedip e-posta ile gönderebilir,
                        IKEA’daki yenilik ve kampanyalardan haberdar olabilirsiniz.</p>
                </div>
                <v-btn rounded="xl" size="large" style="width: 384.656px;height: 54px;" class="text-none " color="#0058a3" dark>Üye Ol</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            emptyEmail: '',
            emptyPassword: ''
        };
    },
    methods: {
        onSubmit() {
           this.emptyEmail = '';
           this.emptyPassword = '';

           const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if (!this.email) {
            this.emptyEmail = 'Bu alanın doldurulması zorunludur.';
           } else if (!emailPattern.test(this.email)){
            this.emptyEmail = 'Lütfen geçerli bir e-posta adresi giriniz.'
           }
           if (!this.password) {
            this.emptyPassword = 'Bu alanın doldurulması zorunludur.';
           }

        }
    }
}
</script>

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

.fill-box {
    font-size: 15px;
    line-height: 45px;
    color: #141414;
    font-weight: bold;
}

.email-box {
    width: 85%;
}


</style>