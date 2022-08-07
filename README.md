# vue3-infinite-slide-bar

Inspire by [vue-infinite-slide-bar](https://github.com/biigpongsatorn/vue-infinite-slide-bar)

<img src="https://raw.githubusercontent.com/takeokunn/vue3-infinite-slide-bar/master/ex.gif"/>


## Install

```shell
$ npm install vue3-infinite-slide-bar
```

or

```shell
$ yarn add vue3-infinite-slide-bar
```

## Usage

```html
<template>
    <infinite-slide-bar :barStyle="{ background: '#42b883', padding: '5px 0' }">
        <span style="color: #fff;">Helo World, I love Vue Infinite Slide Bar</span>
    </infinite-slide-bar>
</template>

<script>
import { defineComponent } from 'vue';
import InfiniteSlideBar from 'vue3-infinite-slide-bar;

export default defineComponent({
    components: {
        'infinite-slide-bar': InfiniteSlideBar
    }
})
</script>
```

## ️ Props

| Props       | Type          | Default  | Description  |
| ----------- |:--------------| ---------|--------------|
| barStyle    | Object        | -        | Customize style of slide bar |
| duration    | String        | 12s      | Speed of animation |
| direction   | String        | normal   | Direction of animation (`normal`, `reverse`) |
| delay       | String        | 0s       | Delay time before animation start |
| paused      | Boolean       |false     |Specifies whether the animation is paused or running|


## LICENSE

[MIT](https://github.com/takeokunn/vue3-infinite-slide-bar/blob/master/LICENSE)
