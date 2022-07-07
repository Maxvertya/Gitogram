<template>
<div class="wrapper__content">
    <div class="topline">
    <topline>
      <template #headline>
        <div class="title">Gitogram /</div>
        <div class="icons__list">
          <icon name="home" class="icon__item"></icon>
          <icon name="face" class="icon__item"></icon>
          <icon name="exit" class="icon__item"></icon>
        </div>
      </template>
      <template #content>
        <ul class="stories__list">
          <li v-for="story in stories" :key="story.id" class="stories__item">
            <user-list
              :avatar="story.avatar"
              :username="story.name"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
    </div>
    <div class="about">
      <ul class="about__list">
        <li class="about__item" v-for="item in items" :key="item.id">
          <about>
            <template #person__content>
              <div class="person__content__title">{{item.lang}}</div>
              <div class="person__content__subtitle">{{item.subtitle}}</div>
              <info></info>
            </template>
          </about>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { About } from '@/components/about/'
import { Topline } from '@/components/topline'
import { UserList } from '@/components/userList'
import { Icon } from '@/icons'
import stories from './data.json'
import { Info } from '../../components/info'
export default {
  name: 'feeds',
  components: {
    Topline,
    Icon,
    UserList,
    About,
    Info
  },

  data () {
    return {
      stories,
      items: [
        { id: 1, lang: 'JavaSript', subtitle: 'JavaScript framework for building interactive web applications ⚡' },
        { id: 1, lang: 'Vue.js', subtitle: 'The best framework for programming ⚡' },
        { id: 1, lang: 'React.js', subtitle: 'The best framework for programming ⚡' }
      ]
    }
  }
}
</script>

<style lang = "scss" src = "./feeds.scss" scoped></style>
