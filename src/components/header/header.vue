<template>
    <div class="c-header">
        <div class="c-container">
            <div class="header__content">
                <a href="" class="header__title" @click.prevent="">Gitogram /</a>
                <nav>
                    <navigation></navigation>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { Navigation } from '@/components/navigation'
export default {
  name: 'header',
  components: {
    Navigation
  }
}
</script>

<style lang = "scss" src = "./header.scss" scoped></style>
