<template>
  <div>
    <v-list>
      <v-subheader v-if="!favorites.length">Your favorites list is empty</v-subheader>
      <div v-else class="text-xs-center">
        <v-subheader>Your Favorites</v-subheader>
        <v-list-item v-for="dog in favorites" :key="dog.name" @click="{}">
          <v-list-item-avatar>
            <img :src="dog.img" />
          </v-list-item-avatar>
          <v-list-item-content>{{dog.name}}</v-list-item-content>
          <v-list-item-action>
            <v-icon @click="removeFromFavorites(dog)">delete</v-icon>
          </v-list-item-action>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  },
  methods: {
    ...mapActions(["removeFromFavorites"])
  }
};
</script>