
$(document).ready(function(){

  $('#registrationForm').submit(function(){

   var name = $('#name').val();
   var message = $('#message').val();

   validateNameField(name , event);
   validateMessageField(message , event);

 });

}); 

  function validateNameField(name , event){
  	if(! isValidName(name)){
  		$('#name-feedback').text('You must enter at least 4 characters');
  		event.preventDefault();
  	}else{
  		$('#name-feedback').text("");
  	};
  };

  function validateMessageField(message , event){
  	if(! isValidMessage(message)){
  		$('#message-feedback').text('write something about yourself');
  		event.preventDefault();
  	}else{
  		$('#message-feedback').text("");
  	}
  }

 function isValidName(name){
  	return name.length >= 4;
  }

  function isValidMessage(message){
  	return message.trim()  != "";
  }

function validateCheckBoxField(event){
	var ch1 = document.getElementById('digicam').checked;
    var ch2 = document.getElementById('mp3').checked;
    var ch3 = document.getElementById('wlan').checked;
   

  	if(ch1==false && ch2==false && ch3==false){
  		//alert('something');
        $('#checkbox-feedback').text('Choose your product');
        event.preventDefault();
  	}else{
  		$('#checkbox-feedback').text("");
  		};

};



 
   
