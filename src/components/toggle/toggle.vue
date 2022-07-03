<template>
    <button :class="['button', {'active': isOpened}]" @click="toggle">
        <span class="text">{{isOpened ? "Hide" : "Show"}}</span>
        <span class="icon">
            <icon name = "triangle" />
        </span>
    </button>
</template>

<script>

import {icon} from "../../icons"

export default {
    component: {
        icon,
    },

    data() {
        return {
            isOpened: false
        };
    },
    
    methods: {
        toggle(){
            this.isOpened = !this.isOpened
        }
    }

}
</script>

<style lang = "scss" src = "./toggle.scss" scoped></style>