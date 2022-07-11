<template>
    <div class="c-hero">
        <div class="c-container">
          <div class="hero__content">
            <user-list></user-list>
          </div>
        </div>
    </div>
</template>

<script>
import { UserList } from '@/components/userList'
export default {
  name: 'hero',
  components: {
    UserList
  }
}
</script>

<style lang = "scss" src = "./hero.scss" scoped></style>
