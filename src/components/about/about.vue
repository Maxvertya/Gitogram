<template>
    <div class="card">
        <div class="c-container">
            <div class="person__info">
              <div class="person__name">
                <button class="person__name-button" @click="$emit('onPress')">
                    <div class="avatar">
                    <img :src="person" class="img" alt="username avatar" />
                    </div>
                    <div class="person__title">{{ name }}</div>
                </button>
              </div>
                <div class="content">
                  <slot name="person__content" />
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
  props: {
    person: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang = "scss" src = "./about.scss" scoped ></style>

