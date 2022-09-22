<template>
  <div>
    <Modal v-if="showModal" :payload="payload" @onSave="onSave" @onClose="onClose" />
    <h2>Test App</h2>
    <button @click="openModal(false)">Add Item</button>
    <Users v-if="isDataLoaded" @openModal="openModal" />
  </div>
</template>

<script>
import axios from "axios";
import Modal from "./Modal.vue";
import Users from "./Users.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Modal,
    Users
  },
  data() {
    return {
      isDataLoaded: false,
      showModal: false,
      userId: null,
      payload: null
    };
  },
  computed: {
    ...mapState({
      isEditModal: state => state.app.toggleEditModal
    }),
  },
  async mounted() {
    await axios.get("https://reqres.in/api/users?page=2").then((res) => {
      this.isDataLoaded = true;
      this["app/setUserList"](res.data.data);
    });
  },
  
  methods: {
    ...mapActions(["app/setUserList", "app/toggleEditModal"]),
    openModal(data) {
      if(this.isEditModal) {
        this.userId = data.id
        this.payload = {}
        this.payload.first_name = data.first_name;
        this.payload.last_name = data.last_name;
        this.payload.email = data.email
      }else{
        this.payload = null;
      }
      this.showModal = true; 
    },
    async onSave(userData){
      if(!this.isEditModal){
        await axios.post("https://reqres.in/api/users", userData);
        alert("Your item is added");
      }else{
        await axios.post(`https://reqres.in/api/users/${this.userId}`, userData);
        alert("Your item is edited");
      }
      this.onClose()
    },
    onClose() {
      this["app/toggleEditModal"](false);
      this.userId = null;
      this.showModal = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
.user-item {
  width: 55%;
  margin: 1rem;
  display: flex;
  padding: 0.5rem;
  color: white;
  background-color: rgb(119, 152, 181);
}
input {
  margin: .5rem;
  padding: .5rem;
}
.content {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.edit-btn {
  height: 2rem;
  margin-left: 1rem;
  padding: 0 1rem;
}
p {
  display: block;
  font-size: 1rem;
  text-align: left;
  margin-left: 1rem;
  font-weight: 400;
  margin-top: 0.4rem;
  margin-bottom: 0;
  /* padding:.4rem; */
}
.images {
  width: 5rem;
  height: 4rem;
}
.details {
  display: block;
}
.user-list {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 1rem;
  justify-content: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.submit-btn{
  padding: .5rem;
  margin-left: 1rem;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
