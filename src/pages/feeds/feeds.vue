<template>
   <div class="topline">
    <topline>
        <template #headline>
            <div class="title">Gitogram /</div>
            <div class="icons__list">
                <icon name = "home" class="icon__item"></icon>
                <icon name = "face" class="icon__item"></icon>
                <icon name = "exit" class="icon__item"></icon>
            </div>
        </template>
        <template #content>
            <ul class="stories__list">
                <li v-for="story in stories" :key="story.id" class="stories__item">
                     <user-list 
            :avatar="story.avatar"
            :username="story.name"
            @onPress = "handlePress(story.id)"
                    />
                </li>
            </ul>
        </template>
    </topline>
    <div class="about">
        <about :person="stories[0].avatar"
        :name="stories[0].name">
        <template #person__content>
            <div class="inner__content">
                <div class="about__title">Vue.js</div>
                <div class="about__subtitle">JavaScript framework for building interactive web applications ⚡</div>
            </div>
        </template>
        </about>
        
     </div>
     </div>
</template>


<script>
import About from '../../components/about/about.vue'
import {topline} from "../../components/topline"
import UserList from '../../components/userList/userList.vue'
import {icon} from '../../icons'
import stories from './data.json'
import toggle from '../../components/toggle'
export default {
    name: "feeds", 
    components: {
        topline,
        icon,
        UserList,
        About,
    },

    data() {
        return {
            stories
        }
    }
}
</script>

<style lang = "scss" src = "./feeds.scss" scoped></style>
