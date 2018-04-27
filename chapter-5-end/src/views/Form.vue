<template>
  <div class="form-wrapper">
    <div class="text-xs-center" v-if="submitted">
      <h2>Thank you for your interest, we will contact you soon</h2>
      <div class="details text-xs-left">
        <h3>Customer details:</h3>
        <p><strong>Name:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Phone:</strong> {{phone}}</p>
      </div>
      <v-btn to="/">Go to homepage</v-btn>
    </div>
    <v-form v-else class="text-xs-center" v-model="valid">
      <v-text-field v-model="name" required
                    label="Name" :rules="nameRules"></v-text-field>
      <v-text-field v-model="email"
                    required :rules="emailRules"
                    label="E-mail"></v-text-field>
      <v-text-field v-model="phone"
                    required mask="(###) ### - ####"
                    :rules="phoneRules"
                    label="Phone"></v-text-field>
      <v-btn @click="submit" :disabled="!valid">
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      submitted: false,
      name: '',
      email: '',
      phone: null,
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length > 2 || 'Name must be more than 2 characters',
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
      phoneRules: [
        v => !!v || 'Phone is required',
        v => v.length >= 7 || 'Phone must be at least 7 digits',
      ],
    };
  },
  methods: {
    ...mapActions(['clearFavorites']),
    submit() {
      this.clearFavorites();
      this.submitted = true;
    },
  },
};
</script>


<style scoped>
  .form-wrapper {
    padding: 40px;
  }

  .details {
    padding-top: 30px;
  }

  h3 {
    padding-bottom: 20px;
  }
</style>
