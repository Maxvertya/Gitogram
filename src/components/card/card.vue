<template>
    <div class="c-card">
        <div class="card__menu">
            <div class="card__menu--title">{{name}}</div>
            <div class="card__menu--subtitle">{{description}}</div>
            <!-- <info :stars="stars" :forks="forks"></info> -->
            <slot name="info"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String
    },
    description: {
      type: String
    },
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

<style lang = "scss" src = "./card.scss" scoped></style>
