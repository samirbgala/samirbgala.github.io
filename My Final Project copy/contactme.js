$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (name == '' || email == '' || password == '' || cpassword == '') {
alert("Please fill all fields...!!!!!!");
});
$.post("register.php", {
name1: name,
email1: email,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("form")[0].reset();
}
alert(data);
});
}
});
});
