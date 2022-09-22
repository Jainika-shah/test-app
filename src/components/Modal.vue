<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>

      <form @submit.prevent="onSubmit">
        <input type="text" v-model="user.first_name" placeholder="first name" />
        <input type="text" v-model="user.last_name" placeholder="last name" />
        <input type="email" v-model="user.email" placeholder="email" />
        <button class="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>



<script>
export default {
  name: "Modal",
  props: {
    payload: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
      },
    };
  },
  mounted() {
    if (this.payload) {
      this.user = {
        first_name: this.payload.first_name,
        last_name: this.payload.last_name,
        email: this.payload.email,
      };
    }
  },
  methods: {
    onSubmit() {
      this.$emit("onSave", this.user);
    },
    closeModal() {
        this.user= {
        first_name: "",
        last_name: "",
        email: "",
      },
      this.$emit("onClose");
    },
  },
};
</script>