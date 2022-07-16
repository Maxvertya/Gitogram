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
import { headerSection } from '@/components/header'
import { Hero } from '@/components/hero'
import * as api from '../../api'
export default {
  name: 'feeds',
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
  },
  components: {
    headerSection,
    About,
    Hero
  }
}
</script>

<style lang = "scss" src = "./feeds.scss" scoped></style>
