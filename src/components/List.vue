<template>
  <div>
    <h2>{{ list.title }}</h2>
    <form @submit.prevent="addItem">
      <input type="text" v-model="form.text" />
      <button type="button" @click="addItem">Add a Item</button>
    </form>
    <ul>
      <div v-for="item in list.items" :key="item.id">
        <li v-if="!item.edit">
          {{ item.text }}
          <button @click="toggleEdit(item.id)">Edit Item</button>
          <button @click="deleteItem(item.id)">Delete Item</button>
        </li>
        <li v-else>
          <input type="text" v-model="newText" />
          <button @click="editItem(item.id)">done with my edits</button>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Item from "../models/Item";
import List from "../models/List";

export default {
  props: {
    list: {
      required: true,
      type: List,
    },
  },
  data() {
    return {
      form: {
        text: "",
        list_id: this.list.id,
      },
      newText: "",
    };
  },
  methods: {
    addItem() {
      if (!this.form.text || this.form.text.length < 5)
        return window.alert("Min 5 characters");
      Item.insert({ data: { ...this.form, created_at: new Date() / 1000 } });
      this.form.text = "";
    },
    toggleEdit(id) {
      Item.update({
        where: id,
        data: {
          edit: true,
        },
      });
    },
    editItem(id) {
      Item.update({
        where: id,
        data: {
          text: this.newText,
          edit: false,
        },
      });
    },
    deleteItem(id) {
      Item.delete(id);
    },
  },
};
</script>

<style></style>
