<template>
<div class="c-info">
  <ul class="buttons__list">
    <li class="button__item">
      <a href="" class="button__overlay" @click.prevent>
        <div class="overlay__item">
          <icon name="star" class="icon__item"></icon>
        </div>
        <div class="overlay__description">Star</div>
      </a>
    </li>
    <li class="button__item">
      <a href="" class="button__overlay" @click.prevent>156к</a>
    </li>
    <li class="button__item">
      <a href="" class="button__overlay" @click.prevent>
        <div class="overlay__item">
          <icon name="fork" class="icon__item"></icon>
        </div>
        <div class="overlay__description">Fork</div>
      </a>
    </li>
    <li class="button__item">
      <a href="" class="button__overlay" @click.prevent>4</a>
    </li>
  </ul>
  </div>
</template>

<script>
import { Icon } from '@/icons'
export default {
  name: 'info',
  components: {
    Icon
  }
}
</script>

<style lang = "scss" src = "./info.scss" scoped></style>
