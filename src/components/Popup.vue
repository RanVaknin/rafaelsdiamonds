<template>
  <div>
    <v-btn @click.prevent="show"
        outlined
        color="TEAL"
    >See more info
    </v-btn>
    <modal name="popup">
      {{gem.src}}
    </modal>
  </div>
</template>

<script>
  export default{
    name: 'Popup',
    methods: {
      show () {
        this.$modal.show('popup');
      },
      hide () {
        this.$modal.hide('popup');
      },
      resolveUrl(){

      }
    },
    props: ['gem']
  }
</script>