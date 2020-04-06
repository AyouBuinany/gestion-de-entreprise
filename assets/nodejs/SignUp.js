$(document).ready(function(){
   
    $("#submit1").click(function(){
        let username = $("#username").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let pconfirm = $("#confirm").val();
        if( username != "" && email != "" &&  password !="" &&  pconfirm !=""){
             $.ajax({
                url:'/SignUp',
                type:'post',
                data:{username,email,password,pconfirm},
                success:function(response){
                    if(response.request){
                                  window.location.href="login.html"; 
                    } 

                },
                error:function(){
                    $("#alert").css('visibility', 'visible');
                }
            });
        }else{
            $("#alert").css('visibility', 'visible');
        }
    });   
  }); 