<template>
    <div>
        <label for="email">Email</lable>
        <input id="email" v-model="email"/>

        <button @click="checkIfEmailIsEmpty">Check Email</button>
    </div>
</template>

<script>
import EmailChecker from "../mixins/EmailChecker.js"
export default {
    data:()=>{
        return{
            email: ""
        }
    },
    mixins:[EmailChecker]
}
</script>