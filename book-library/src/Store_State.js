export const Store = {
    state: {
        books: [
            {name: "Wings of fire", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSteLr45l2o4m4hjZJch0kZ2E9iAu5q2eVPVa-etA8ddTUz0vdv3STKBoQY2zE&usqp=CAc" },
            {name: "Hit Refresh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt8kf5gMfPK6WI8dQ8eX6Bjwsl76HcJ42KyIVG28pe8yVeaZHrm-vs4DblEGAB2iYc2ywQtSU&usqp=CAc"},
        ],
    },
    AddBook: function(book){
        this.state.books.push({name: book.name, image: book.image})
    }
};
