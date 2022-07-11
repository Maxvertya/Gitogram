<template>
<div class="wrapper__content">
    <header class="header">
      <header-section></header-section>
    </header>
    <div class="hero__section">
      <hero></hero>
    </div>
    <div class="about__section">
      <ul class="about__list">
        <li class="about__item">
          <about></about>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { About } from '@/components/about/'
import stories from './data.json'
import { headerSection } from '@/components/header'
import { Hero } from '@/components/hero'
export default {
  name: 'feeds',
  components: {
    headerSection,
    About,
    Hero
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
