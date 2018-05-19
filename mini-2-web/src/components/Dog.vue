<template>
  <v-card class="dog-card">
    <v-card-media
      height="150px"
      :src="dog"></v-card-media>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('remove')">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    dog: {
      type: String,
    },
  },
};
</script>
