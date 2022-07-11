<template>
  <ul class="user__list">
    <li class="user__item">
      <user>
        <template #img>
          <div class="user__wrapper--big">
            <img class="user__img" src="https://picsum.photos/100">
          </div>
        </template>
      </user>
      <div class="user__item--title">Андрей</div>
    </li>
    <li class="user__item">
      <user>
        <template #img>
          <div class="user__wrapper--big">
            <img class="user__img" src="https://picsum.photos/100">
          </div>
        </template>
      </user>
      <div class="user__item--title">Андрей</div>
    </li>
    <li class="user__item">
      <user>
        <template #img>
          <div class="user__wrapper--big">
            <img class="user__img" src="https://picsum.photos/100">
          </div>
        </template>
      </user>
      <div class="user__item--title">Андрей</div>
    </li>
  </ul>
</template>

<script>
import { User } from '@/components/user'
export default {
  name: 'userList',
  components: {
    User
  }
}

</script>

<style lang = "scss" src = "./userList.scss" scoped></style>
