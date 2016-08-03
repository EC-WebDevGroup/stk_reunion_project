
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
		'<h3>Location</h3>'+
		'<h3><a href="http://www.ohbanquets.com/" target="_blank">'+
		'The Grand Opera House Banquet Center</a></h3>')
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
			'<input class="buttons" type="submit" value="Submit">'+
		'</form>'+
	'</div>');
	 placeRegistrationCursor()
}

function loadBlog()
{
	$("#append-location").empty();
	$("#append-location").append('<div>'+
		'<h1>Please login to create a blog entry.</h1>'+
		'<form name="blog_login" id="bl_form" onsubmit="allowBlogger();'+
		'return false;">'+
		'<h4>First Name: </h4>'+
		'<input class="form-control" id="input-field" type="text" name="first_name"><br><br>'+
		'<h4>Last Name: </h4>'+
		'<input class="form-control" id="input-field" type="text" name="last_name"><br><br>'+
		'<h4>Email: </h4>'+
		'<input class="form-control" id="input-field" type="text" name="email"><br><br>'+
		'<input class="buttons" type="submit" value="Login"><br><br>'+
		'</form></div>');
	placeBlogLoginCursor()
}

function loadMap()
{
	$("#append-location").empty();
	$("#append-location").append('<iframe src="https://www.google.com/maps/'+
		'embed?pb=!1m18!1m12!1m3!1d3110.144179370323!2d-90.48274868545829!3d38.'+
			'78332897958842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df'+
			'2fae79f8b719%3A0x9ab2d16625e25dbe!2sThe+Grand+Opera+House+Banquet+Center'+
			'!5e0!3m2!1sen!2sus!4v1468983528765" width="400" height="400" frameborder="0"'+
			' style="border:0"></iframe>');
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
		placeRegistrationCursor();
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

// function showBlogs()
// {
// 	$("#append-location").empty();
// 	$("#append-location").append('<div><div id="new_blog_button"><button class="buttons"'+
// 	' onclick="createNewBlog()">'+'Create new blogpost</button></div></div><br><br>');
// 	for(i = blogposts.blogs.length - 1; i >= 0; i--)
// 		{
// 			$("#append-location").append('<div>' + blogposts.blogs[i].name + ', '
// 			+ blogposts.blogs[i].date + '<br>'
// 			+ blogposts.blogs[i].post + '<br><br></div>');
// 		}
// }

var currentuser = "";//Used for posting blogs.

function allowBlogger()//Executes from Login on blogs page
{
	var acct = false;
		for(i = 0; i < graduates.grads.length; i++)
	{
		//Authenticates user by matching user input to object in 'graduates'.
		if(document.forms["blog_login"].first_name.value == graduates.grads[i].first_name &&
			document.forms["blog_login"].last_name.value == graduates.grads[i].last_name &&
			document.forms["blog_login"].email.value == graduates.grads[i].email)
			{
				acct = true;
				currentuser = document.forms["blog_login"].first_name.value
				+ " " + document.forms["blog_login"].last_name.value;
				showBlogs();
				return acct, currentuser;
			}

	}
	if (acct == false)
	{
		alert("No account found.");
		loadBlog();
	}	
}

function showBlogs()//Shows existing blogposts and option to create new post.
{
	$("#append-location").empty();
				$("#append-location").append('<div><div id="new_blog_button"><button class="buttons"'+
					' onclick="createNewBlog()">'+
					'Create new blogpost</button></div></div><br><br>');
				for(i = blogposts.blogs.length - 1; i >= 0; i--)
				{
					$("#append-location").append('<div>' + blogposts.blogs[i].name + ', '
					+ blogposts.blogs[i].date + '<br>'
					+ blogposts.blogs[i].post + '<br><br></div>');
				}
}

function createNewBlog()//Creates textarea for new submission.
{
	//remove the 'create new blogpost' button
	$("#new_blog_button").remove();
	//textarea for new posts, added to top of blogs
	$("#append-location").prepend('<form name="post_blog"'+
	' onsubmit="postBlog(); return false"><textarea name="message" id="blog_text"'+
	' rows="10" cols="50"></textarea><br><br><input class="buttons"'+
	'type="submit"'+
	' value="Post"></form>');
	placeBlogCursor();
}

function placeBlogCursor()
{
	document.forms["post_blog"].elements["message"].focus();
}

function postBlog()//Runs when new blog submission is posted.
{
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	blogposts.blogs.push({"name": currentuser, "date": month + "/" + day + "/" + year, "post": "'" + document.forms["post_blog"].elements["message"].value + "'"})
	showBlogs();
}

//return false; at end of onclicks = http://stackoverflow.com/questions/9181862/onsubmit-refresh-html-form
//May need this variable later:
	// var user_input = '"first_name": "' + document.forms["blog_login"].first_name.value +
	// '", "last_name": "' + document.forms["blog_login"].last_name.value +
	// '", "email": "' + document.forms["blog_login"].email.value + '"';
	
// these lines work in console
// graduates.grads.push({"first_name": "Scott", "last_name": "Jochim", "email": "sj@att.net"})
// blogposts.blogs.push({"name": "Scott Jochim", "date": "7/12/16", "text": "Aliquam gloriatur consequuntur an qui! In audiam accusata"})
