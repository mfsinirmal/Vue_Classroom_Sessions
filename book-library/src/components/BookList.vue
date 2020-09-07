<template>
    <div>
        <!-- <NewBook v-on:savebook="createNewBook">
            <b>Please enter a new book</b>
            <template v-slot:header> <hr/> </template>
            <template v-slot:footer> <hr/>  </template>
        </NewBook> -->
        <router-link to="/new" >New</router-link>
        <div class="book-list">            
            <Book v-for="book in books" v-bind:key="book.id" :book="book" :bookName="book.name" />
        </div>        
    </div>    
</template>

<script>
import Book from "./Book.vue"
//import {Store} from "../Store.js"
// import NewBook from "./NewBook.vue"
export default {
    name: 'BookList',
    data: function(){
        return{          
            //books: Store.state.books
        }
    },
    components: {
        Book,
        // NewBook
    },
    computed:{
        books: function(){
            return this.$store.getters.getBooks
        }
    },
    methods: {
        createNewBook: function(book){
            if(book.name.lengh <= 0){
                this.books.push({name: book.name, image: book.image});
            }
            
        }
    }
}
</script>

<style scoped>
    .book-list{
        display: flex
    }
</style>