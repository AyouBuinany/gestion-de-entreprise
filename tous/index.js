/********************************** FLIPPING BETWEEN DIVS ******************************/ 

var div1 = document.getElementById('inputs-container');
var front = document.getElementById("flip-card-inner");
var signup = document.getElementById("sign-up");
var login = document.getElementById("log-in");
function sign(){
     front.style.transform = "rotateY(180deg)";
     div1.style.display='none';
     signup.style.backgroundColor='green';
     login.style.backgroundColor='white'
}
function log(){
    front.style.transform = "rotateY(0deg)";
    div1.style.display='block';
    login.style.backgroundColor='blue';
    signup.style.backgroundColor='white';
}

/*********************************** VALIDATION FOR LOGGING ******************************/ 

$(document).ready(function(){
    $("#email-log").keyup(function(){
        if(validmaillog()){
            $("#email-log").css("border-bottom","3px solid green");
            $("#email-error-log").css("color","green");
            $("#email-error-log").html("valid email");
        }else{
            $("#email-log").css("border-bottom","3px solid red");
            $("#email-error-log").css("color","red");
            $("#email-error-log").html("unvalid email");
        }
    });
});

//////////////////////////////////

$(document).ready(function(){
$("#password-log").keyup(function(){
    if(validpasswordlog()){
     $("#password-log").css("border-bottom","3px solid green");
     $("#error-password-log").css("color","green");
     $("#error-password-log").html("valid password");
    }else{
         $("#password-log").css("border-bottom","3px solid red");
         $("#error-password-log").css("color","red");
         $("#error-password-log").html("unvalid passsword");
    }
 });
});

function validmaillog(){
    var email =$("#email-log").val();
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg.test(email)){
        return true;
    }
    else{
        return false;
    }
}

/////////////////////////////////

function validpasswordlog(){
    var password =$("#password-log").val();
    var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if(pattern.test(password)){
        return true;
    }
    else{
        return false;
    }
}

/*********************************** VALIDATION FOR signning ******************************/ 

$(document).ready(function(){
    $("#user-sign").keyup(function(){
        if(checkUsername()){
         $("#user-sign").css("border-bottom","3px solid green");
         $("#user-error-sign").css("color","green");
         $("#user-error-sign").html("valid user name");
        }else{
             $("#user-sign").css("border-bottom","3px solid red");
             $("#user-error-sign").css("color","red");
             $("#user-error-sign").html("unvalid user name");
        }
     });
    });

$(document).ready(function(){
    $("#email-sign").keyup(function(){
        if(validmailsign()){
            $("#email-sign").css("border-bottom","3px solid green");
            $("#error-email-sign").css("color","green");
            $("#error-email-sign").html("valid email");
        }else{
            $("#email-sign").css("border-bottom","3px solid red");
            $("#error-email-sign").css("color","red");
            $("#error-email-sign").html("unvalid email");
        }
    });
});

//////////////////////////////////

$(document).ready(function(){
$("#password-sign").keyup(function(){
    if(validpasswordsign()){
     $("#password-sign").css("border-bottom","3px solid green");
     $("#error-password-sign").css("color","green");
     $("#error-password-sign").html("valid password");
    }else{
         $("#password-sign").css("border-bottom","3px solid red");
         $("#error-password-sign").css("color","red");
         $("#error-password-sign").html("unvalid passsword");
    }
 });
});

///////////////////////////////////////////////////////

function checkUsername(){
    console.log('match');
    var name =$("#user-sign").val();
    var pattern = /^[A-Z]{4,}$/;
    if(name.match(pattern)){
        return true;
    }else{
        return false;
    }
}

////////////////////////////////////////////////////

function validmailsign(){
    var email =$("#email-sign").val();
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg.test(email)){
        return true;
    }
    else{
        return false;
    }
}

/////////////////////////////////

function validpasswordsign(){
    var password =$("#password-sign").val();
    var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if(pattern.test(password)){
        return true;
    }
    else{
        return false;
    }
}


/*********************************** ADDING NEW COMPANY POP UP ******************************/ 
$(document).ready(function(){
$(".addcompany").click(function(){
    $("#company-new").toggle();
  });
});

/*********************************** VALIDATION OF FOOTER INPUTS ******************************/ 

function validmailfooter(){
    var email =$("#footer-email").val();
    var regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regx.test(email)){
        return true;
    }
    else{
        return false;
    }
}

$(document).ready(function(){
    $("#footer-email").keyup(function(){
        if(validmailfooter()){
            $("#footer-email-error").css("color","green");
            $("#footer-email-error").html("valid email");
        }else{
            $("#footer-email-error").css("color","red");
            $("#footer-email-error").html("unvalid email");
        }
    });
});


function validfeedbackfooter(){
    var feedback =$("#footer-textarea").val();
    if(feedback.length>=14){
        return true;
    }
    else{
        return false;
    }
}

$(document).ready(function(){
   $('#button-addon2').click(function (){
         var NomSalarie =$('.nomMatricule');
       //  console.log($('.nomMatricule').innerText);
        var recherch=$('#recherche');
  console.log(NomSalarie.length);
        for(var i=0; i<NomSalarie.length;i++){
        if(recherch.val()===NomSalarie[i].innerText){
          $(NomSalarie[i]).parents('.divs').toggleClass("dsalarie");
        }
    }
});
    $('#close').click(function(){
        $('#section1').toggle();
        $('#firstH1').text("");
        $('#firstH').val("");
    });

    //show département de tous les  entreprises
    $('#inf').click(function(){
        $('.ss3').toggle(1000);
        $(this).text('Hide All').click(function(){
            if($(this).text()==='Hide All'){
        $(this).text('Show All');
            }else{
            $(this).text('Hide All');
        }
        });
            });
//show département de un entreprise
            $('.info').click(function(){
                var departement= $('.ss3');
                $(this).prev().toggle();
                 $(this).text('Hide').click(function(){
                     if($(this).text()==='Hide'){
         $(this).text('show');
                     }
         else{
            $(this).text('Hide');
        }
                });
            });
    $("#footer-textarea").keyup(function(){
        if(validfeedbackfooter()){
            $("#footer-textarea-error").css("color","green");
            $("#footer-textarea-error").html("feedback accepted");
        }else{
            $("#footer-textarea-error").css("color","red");
            $("#footer-textarea-error").html("your feedback is too short");
        }
    });

});


function validatefooterinputs(){
    if ((validfeedbackfooter()==true) &&(validmailfooter()==true) ){
        alert("your feedback has been sent successfully ");
    }
    else{
        alert("please check your information again");
    }
}
var section1= document.getElementById('section1');
var first=document.getElementById('first');
 function clickInfo(eleme){
    document.getElementById('firstH1').textContent=eleme;
    document.getElementById('firstH').value=eleme;
          section1.style.display="flex";
     console.log("s1");
 }


