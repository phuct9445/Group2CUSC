function check_email(email) 
{
			if (eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$", email))
			return true;
	  		return false;
}
function formValid()
{
	f = document.frmInfo;
	if(f.fullname.value == "")
	{
		alert("Username can't be empty");
		f.fullname.focus();
		return false;
	}
	if(f.phone.value == "")
	{
		alert("Phone Number can't be empty");
		f.phone.focus();
		return false;
	}
	if(f.email.value == "")
	{
		alert("Invalid mail");
		f.email.focus();
		return false;
	}
	{
		alert("Booking tickets successfully");
		return true;
	}
}