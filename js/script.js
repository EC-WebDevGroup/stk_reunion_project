var map = false;

//Executes when Location link is clicked.  Toggles map.
function loadMap()
{
	if (map == false)
	{
		$("#map_location").append('<iframe id="map" src="https://www.google.com'+
			'/maps/embed?pb=!1m23!1m12!1m3!1d99499.72343907449!2d-90.6025710855511'+
			'!3d38.80115809441449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!'+
			'4m0!4m5!1s0x87df28b71ad1ab85%3A0x9890c7a35bf28817!2sst+charles+west+'+
			'high+school!3m2!1d38.801179!2d-90.5325311!5e0!3m2!1sen!2sus!4v146888677'+
			'1367" width="400" height="300" frameborder="0" style="border:0"></iframe>');
		return map = true;
	}
	else
	{
		$("#map").remove()
		return map = false;
	}
}

function placeRegistrationCursor()
{
	document.forms["registration"].elements["first_name"].focus();
}

//Executes on Submit from Registration page
function addUser()
{
	if (document.forms["registration"].first_name.value === "" || document.forms["registration"].last_name.value === "" ||
		document.forms["registration"].email.value === "")
	{
		alert("All fields must be completed.");
	}
	else
		// Alerts all three fields
	{
		alert((document.forms["registration"].first_name.value) + " " + (document.forms["registration"].last_name.value)
		 + ", " + (document.forms["registration"].email.value));
		graduates.grads.push({"first_name": (document.forms["registration"].first_name.value), 
			"last_name": (document.forms["registration"].last_name.value),
			 "email": (document.forms["registration"].email.value)})
	}

}

function placeBlogLoginCursor()
{
	document.forms["blog_login"].elements["first_name"].focus();
}

//Executes from Login on blogs page
function allowBlogger()
{
	var acct = false;
	for(i = 0; i < graduates.grads.length; i++)
	{
		//Authenticates user by matching user input to object in 'graduates'.
		if(document.forms["blog_login"].first_name.value == graduates.grads[i].first_name &&
			document.forms["blog_login"].last_name.value == graduates.grads[i].last_name &&
			document.forms["blog_login"].email.value == graduates.grads[i].email)
			{
				document.getElementById("bl_form").style.display = "none";
				$("#reg_blog_form").append('<form name="post_blog" id="bp_form" onsubmit="postBlog(); return false;"><textarea name="message" rows="10" cols="50"></textarea><br><br><input type="submit" value="Post"></form>');
				return acct = true;
			}

	}
	if (acct == false)
	{
		alert("No account found.");
		location.reload();
	}	
}

function postBlog()
{
	alert("Post successful!");

}

//return false; at end of onclicks = http://stackoverflow.com/questions/9181862/onsubmit-refresh-html-form
//May need this variable later:
	// var user_input = '"first_name": "' + document.forms["blog_login"].first_name.value +
	// '", "last_name": "' + document.forms["blog_login"].last_name.value +
	// '", "email": "' + document.forms["blog_login"].email.value + '"';
	
// these lines work in console
// graduates.grads.push({"first_name": "Scott", "last_name": "Jochim", "email": "sj@att.net"})
// blogposts.blogs.push({"name": "Scott Jochim", "date": "7/12/16", "text": "Aliquam gloriatur consequuntur an qui! In audiam accusata"})
