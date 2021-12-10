import { Model } from "@vuex-orm/core";

import List from "./List";

export default class Item extends Model {
  static entity = "items";

  static fields() {
    return {
      id: this.uid(),
      text: this.string(""),
      edit: this.boolean(false),
      list_id: this.attr(null),
      created_at: this.number(),

      list: this.belongsTo(List, "list_id"),
    };
  }
}