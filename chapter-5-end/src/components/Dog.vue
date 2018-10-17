<template>
  <v-card color="grey npm devlighten-2">
    <v-img :src="dog.img" height="170px">
    </v-img>
    <v-card-title>
      <div>
        <h3>{{dog.name}}</h3>
        <p class="breed">{{dog.breed}}</p>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn @click="$emit('addToFavorites', dog)">Add to Cart</v-btn>
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
