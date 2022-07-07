<template>
  <button class="user">
    <div class="avatar">
      <img src="https://picsum.photos/100" class="img" alt="username avatar" />
    </div>
    <div class="username">Nick</div>
  </button>
</template>

<style lang = "scss" src = "./user.scss" scoped ></style>
<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>
