import { Model } from "@vuex-orm/core";

import List from "./List";

export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.uid(),
      name: this.string(""),

      lists: this.hasMany(List, "user_id")
    };
  }
}