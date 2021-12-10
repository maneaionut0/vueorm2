import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import Item from '@/models/Item';
import List from '@/models/List';
import User from '@/models/User';

Vue.use(Vuex)

const database = new VuexORM.Database();

// register models
database.register(Item);
database.register(List);
database.register(User);


export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
});
