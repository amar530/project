
	
	function login() {



		var username=document.getElementById('username').value;
		var password=document.getElementById('password').value;

		if (!username) 
		{
			document.getElementById('username').style.border="thin solid #ff0000";
			document.getElementById('changeImage').src="images/pngs/starwars-stormtrooper.png";
			document.getElementById('error').innerHTML="please enter username";


		}
		else if (!password) {

			document.getElementById('password').style.border="thin solid #ff0000";

			document.getElementById('changeImage').src="images/pngs/starwars-stormtrooper.png";

			document.getElementById('error').innerHTML="please enter password";


		}
		else if (username!="yoda") 
		{	
			document.getElementById('username').style.border="thin solid #ff0000";

			document.getElementById('changeImage').src="images/pngs/starwars-stormtrooper.png";

			document.getElementById('error').innerHTML="The username you have entered does not match";

		}
		else if (password!="dogbah") 
		{	
			document.getElementById('password').style.border="thin solid #ff0000";

			document.getElementById('changeImage').src="images/pngs/starwars-stormtrooper.png";

			document.getElementById('error').innerHTML="The password you have entered does not match the username";

		}
		else
		{	
			document.getElementById('changeImage').src="images/pngs/login1.png";
			document.getElementById('username').style.border="thin solid #00d800";
			document.getElementById('password').style.border="thin solid #00d800";


			window.location.href="page2.html";
		}

	}
	
	function logoutPage() {
		window.location.href="index.html";

	}
	$('#details').click(function() {
		
		var result=$('input[type="radio"]:checked');
		if (result.length>0) {

			window.location=result.val();
		}
	});

function goBack() {


	window.location.href="page2.html"
	// body...
}




function preventBack() {

	window.history.forward();

}
setTimeout("preventBack()",0);
window.onunload()=function() {null};



