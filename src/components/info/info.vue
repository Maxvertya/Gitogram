<template>
<div class="stats">
    <div class="stats__border stats__left">
      <div class="stats__icon icon mr-4">
        <icon name="star"></icon>
      </div>
      <span>Star</span>
    </div>
    <div class="stats__border">
      {{ stars }}
    </div>
    <div class="stats__border">
      <div class="stats__icon icon mr-4">
        <icon name="fork"></icon>
      </div>
      <span>Fork</span>
    </div>
    <div class="stats__border stats__right">
      {{ forks }}
    </div>
  </div>
</template>

<script>
import { Icon } from '@/icons'
export default {
  name: 'info',
  components: {
    Icon
  },
  props: {
    stars: {
      type: Number,
      default: 0,
      required: true
    },
    forks: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>

<style lang = "scss" src = "./info.scss" scoped></style>
