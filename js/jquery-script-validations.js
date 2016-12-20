
$(function() {
  
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
   
      username: { 
	  required:true,
	 // lettersonly: true
	  },
	  
	   password: {
        required: true,
        minlength: 5
      },
     email: {
        required: true,
        email: true
      },
	  
	  
	  phone: { 
	    required:true,
        minlength:10,
        maxlength:18,
        numbersonly: true
	  },
	  
	  companyname: { 
	  required:true,
	  
	  },
	 
       
    },
    // Specify validation error messages
    messages: {
      username: {
		  required: "Please enter username",
		   lettersonly: "Only enter alphabetic characters"
		   
	  },
      password: {
        required: "Please enter Password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter valid email address"
    },
	 phone: {
		   required: "Please enter valid Phone number",
		   numbersonly: "Phone number must be minimum 10 and maximum 18 digits"
		   
	  },
	  companyname:{
		  required: "Please enter valid company name",
	  },
    
	
    submitHandler: function(form) {
      form.submit();
    }
  });
});


jQuery.validator.addMethod("lettersonly", function(value, element) {
return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only enter alphabetical characters");

jQuery.validator.addMethod("numbersonly", function(value, element) {
return this.optional(element) || /^[0-9\s]+$/i.test(value);
}, "Only enter numbers");
