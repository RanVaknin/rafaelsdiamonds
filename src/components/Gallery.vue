<template>
  <v-container class="gallery">

    <div class="text_container">
      <h2 class="text-center">Gallery</h2>
      <h2 class="text_underline"></h2>
    </div>

    <v-row>


      <v-col
          v-for="n in this.items"
          :key="n"
          class="d-flex child-flex"
          cols="3"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="overlay_container" elevation="0"
            >
        <v-img
            :src="`${n.src}`"
            :lazy-src="`${n.src}`"
            aspect-ratio="1.6"
            class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>

              <v-fade-transition>
                <v-overlay
                    v-if="hover"
                    absolute
                    color="#000000C1"
                >
                  <v-btn
                  outlined
                  color="TEAL"
                  >See more info</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Gallery',

  data: () => ({
    items: [
      {
        src: require('../assets/glow_pear.jpg')
      },
      {
        src: require('../assets/blue_hex.jpg')
      },
      {
        src: require('../assets/freeform.jpg')
      },
      {
        src: require('../assets/emerald.jpg')
      },
      {
        src: require('../assets/montana_cushion.jpg')
      },
      {
        src: require('../assets/small_emerald.jpg')
      },
    ]
  })
}

</script>
