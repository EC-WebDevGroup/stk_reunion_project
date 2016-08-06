var currentuser = "";//Used for posting messages.

//'Load' functions append html to the div with id="append-location". 
//Each 'load' function removed the current html before appending
//its own html.
function loadLogo()
{
	$("#append-location").empty();
	$("#append-location").append('<img class="img-responsive" src="images\\warrior_logo.jpg">')
}

function loadInfo()
{
	$("#append-location").empty();
	$("#append-location").append('<div><br><br>'+
		'<h3>Date & Time</h3>'+
		'<h3>December 25, 2016 at 7pm</h3><br><br>'+
		'<h3><a href="http://www.ohbanquets.com/" target="_blank">'+
		'The Grand Opera House Banquet Center</a></h3>'+
		'<iframe src="https://www.google.com/maps/'+
		'embed?pb=!1m18!1m12!1m3!1d3110.144179370323!2d-90.48274868545829!3d38.'+
			'78332897958842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df'+
			'2fae79f8b719%3A0x9ab2d16625e25dbe!2sThe+Grand+Opera+House+Banquet+Center'+
			'!5e0!3m2!1sen!2sus!4v1468983528765" width="400" height="400" frameborder="0"'+
			' style="border:0"></iframe>')
}

function loadPhotos()
{
	$("#append-location").empty();
	$("#append-location").append(
	'<div class="qv rc sm sp row">'+
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
	$("#append-location").empty();
	$("#append-location").append(
	'<div>'+
		'<h1>Please create your account.</h1>'+
		'<form name="registration" onsubmit="addUser(); return false">'+
			'<h4>First Name: </h4>'+
			'<input class="form-control" type="text" name="first_name"><br><br>'+
			'<h4>Last Name: </h4>'+
			'<input class="form-control" type="text" name="last_name"><br><br>'+
			'<h4>Email: </h4>'+
			'<input class="form-control" type="text" name="email"><br><br>'+
			'<h4>Password: </h4>'+
			'<input class="form-control" type="text" name="password"><br><br>'+
			'<input class="buttons" type="submit" value="Submit">'+
		'</form>'+
	'</div>');
	 placeRegistrationCursor()
}

function loadLogin()
{
	$("#append-location").empty();
	$("#append-location").append('<div>'+
		'<h1>Please login to post to the message board.</h1>'+
		'<form name="message_login" id="bl_form" onsubmit="allowUser();'+
		'return false;">'+
		'<h4>First Name: </h4>'+
		'<input class="form-control" id="input-field" type="text" name="first_name"><br><br>'+
		'<h4>Last Name: </h4>'+
		'<input class="form-control" id="input-field" type="text" name="last_name"><br><br>'+
		'<h4>Password: </h4>'+
		'<input class="form-control" id="input-field" type="text" name="password"><br><br>'+
		'<input class="buttons" type="submit" value="Login"><br><br>'+
		'</form></div>');
	placeLoginCursor()
}

function placeRegistrationCursor()
{
	document.forms["registration"].elements["first_name"].focus();
}

function placeLoginCursor()
{
	document.forms["message_login"].elements["first_name"].focus();
}

function placeMessageCursor()
{
	document.forms["post_message"].elements["message"].focus();
}

//Executes on Submit from Registration page
function addUser()
{
	if (document.forms["registration"].first_name.value === "" || document.forms["registration"].last_name.value === "" ||
		document.forms["registration"].email.value === "" || document.forms["registration"].password.value === "")
	{
		alert("All fields must be completed.");
		placeRegistrationCursor();
	}

	else
	{
		alert("You will receive an email when your account has been created.");
		location.reload();
		// alert((document.forms["registration"].first_name.value) + " " + (document.forms["registration"].last_name.value)
		//  + ", " + (document.forms["registration"].email.value) + ", password is " + document.forms["registration"].password.value);
		// graduates.grads.push({"first_name": (document.forms["registration"].first_name.value), 
		// 	"last_name": (document.forms["registration"].last_name.value),
		// 	 "email": (document.forms["registration"].email.value),
		// 	 "password": (document.forms["registration"].password.value)})
	}

}

function allowUser()//Executes from Login on messages page
{
	var acct = false;
		for(i = 0; i < graduates.grads.length; i++)
	{
		//Authenticates user by matching user input to object in 'graduates'.
		if(document.forms["message_login"].first_name.value == graduates.grads[i].first_name &&
			document.forms["message_login"].last_name.value == graduates.grads[i].last_name &&
			document.forms["message_login"].password.value == graduates.grads[i].password)
			{
				acct = true;
				currentuser = document.forms["message_login"].first_name.value
				+ " " + document.forms["message_login"].last_name.value;
				loadHome();
				loadLogo();
				return acct, currentuser;
			}

	}
	if (acct == false)
	{
		alert("No account found.");
		loadLogin();
	}	
}

function loadHome()
{
	$("#menu").empty();
	$("#menu").append('<span><a onclick="loadLogo()">Home </a></span>| '+
			'<span><a onclick="loadInfo()">Info </a></span>| ' +
			'<span><a onclick="loadPhotos()">Photos </a></span>| ' +
			'<span><a onclick="showMessages()">Message Board </a></span>')
}

function showMessages()//Shows existing messageposts and option to create new post.
{
	$("#append-location").empty();
				$("#append-location").append('<div><div id="new_message_button"><button class="buttons"'+
					' onclick="createNewMessage()">'+
					'Create new message</button></div></div><br><br>');
				for(i = messageboard.messages.length - 1; i >= 0; i--)
				{
					$("#append-location").append('<div>' + messageboard.messages[i].name + ', '
					+ messageboard.messages[i].date + '<br>'
					+ messageboard.messages[i].post + '<br><br></div>');
				}
}

function createNewMessage()//Creates textarea for new submission.
{
	//remove the 'create new messagepost' button
	$("#new_message_button").remove();
	//textarea for new posts, added to top of messages
	$("#append-location").prepend('<form name="post_message"'+
	' onsubmit="postMessage(); return false">'+
	'<textarea name="message" id="message_text"'+
	' rows="10" cols="50"></textarea><br><br>'+
	'<input class="buttons" type="submit" value="Post">'+
	'<input class="buttons" type="reset" onclick="showMessages()"></form>');
	placeMessageCursor();
}

function postMessage()//Runs when new message is posted.
{
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	messageboard.messages.push({"name": currentuser, "date": month + "/" + day + "/" + year, "post": "'" + document.forms["post_message"].elements["message"].value + "'"})
	showMessages();
}

//return false; at end of onclicks = http://stackoverflow.com/questions/9181862/onsubmit-refresh-html-form
//May need this variable later:
	// var user_input = '"first_name": "' + document.forms["message_login"].first_name.value +
	// '", "last_name": "' + document.forms["message_login"].last_name.value +
	// '", "email": "' + document.forms["message_login"].email.value + '"';
	
// these lines work in console
// graduates.grads.push({"first_name": "Scott", "last_name": "Jochim", "email": "sj@att.net"})
// messageboard.messages.push({"name": "Scott Jochim", "date": "7/12/16", "text": "Aliquam gloriatur consequuntur an qui! In audiam accusata"})
