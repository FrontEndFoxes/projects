<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="dog in dogs" :key="dog.breed">
        <v-card color="grey lighten-2">
          <v-card-media :src="dog.img" height="170px">
          </v-card-media>
          <v-card-title>
            <div>
              <h3>{{dog.name}}</h3>
              <p class="breed">{{dog.breed}}</p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Dogs from '../data/dogs';

export default {
  data() {
    return {
      dogs: Dogs,
    };
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
