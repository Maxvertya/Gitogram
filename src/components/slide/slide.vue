<template>
  <div :class="['c-slide', {active: active}]">
    <div class="c-slide__container">
      <div class="slide__header">
        <x-progress
          :active="active"
          @onFinish="$emit('onProgressFinish')"
        ></x-progress>
        <user
          :username="username"
          :avatarUrl="avatarUrl"
        ></user>
      </div>
      <div class="slide__content">
        
        <div class="slide__info">
          <div v-if="content && content.length"
               class="content__text"
               v-html="content"
          ></div>
        </div>
      </div>
      <div class="slide__button">
        <x-button
          :size="size_m"
          :theme="buttonTheme"
          :hoverText="hoverText"
        >
        </x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { xProgress } from '@/components/progress'
import { User } from '@/components/user'
import { Button } from '@/components/button'
import { Icon } from '@/icons'
export default {
  name: 'Slide',
  data () {
    return {
      hoverText: 'Unfollow',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  components: {
    xProgress,
    Button,
    Icon,
    User
  },
  emits: [
    'onProgressFinish'
  ],
  props: {
    active: Boolean,
    avatarUrl: {
      type: String,
      required: true,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      required: true,
      default: 'Default User'
    },
    content: {
      type: String
    },
  },
}
</script>