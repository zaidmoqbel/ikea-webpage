<template>
  <div class="home">
    <UpperBanner />
    <YilBasi />
    <VinterFint />
    <YeniYil />
    <EvAksesuar />
    <KeyifliBulusmalar />
    <YemekOda />
    <YeniUrun />
    <RengaRenk />
    <HizmetLer />

  </div>
</template>

<script>
import YilBasi from '@/components/home_page/YilBasi.vue';
import UpperBanner from '@/components/home_page/UpperBanner.vue';
import VinterFint from '@/components/home_page/VinterFint.vue';
import YeniYil from '@/components/home_page/YeniYil.vue';
import EvAksesuar from '@/components/home_page/EvAksesuar.vue';
import KeyifliBulusmalar from '@/components/home_page/KeyifliBulusmalar.vue';
import YemekOda from '@/components/home_page/YemekOda.vue';
import YeniUrun from '@/components/home_page/YeniUrun.vue';
import RengaRenk from '@/components/home_page/RengaRenk.vue';
import HizmetLer from '@/components/home_page/HizmetLer.vue';

export default {
  name: 'HomeView',
  components: {
    UpperBanner, 
    YilBasi, 
    VinterFint, 
    YeniYil,
    EvAksesuar,
    KeyifliBulusmalar,
    YemekOda,
    YeniUrun,
    RengaRenk,
    HizmetLer,
    
  }
}
</script>
