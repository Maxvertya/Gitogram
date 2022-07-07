<template>
    <button :class="['button__togler', {'active': isActive}]" @click="toggle">
        <span class="toggler__text">{{isActive ? 'Hide' : 'Show'}}</span>
        <span class="toggler__icon">
            <icon name = 'up'></icon>
        </span>
    </button>
</template>

<script>
import { Icon } from '@/icons'
export default {
  name: 'toggler',
  components: {
    Icon
  },
  data () {
    return {
      isActive: false
    }
  },

  methods: {
    toggle () {
      this.isActive = !this.isActive
      this.$emit('onToggle', this.isActive)
    }
  }
}
</script>

<style lang = "scss" src = "./toggle.scss" scoped ></style>
