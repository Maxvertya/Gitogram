<template>
    <div class="c-card">
        <div class="card__menu">
            <div class="card__menu--title">Javascript</div>
            <div class="card__menu--subtitle">The best framework</div>
            <info></info>
        </div>
    </div>
</template>

<script>
import { Info } from '@/components/info'
export default {
  name: 'Card',
  components: {
    Info
  }
}
</script>

<style lang = "scss" src = "./card.scss" scoped></style>
