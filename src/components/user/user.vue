<template>
    <div class="c-user">
        <button :class="['user__wrapper', `${size}`]">
             <img class="user__img" :src="avatar" alt="">
        </button>
</div>
</template>

<style lang = "scss" src = "./user.scss" scoped></style>

<script>
export default {
  name: 'User',
  data () {
    return {
      big: 'big',
      middle: 'middle',
      small: 'small'
    }
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    avatar: {
      type: String,
      default: 'https://picsum.photos/300/300'
    }
  }
}
</script>
