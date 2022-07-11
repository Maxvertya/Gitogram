<template>
  <div class="c-about">
    <div class="c-container">
      <div class="about__content">
          <div class="person__info">
            <user>
              <template #img>
                <div class="user__wrapper--middle">
                  <img class="user__img" src="https://picsum.photos/100">
                </div>
              </template>
            </user>
            <div class="person__name">Андрей</div>
          </div>
          <div class="person__content">
            <card></card>
          </div>
          <div class="person__toggle">
            <toggle></toggle>
          </div>
          <div class="person__date">15 may</div>
      </div>
    </div>
  </div>
</template>

<script>
import { User } from '@/components/user'
import { Toggle } from '@/components/toggle'
import { Card } from '@/components/card'
export default {
  name: 'About',
  components: {
    User,
    Toggle,
    Card
  }
}
</script>

<style lang = "scss" src = "./about.scss" scoped ></style>
