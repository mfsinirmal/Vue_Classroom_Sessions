<template>
    <div>
        <label for="email_id">Email</label>
        <input id="email_id" v-model="email"/>

        <button @click="checkIfEmailIsEmpty(email)">Check Email</button>
        <button @click="checkIfPhoneIsBlank">Check Phone</button>
        {{ message }}
    </div>
</template>

<script>
import EmailChecker from "../mixins/EmailChecker.js"
export default {
    data:()=>{
        return{
            email: "",
            message: "Component message"
        }
    },
    mixins:[EmailChecker]
}
</script>