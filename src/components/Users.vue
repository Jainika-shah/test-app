<template>
    <div class="user-list">
      <div class="user-item" v-for="item in userList" :key="item.id">
        <img class="images" :src="item.avatar" />
        <div class="content">
          <div class="details">
            <p>{{ item.first_name }} {{ item.last_name }}</p>
            <p>{{ item.email }}</p>
          </div>
          <div>
          <button class="edit-btn" @click="openModal(item)">Edit</button>
          <button class="edit-btn" @click="deleteItem(item.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "Users",
    computed: {
    ...mapState({
      userList: state => state.app.userList
    }),
  },
  methods: {
    ...mapActions(["app/setUserList","app/toggleEditModal"]),
    openModal(item){
        this["app/toggleEditModal"](true);
        this.$emit("openModal", item)
    },
    deleteItem(id){
      let filteredArr = this.userList.filter(item => item.id != id)
      this["app/setUserList"](filteredArr);
    }
  }
}
</script>