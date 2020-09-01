var app = new Vue({
    el: "#main",
    data: {
        message: "I love vue",
        showHTML: "<b>This html rendering</b>",
        isWeekend: true,
        timeOftheDay: "Morning",
        myHobbies: ["Listening Music", "Reading Book", "Talking to nice people"],
        thingsILike: [
            {text: "Listening Music"}, 
            {text: "Reading Book"}, 
            {text: "Talking to nice people"}],
        daySelected: [],
        firstName: "",
        lastName: ""
    },
    methods: {
        showMessage: function(){
            this.message = "A new message";
        },

        showFullName: function(){
            console.log("showFullName is getting called");
            return this.firstName + " " + this.lastName;
        }
    },

    computed: {
        fullName: function(){
            console.log("fullName is getting called");
            return this.firstName + " " + this.lastName;            
        }
    }
});