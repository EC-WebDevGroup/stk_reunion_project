
//'Load' functions append html to the div with id="append-location". 
//All appended html has id="content".  
//Each 'load' function removed the current html before appending
//its own html.
function loadLogo()
{
	$("#content").remove();
	$("#append-location").append('<img class="img-responsive" id="content" src="images\\warrior_logo.jpg">')
}

function loadInfo()
{
	$("#content").remove();
	$("#append-location").append('<div id="content">'+
		'<h3>Date & Time</h3>'+
		'<h4>December 25, 2016 at 7pm</h4><br>'+
		'<h3>Location</h3>'+
		'<h4>The Grand Opera House Banquet Center</h4>')
}

function loadPhotos()
{
	$("#content").remove();
	$("#append-location").append(
	'<div class="qv rc sm sp row" id="content">'+
		'<div class="qw">'+
			'<h5 class="ald"><a href="photos.html">Photos</a></h5>'+
			'<div data-grid="images" data-target-height="150">'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="320" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>	'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>	'+
				'<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
				'<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 117px; height: 118px;">'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>')
}

function loadRegister()
{
	$("#content").remove();
	$("#append-location").append('<div id="content">'+
	'<h1>Please create your account.</h1>'+
		'<form name="registration" onsubmit="addUser()">'+
			'<h4>First Name: </h4>'+
			'<input id="input-field" type="text" name="first_name"><br><br>'+
			'<h4>Last Name: </h4>'+
			'<input id="input-field" type="text" name="last_name"><br><br>'+
			'<h4>Email: </h4>'+
			'<input id="input-field" type="text" name="email"><br><br>'+
			'<input type="submit" value="Submit">'+
		'</form>'+
		'<br>'+
	'</div>');
	 placeRegistrationCursor()
}

function loadBlog()
{
	$("#content").remove();
	$("#append-location").append('<div id="content">'+
		'<h1>Please login to create a blog entry.</h1>'+
		'<form name="blog_login" id="bl_form" onsubmit="allowBlogger();'+
		'return false;">'+
		'<h4>First Name: </h4>'+
		'<input id="input-field" type="text" name="first_name"><br><br>'+
		'<h4>Last Name: </h4>'+
		'<input id="input-field" type="text" name="last_name"><br><br>'+
		'<h4>Email: </h4>'+
		'<input id="input-field" type="text" name="email"><br><br>'+
		'<input type="submit" value="Login"><br><br>'+
		'</form></div>');
	placeBlogLoginCursor()
}

function loadMap()
{
	$("#content").remove();
	$("#append-location").append('<iframe id="content" src="https://www.google.com/maps/'+
			'embed?pb=!1m18!1m12!1m3!1d3110.144179370323!2d-90.48274868545829!3d38.'+
			'78332897958842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df'+
			'2fae79f8b719%3A0x9ab2d16625e25dbe!2sThe+Grand+Opera+House+Banquet+Center'+
			'!5e0!3m2!1sen!2sus!4v1468983528765" width="400" height="400" frameborder="0"'+
			' style="border:0" allowfullscreen></iframe>');
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
