<template>
  <v-container class="carousel">
    <div class="carousel_container">
      <template>
        <v-carousel id="carousel_component"
            hide-delimiters
            cycle
            show-arrows-on-hover>
          <v-carousel-item class="carousel_item"
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"

          >

            <v-row
                @mouseover="hoverIn()"
                @mouseout="hoverOut()"
                class="fill-height"
                align="center"
                justify="center"
            >
              <div class="display-3">
                <p class="carousel_title">
                  {{ item.title }}
                </p>
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </template>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Carousel',
  data: () => ({
    bgColor: 'rgba(255,255,255,0.15)',
      items: [
        {
          src: require('../assets/pearshape.png'),
          title: 'Exquisite Cutting'
        },
        {
          src: require('../assets/hex.png'),
          title: 'One of a kind',
        },
        {
          src: require('../assets/bluehex.png'),
          title: 'Unbeatable Prices'
        },
        {
          src: require('../assets/oval.png'),
          title: 'Ethically Sourced'

        },
      ]
  }),
  methods: {
    hoverIn() {

    },
    hoverOut() {
    }
  }
}

</script>
