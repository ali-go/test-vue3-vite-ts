<script setup lang="ts">
import { useUserStore } from '@/store/user';
const userStore = useUserStore();

const changeName = () => {
    userStore.updateName('李四');
};
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <div>
        <router-link to="/home">Home</router-link>
        <router-link to="/index">Index</router-link>
        <router-link to="/login">Login</router-link>
    </div>
    <router-view></router-view>
    <div>
        <h2>下面使用pinia</h2>
        <span>姓名:{{ userStore.name }}</span>
        <button @click="changeName">点击修改名称</button>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
