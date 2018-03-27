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
import axios from 'axios';
import Dogs from '../data/dogs';

axios.defaults.baseURL = 'https://dog.ceo/api';
export default {
  data() {
    return {
      dogs: Dogs,
    };
  },
  created() {
    this.dogs.forEach((dog) => {
      dog.img = '';
    });
    const linksArray = this.dogs.map(
      dog => `/breed/${dog.breed}/images/random`,
    );
    axios.all(linksArray.map(link => axios.get(link))).then(
      axios.spread((...res) => {
        this.dogs.forEach((dog, index) => {
          dog.img = res[index].data.message;
        });
      }),
    );
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
