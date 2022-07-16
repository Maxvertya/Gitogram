<template>
  <div :class={active} class="c-progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitOnFinish () {
      if (this.active === true) {
        this.$emit('onFinish')
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.props.active = true
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish
    )
  }
}
</script>

<style lang="scss" src = './progress.scss' scoped></style>