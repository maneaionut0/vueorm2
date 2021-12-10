<template>
  <div id="app">
    <div v-if="user">
      <h2>{{ user.name }} List</h2>
      <form @submit.prevent="addList">
        <input type="text" v-model="form.title" />
        <button type="button" @click="addList">Add a List</button>
      </form>
      <List v-for="list in user.lists" :key="list.id" :list="list" />
    </div>
    <div v-else>
      <h2>add name</h2>
      <form @submit.prevent="addName">
        <input type="text" v-model="name" />
        <button type="button" @click="addName">Add Name</button>
      </form>
    </div>
  </div>
</template>

<script>
import Item from "./models/Item";
import User from "./models/User";
import List from "./models/List";
import ListComponent from "./components/List.vue";

export default {
  components: { List: ListComponent },
  name: "App",
  data() {
    return {
      form: {
        title: "",
      },
      name: "",
    };
  },
  computed: {
    user() {
      return User.query().with("lists.items").find(1);
    },
  },
  methods: {
    addName() {
      User.insert({
        data: {
          id: 1,
          name: this.name,
        },
      });
    },
    addList() {
      List.insert({
        data: {
          title: this.form.title,
          user_id: this.user.id,
        },
      });
      this.form.title = "";
    },
  },
};
</script>

<style></style>
