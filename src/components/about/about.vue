<template>
  <div class="c-about">
    <div class="c-container">
      <div class="about__content">
        <ul class="person__card">
          <li class="person__item" v-for="item in items" :key="item.id">
            <div class="person__info">
              <user size="middle" :avatar="item.owner.avatar_url"></user>
              <div class="person__name">{{ item.owner.login }}</div>
            </div>
            <div class="person__content">
              <card :name="item.name" :description="item.description">
                <template #info>
                  <info :stars = "item.stargazers_count" :forks = "item.forks_count"></info>
                </template>
              </card>
            </div>
            <div class="person__toggle">
              <feed>
                <template #comment>
                  <comments :username = "item.owner.login"></comments>
                </template>
              </feed>
            </div>
            <div class="person__date">{{normalDate(item.created_at)}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { User } from '@/components/user'
import { Feed } from '@/components/feed'
import { Card } from '@/components/card'
import { Info } from '@/components/info'
import { Comments } from '@/components/comments'
import * as api from '../../api'
export default {
  name: 'About',
  components: {
    User,
    Card,
    Info,
    Feed,
    Comments
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    normalDate (arg) {
      const date = new Date(arg)
      return date.toLocaleString('en-EN', { month: 'short', day: 'numeric' })
    }
  },
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

<style lang = "scss" src = "./about.scss" scoped ></style>
