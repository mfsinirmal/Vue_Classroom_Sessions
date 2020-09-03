<template>
    <div>
        <NewBook v-on:savebook="createNewBook">
            <b>Please enter a new book</b>
            <template v-slot:header> <hr/> </template>
            <template v-slot:footer> <hr/>  </template>
        </NewBook>

        <div class="book-list">            
            <Book v-for="book in books" v-bind:key="book.id" :book="book" :bookName="book.name" />      
        </div>        
    </div>    
</template>

<script>
import Book from "./Book.vue"
import NewBook from "./NewBook.vue"
export default {
    name: 'BookList',
    data: function(){
        return{          
            books: [
                {name: "Wings of fire", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSteLr45l2o4m4hjZJch0kZ2E9iAu5q2eVPVa-etA8ddTUz0vdv3STKBoQY2zE&usqp=CAc" },
                {name: "Hit Refresh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt8kf5gMfPK6WI8dQ8eX6Bjwsl76HcJ42KyIVG28pe8yVeaZHrm-vs4DblEGAB2iYc2ywQtSU&usqp=CAc"},
                ],
        }
    },
    components: {
        Book,
        NewBook
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