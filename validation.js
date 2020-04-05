
 
      // ****************************************************************
      // ** Function Name : validateFirstname()  and   validateLastname()                               
      // ****************************************************************
      // ** Function Description                                      
      // ** ====================                                                                                     
      // ** This function validate if the input start with a cap and only alphabet                                                                         
      // ****************************************************************
 
      //for First Name
      function validateFirstname() {
        var stringName = document.getElementById('fname').value;
        var stringLength = stringName.length;
        var error = document.getElementById('showError');
        var valiName = /^[A-Z](.*[A-Za-z])$/;

        if(!stringName.match(valiName)) {  
            error.innerHTML = "<p>" + "First Name*" + "<br/>" + "Must start with a capital letter and only alphabet allowed; also the field can not be left empty or just blank characters." + "</p>";
            document.querySelector('#fname').value = "";
            document.querySelector('#fname').focus();
            return false;
        }
        error.innerHTML = "";
        return true;
        }  //  End of function

        //for Last Name
        function validateLastname() {
        var stringName = document.getElementById('lname').value;
        var stringLength = stringName.length;
        var error = document.getElementById('showError');
        var valiName = /^[A-Z](.*[A-Za-z])$/;

        if(!stringName.match(valiName)) { 
            error.innerHTML = "<p>" + "Last Name*" + "<br/>" + " Must start with a capital letter and only alphabet allowed; also the field can not be left empty or just blank characters." + "</p>";
            document.querySelector('#lname').value = "";
            document.querySelector('#lname').focus();
            return false;
        }
        error.innerHTML = "";
        return true;
      }  //  End of function


      // ****************************************************************
      // ** Function Name : validateUsername()                                                                                   
      // ****************************************************************
      // ** Function Description                                      
      // ** ====================                                                                                      
      // ** This function validate if the username starts with a letter, has at least 6 characters.                                                                                
      // ****************************************************************
 
      function validateUsername() {
        var stringUsername = document.getElementById('uname').value;
        var error = document.getElementById('showError');
        var usern = /^[A-Za-z][A-Za-z\d]{5,}$/

            if(!stringUsername.match(usern)) { 
                error.innerHTML = "<p>" + "User Name*" + "<br/>" + " Must start with a letter, and must have at least 6 characters." + "</p>";
                document.querySelector('#uname').value = "";
                document.querySelector('#uname').focus();
                return false;
            }
            error.innerHTML = "";
            return true;
        } //  End of function

      // ****************************************************************
      // ** Function Name : validatePassword()                                        
      // ****************************************************************
      // ** Function Description                                      
      // ** ====================                                                                                            
      // ** This function validate if the password has 6 characters long, starts with a character, has at least 1 digit and 1 uppercase                                                                        
      // ****************************************************************
 
      function validatePassword() {
        var sPassword = document.getElementById('password').value.trim();
        var charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";     //only letters: doesn't include"0123456789!@#$%^&*()+=-[]\\\';,./{}|\":<>?"    
        var error = document.getElementById('showError');
      
        //checking if password starts with a character
        if(!(charString.indexOf(sPassword.substr(0,1))>= 0)){    
          error.innerHTML = "<p>" + "Password*" + "<br/>" + " Must start with a character." + "</p>";   
            document.querySelector('#password').value = "";
            document.querySelector('#password').focus();
            return false;
        } 

        //checking password length
        if(sPassword.length!=6){
          error.innerHTML = "<p>" + "Password*" + "<br/>" + " Must has 6 characters long." + "</p>";
            document.querySelector('#password').value = "";
            document.querySelector('#password').focus();
            return false;
        }

        //checking password has at least 1 digit and 1 uppercase
        var cap = 0;
        var num = 0;
        for (var i = 0; i < sPassword.length; i++) {
          if (sPassword.charAt(i) >= "A" &&  sPassword.charAt(i) <= "Z"){
            cap++;
           }
          if(sPassword.charAt(i) >= "0" &&  sPassword.charAt(i) <= "9"){
            num++;
           }           
        } 

        if(cap == 0 || num ==0){
          error.innerHTML = "<p>" + "Password*" + "<br/>" + " Must have at least 1 digit and 1 uppercase letter." + "</p>";
          document.querySelector('#password').value = "";
          document.querySelector('#password').focus();
          return false;
         }
        error.innerHTML = "";  
        return true;
 
        } //  End of function
      
      // ****************************************************************
      // ** Function Name : validatePassword2()                                       
      // ****************************************************************
      // ** Function Description                                      
      // ** ====================                                                                                             
      // ** This function validate if the password has 6 characters long, starts with a character, has at least 1 digit and 1 uppercase                                                                                       
      // ****************************************************************
 
      function validatePassword2() {
        var sPassword = document.getElementById('password').value.trim();
        var sPassword2 = document.getElementById('password2').value.trim();
        var error = document.getElementById('showError');
           
         if(sPassword!=sPassword2){
          error.innerHTML = "<p>" + "Password*" + "<br/>" + " Passwords should be mutched." + "</p>";
          document.querySelector('#password2').value = "";
          document.querySelector('#password2').focus();
          return false;
         }
      　error.innerHTML = "";  
        return true;
      } //  End of function

      
        
      // ****************************************************************
      // ** Function Name : validateAge()                                         
      // ****************************************************************
      // ** Function Description                                      
      // ** ====================                                                                                             
      // ** This function validate if the age between 16 and 60                                                                           
      // ****************************************************************

      function validateAge() {
        var error = document.getElementById('showError');
        var age = document.getElementById('age').value;
        if(age<0||age>60){
          error.innerHTML = "<p>" + "Age*" + "<br/>" + " Must between 16 and 60." + "</p>";
          document.querySelector('#age').value = "";
          document.querySelector('#age').focus();
          return false;
        }
        error.innerHTML = "";  
　       return true;
　      } //  End of function

    // ****************************************************************
    // ** Function Name : clearShowErrors()                                         
    // ****************************************************************
    // ** Function Description                                      
    // ** ====================                                                                                             
    // ** This function clears error message                                                                           
    // ****************************************************************

     function  clearShowErrors() {
       document.querySelector('#showError').innerHTML = " ";
      }  //  End of function

        