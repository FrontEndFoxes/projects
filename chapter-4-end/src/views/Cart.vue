<template>
<div>
  <v-list>
    <v-subheader v-if="!cart.length">Your cart is empty</v-subheader>
    <div v-else class="text-xs-center">
      <v-subheader>Your cart</v-subheader>
      <v-list-tile avatar v-for="dog in cart" :key="dog.name" @click="{}">
        <v-list-tile-avatar>
          <img :src="dog.img">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="dog.name"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon @click="removeFromCart(dog)">delete</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </div>
  </v-list>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    ...mapActions(["removeFromCart"])
  }
};
</script>
