<template>
  <ul class="user__list">
    <li class="user__item" v-for="item in items" :key="item.id">
      <user size="big"
      :avatar = "item.owner.avatar_url"></user>
      <div class="user__item--title">{{item.owner.login}}</div>
    </li>
  </ul>
</template>

<script>
import { User } from '@/components/user'
import * as api from '../../api'
export default {
  name: 'userList',
  components: {
    User
  },
  data () {
    return {
      items: []
    }
  },
  methods: {},
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (erorr) {
      console.log(erorr)
    }
  }
}
</script>

<style lang = "scss" src = "./userList.scss" scoped></style>
