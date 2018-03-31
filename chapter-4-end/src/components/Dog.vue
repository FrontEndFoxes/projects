<template>
  <v-card color="grey lighten-2">
    <v-card-media :src="dog.img" height="170px">
    </v-card-media>
    <v-card-title>
      <div>
        <h3>{{dog.name}}</h3>
        <p class="breed">{{dog.breed}}</p>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn @click="$emit('addToCart', dog)">Add to Cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    dog: Object,
  },
};
</script>

<style scoped>
  p {
    margin: 0;
  }

  .breed {
    text-transform: capitalize;
  }
</style>
