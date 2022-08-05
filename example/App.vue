<template>
    <infinite-slide-bar :barStyle="{ background: '#42b883', padding: '5px 0' }">
        <span style="color: #fff;">Helo World, I love Vue Infinite Slide Bar</span>
    </infinite-slide-bar>
    <infinite-slide-bar :barStyle="{ background: '#42b883', padding: '5px 0' }">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png">
    </infinite-slide-bar>
</template>

<script>
import { defineComponent } from 'vue';
import InfiniteSlideBar from '../src/index.vue';

export default defineComponent({
    name: 'App',
    components: {
        'infinite-slide-bar': InfiniteSlideBar
    }
})
</script>
