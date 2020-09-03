<template>
    <div>
        <slot name="header"></slot>       
        <slot></slot> 
        <div>
            <label for="BookName">Book Name</label>
            <input id="BookName" v-model="bookName"/>
        </div>
        <div>
            <label for="ImageLink">Image Link</label>
            <input id="ImageLink" v-model="imageLink"/>
        </div>    
        <button @click="$emit('savebook', savebook())">Save Book</button>    
        <slot name="footer"></slot>
    </div>
</template>

<script>

export default {
    data: ()=>{
        return{
            bookName:"",
            imageLink:""
        }
    },
    // beforeCreate: function(){
    //     console.log("Before create");
    // },
    // created: function(){
    //     console.log("Created");
    // },
    // beforeMount: function(){
    //     console.log("Before mount");
    // },
    // mounted: function(){
    //     console.log("Mounted");
    // },
    // beforeUpdate: function(){
    //     console.log("before update");
    // },
    // updated: function(){
    //     console.log("Updated");
    // },
    // beforeDestroy: function(){
    //     console.log("Before destroyed");
    // },
    // destroyed: function(){
    //     console.log("Destroyed");
    // },
    methods: {
        savebook: function(){
            var book = {name: this.bookName, image: this.imageLink}
            this.bookName = "";
            this.imageLink="";
            return book;
        }
    },
    watch:{
        bookName: function(newValue, oldValue){
            console.log("The value changed from " + oldValue + " to " + newValue);
        }
    }
}
</script>