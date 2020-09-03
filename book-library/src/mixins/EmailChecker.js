export default{
    methods: {
        checkIfEmailIsEmpty: function(email){
            if(email.length <=0 ) {
                alert("Email is blank");
                return false;
            }            
            alert("Email is NOT blank");
            return true;            
        }
    }
}