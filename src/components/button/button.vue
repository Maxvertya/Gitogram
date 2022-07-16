<template>
  <button
    :class="[
      'c-button', `${theme}`, `${size}`,
      {'hover-text': withHoverText}
    ]"
    :data-hover-text="hoverText"
  >
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  data () {
    return {
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green',
    }
  },
  props: {
    size: {
      type: String,
      default: 'size_s'
    },
    theme: {
      type: String,
      default: 'theme_white'
    },
    hoverText: {
      type: String,
      default: 'default hoverText'
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style lang="scss" src = './button.scss' scoped></style>