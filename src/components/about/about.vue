<template>
  <div class="c-about">
    <div class="c-container">
      <div class="person">
          <div class="person__info">
            <user></user>
          </div>
          <div class="person__content">
            <slot name="person__content" />
          </div>
          <div class="person__toggle">
            <toggle></toggle>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { User } from '@/components/user'
import { Toggle } from '@/components/toggle'

export default {
  name: 'About',
  components: {
    User,
    Toggle
  }
}
</script>

<style lang = "scss" src = "./about.scss" scoped ></style>
