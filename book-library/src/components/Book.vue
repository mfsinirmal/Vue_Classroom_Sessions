<template>
    <div v-if="checkIsNameCorrect()">
        <div>
            <img v-bind:src="book.image" alt="Book Image"/>
        </div>
        <div>
            <span v-highlight="'30px'">{{ book.name | appendPublisherName("Demo Pub")  }}</span>
        </div>        
    </div>
</template>

<script>

export default {
    name: "Book",
    methods: {
        checkIsNameCorrect: function(){
            if(this.bookName.length < 2){
                return false;
            }
            return true;
        }
    },
    filters: {
        appendPublisherName:function(value, publisherName){
            return publisherName + value
        }
    },
    props:{ 
        book: {
            type: Object            
        },
        bookName: {
            type: String,
            required: true,
            // validator: function(value){                                
            //     if(value.length < 2){    
            //         return false;
            //     }                
            //     return true;

            // }        
        }, 
        imageLink: {
            type: String
        }
    }
}
</script>

<style scoped>
    .book-card {
        padding: 4%;
    }

    img{
        height: 10rem;
    }
</style>