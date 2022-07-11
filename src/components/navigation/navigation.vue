<template>
    <div class="c-navigation">
        <div class="navigation">
            <icon name="home" class="navigation__item left"></icon>
            <user>
              <template #img>
                <div class="user__wrapper--small">
                  <img class="user__img" src="https://picsum.photos/100">
                </div>
              </template>
            </user>
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
