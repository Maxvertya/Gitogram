<template>
    <div class="c-feed">
        <toggle @onToggle = "toggle"/>
        <div class="comments" v-if="shown">
            <ul class="comments__list">
                <li class="comments item">
                    <slot name="comment"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Toggle } from '@/components/toggle'
export default {
  name: 'Feed',
  components: {
    Toggle
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }

}
</script>
