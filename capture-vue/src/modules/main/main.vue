<template>
    <div id="nav">
        <div class="date">{{ dateStr }}</div>
        <div class="nav-text">
            <router-link to="/">待办事项</router-link>
            <router-link to="/finished">已完成</router-link>
        </div>
        <router-link to="/add"><span>新建</span></router-link>
    </div>
    <div class="content">
        <span class="close enable-click" @click="closeMain">×</span>
        <div class="content-manage">
            <router-view />
        </div>
    </div>
</template>
<script>
import { closeMain } from '../../utils/useIPC.js'
export default {
    setup() {
        const date = new Date()
        const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        return {
            closeMain,
            dateStr
        }
    }
}
</script>
  