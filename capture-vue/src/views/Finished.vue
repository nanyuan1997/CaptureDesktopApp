<template>
    <h2>今日已完成任务</h2>
    <ul class="tasks task-finished">
        <li class="task-item" v-for="(item, index) in finishedArray" :key="index">
            <span class="task-text">{{ item.name }}</span>
            <span class="flag-icon"></span>
        </li>
    </ul>
    <p>你已经对自己信守承诺<span class="keep-times">{{ keepTimes }}</span>次，继续加油哦！</p>
</template>


<script>
import { useFinished, useKeepTimes } from '../utils/useData.js'
export default {
    setup() {
        const { finishedArray } = useFinished()
        const { keepTimes } = useKeepTimes()
        return {
            //在setup函数中return就可以在template中直接使用
            finishedArray,
            keepTimes
        }
    }
}
</script>
