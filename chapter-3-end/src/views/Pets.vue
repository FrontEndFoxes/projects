<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <app-dog :dog="pet"></app-dog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { Dogs } from '../data/dogs';
import Dog from '../components/Dog';

axios.defaults.baseURL = 'https://dog.ceo/api';
export default {
  components: {
    appDog: Dog,
  },
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
