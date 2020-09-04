export default{
    data:()=>{
        return{
            message: "Mixin message"
        }
    },
    methods: {
        checkIfEmailIsEmpty: function(email){            
            if(email.length <=0 ) {
                alert("Email is blank");
                return false;
            }   
            else{         
            alert("Email is NOT blank");
            return true;            }
        },

        checkIfPhoneIsBlank: function(){
            alert("Checking");
        }
    }
}