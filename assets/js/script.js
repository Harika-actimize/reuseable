function validateform(){ 
     var name= document.myform.name.value;
      var firstnameregex = /^[a-zA-Z]*$/;
      var dob= document.myform.birth.value; 
      var email= document.myform.email.value;
      var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      var phoneno= document.myform.pnumber.value;
      var pnumberregex = /^[6-9]\d{9}$/;
      var gender= document.myform.gender.value;
      var country= document.myform.country.value;
      var check= document.myform.myCheck;
      var modal = document.getElementById("myModal")   
     document.querySelectorAll("input").forEach(a=>a.removeAttribute("required"))
      if(namevalidation(name,firstnameregex)){
            document.getElementById("uname").innerHTML= "" 
            if(dobvalidation(dob)){
                document.getElementById("uage").innerHTML= ""
                if(emailvalidation(email,emailregex)){
                    document.getElementById("uemail").innerHTML= ""
                    if(phonevalidation(phoneno,pnumberregex)){
                        document.getElementById("upnumber").innerHTML=""
                        if(gendervalidation(gender)){
                            document.getElementById("ugender").innerHTML=""
                            if(countryvalidation(country)){
                                document.getElementById("countryerr").innerHTML=""
                                if(checkboxvalidation(check)){
                                    document.getElementById("text").innerHTML=""
                                    if(modal){
                                      modal.style.display = "block";
                                      setTimeout(function(){
                                          location.reload()
                              
                                      },2000)
                                  }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
                               

                                              

  function namevalidation(firstname,firstnameregex)
  {
      if(firstname=="")
      {
        document.getElementById("uname").innerHTML= "Name is a required field."
        document.getElementsByName("name")[0].setAttribute('required', 'required'); 
        return false;
      }else if(firstnameregex.test(firstname)==false){
        document.getElementById("uname").innerHTML= "use only alphabets"
            return false;
        }else
        {
            return true;
        }
    }

  

  function dobvalidation(dob)
  {
      if(dob=="")
      {
        document.getElementById("uage").innerHTML= " is a required field."
                document.getElementsByName("birth")[0].setAttribute('required', 'required');
        return false;
      }
      else 
      {
        return true;
      }
  }

  function emailvalidation(email,emailregex){
      if(email==""){
        document.getElementById("uemail").innerHTML= "email is a required field."
        document.getElementsByName("email")[0].setAttribute('required', 'required');
        return false;
      }else if (emailregex.test(email) == false){
        document.getElementById("uemail").innerHTML= "enter valid email"
        return false;
      }else{
        return true;
      }
  }

  function phonevalidation(phoneno,pnumberregex)
  {
    if(phoneno=="")
    {
        document.getElementById("upnumber").innerHTML= "phone number is a required field."
        document.getElementsByName("pnumber")[0].setAttribute('required', 'required');
        return false;
    }else if (pnumberregex.test(phoneno) == false) 
      {
        document.getElementById("upnumber").innerHTML= "enter valid phone number"
         return false;
      }
    else 
    {
      return true;
    }
  }

  function gendervalidation(gender)
  {
    if(gender=="")
    {
        document.getElementById("ugender").innerHTML= " is a required field."
      return false;
    }
    else 
    {
      return true;
    }
}

function countryvalidation(country)
{
  if(country=="")
  {
    document.getElementById("countryerr").innerHTML = " is a requrired field"
    return false;
  }
  else 
  {
    return true;
  }
}

function checkboxvalidation(check)
{
  if (!check.checked) 
  {
    document.getElementById("text").innerHTML = " is a requrired field"
    return false;
  }
  else 
  {
    return true;
  }
}

