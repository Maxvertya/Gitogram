<template>
    <div class="c-navigation">
        <div class="navigation">
            <icon name="home" class="navigation__item left"></icon>
            <user size = "small" avatar = "https://picsum.photos/100"></user>
            <icon name="exit" class="navigation__item right"></icon>
        </div>
    </div>
</template>

<script>
import { Icon } from '@/icons'
import { User } from '@/components/user'

export default {
  name: 'navigation',
  components: {
    Icon,
    User
  }
}
</script>

<style lang = "scss" src = "./navigation.scss" scoped></style>
