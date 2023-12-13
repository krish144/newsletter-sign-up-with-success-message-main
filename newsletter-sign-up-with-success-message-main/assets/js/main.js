$(document).ready(function(){

    $("#email_form").validate({
        rule:{
            email: "required"
        },
        messages:{
            email:"Please Enter the Email address"
        }
    });
    
   
    $("#email_form").on("submit",function(e){
        e.preventDefault();
    
                if($("#email_form").valid()){
                    var email= $("#email").val();
                  
                    $("#email_name").text(email);
            $("#sign_up_form_container").fadeOut(function(){
            $("#form_success_container").fadeIn();
        });

    }

     


   
    })

    $("#dismiss_btn").on("click",function(){

        
        $("#form_success_container").fadeOut(function(){
            $("#sign_up_form_container").fadeIn();
            $("#email").val("");
        });
    })
  
})