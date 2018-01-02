<template>

  <v-layout row justify-center>
    <v-flex xs12 md8 >

      <panel title="Support">
        <v-form v-model="valid" ref="form" lazy-validation>

          <v-text-field type="text" v-model="name" label=" Name (optional)"></v-text-field>

          <v-text-field type="text" v-model="company" label=" Company Name (optional)"></v-text-field>

          <v-text-field type="text" v-model="phone" single-line label="Phone Number (optional)"></v-text-field>

          <v-select v-bind:items="items" v-model="subject" label="Subject" required :rules="[v => !!v || 'Please select a subject !']" item-value="text"></v-select>

          <v-text-field type="text" v-model="message" required :rules="[v => !!v || 'You cannot send an empty message !']" label="Message" multi-line></v-text-field>

        </v-form>
      </panel>

      <v-alert class="ml-4" icon="warning" :value="error" transition="scale-transition" error>
        {{error}}
      </v-alert>

      <v-btn dark class="green darken-2" @click="send">Send
      </v-btn>

      <v-btn dark class="grey darken-3" @click="clear">
        clear form
      </v-btn>
      <div>
        <v-progress-circular indeterminate v-bind:size="size" color="primary"></v-progress-circular>
      </div>
      <v-snackbar :timeout="timeout" :color="color" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="snackbar">
        {{ text }}
        <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-flex>

  </v-layout>

</template>

<script>
import UsersService from "@/services/UsersService";
import EmailService from "@/services/EmailService";
export default {
  data() {
    return {
      user: "",
      name: "",
      company: "",
      error: null,
      phone: "",
      message: "",
      msg: "",
      snackbar: false,
      color: "green",
      mode: "",
      timeout: 6000,
      text: "Your message has been sent",
      valid: true,
      size: "0",
      subject: "",

      items: [
        { text: "Issues with a product" },
        { text: "Issues with a website" },
        { text: 'Missing product in "My products"' },
        { text: "Others" }
      ]
    };
  },

  methods: {
    async send() {
      this.error = null;
      this.snackbar = false;

      if (!this.$refs.form.validate()) {
        this.error = "Please fill in all the required fields";
        return;
      }
      try {
        this.size="50"
        if (this.$refs.form.validate()) {
          await EmailService.post({
            name: this.name || "Not defined",
            company: this.company || "Not defined",
            email: this.$store.state.user.email || null,
            phone: this.phone || "Not defined",
            subject: this.subject,
            message: this.message
          });
        }

        this.$refs.form.reset();
        this.snackbar = true;
        this.size = "0";
        // setTimeout( () => this.$router.push({ path: '/'}), 2000);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>

</style>