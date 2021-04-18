<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="white"
    >
      <Header/>
    </v-app-bar>

    <v-content>
      <div class="content">
        <Carousel/>
        <div class="gallery_container">
        <Gallery/>
        </div>
      </div>
    </v-content>

    <v-main>
    </v-main>
    <v-footer class="footer_container">
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Carousel from './components/Carousel';
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


export default {
  name: 'App',

  components: {
    Gallery, Header, Carousel,Footer
  },


  data: () => ({
    //
  }),
};
</script>
