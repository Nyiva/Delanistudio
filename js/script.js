$(document).ready(function() {
  $('#lego-4-1').click(function(){
    $('#lego-4-2').show();
  });
    $('#lego-4-1').click(function(){
      $('#lego-4-1').hide();
    });
    $('#lego-4-2').click(function(){
      $('#lego-4-1').show();
    });
    $('#lego-4-2').click(function(){
      $('#lego-4-2').hide();
  });
  $('#lego-4-3').click(function(){
    $('#lego-4-4').show();
  });
  $('#lego-4-3').click(function(){
    $('#lego-4-3').hide();
  });
  $('#lego-4-4').click(function(){
    $('#lego-4-3').show();
  });
  $('#lego-4-4').click(function(){
    $('#lego-4-4').hide();
  });

  $('#lego-4-5').click(function(){
    $('#lego-4-6').show();
  });
  $('#lego-4-5').click(function(){
    $('#lego-4-5').hide();
  });
  $('#lego-4-6').click(function(){
    $('#lego-4-5').show();
  });
  $('#lego-4-6').click(function(){
    $('#lego-4-5').hide();
  });
  $('#lego-4-5').click(function(){
    $('#lego-4-5').show();
  });
  $('#lego-4-6').click(function(){
    $('#lego-4-5').show();
  });
});

 







function functiongmail(){
var name = document.getElementById("name").value;
var Email = document.getElementById("email").value;
var Message = document.getElementById("message").value;

if (name == '' || Email == '' || Message == '' ){
  alert('Please make sure you have filled in correctly ');
} else {
  alert ('Hi'+ name + 'we have received your mesage. Thank you for reacting out to us.');
}

}