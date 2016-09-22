// VALIDATED 9/11/16 @ http://jslint.com/.  THROWS ERRORS "Use double quotes, not single quotes"
// FOR CONCATENATED STRINGS, "Unexpected 'for'" @ LINE 124.

"use strict";

var currentuser = "";//Used for posting messages.

//'Load' functions append html to the designated divs.
//Each 'load' function removes the current html before appending its own html.

function loadLogo()
{
    $("#append-location").empty();
    $("#append-location").append(
        '<div class="col-xs-4"></div>'+
            '<div class="col-xs-4">'+
                '<img class="img-responsive" src="images\\warrior_logo.jpg">'+
            '</div>'+
        '<div class="col-xs-4"></div>');
}

function loadLoginMenu()
{
    $("#menu").empty();
    $("#menu").append(
        '<h3><span class="link"><a onclick="loadRegisterForm()">Register</a></span>'+
        '&nbsp&nbsp&nbsp<span class="link"><a onclick="loadLoginForm()">Login </a></span></h3>');
}

function loadLoginNavbar()
{
    $('#navbar').append(
        '<nav class="navbar navbar-default">'+
            '<div class="navbar-header">'+
              '<button id="hamburger" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#start-menu" aria-expanded="false">'+
                '<span class="sr-only">Toggle navigation</span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
              '</button>'+
            '</div>'+
            '<div class="dropdown-menu" id="start-menu">'+
                '<li><a data-toggle="collapse" data-target="#links-menu" onclick="location.reload(true)"><h1>Home</h1></a></li>'+
                '<li><a data-toggle="collapse" data-target="#start-menu" onclick="loadRegisterForm(), removeHeading()"><h1>Register</h1></a></li>'+
                '<li><a data-toggle="collapse" data-target="#start-menu" onclick="loadLoginForm(), removeHeading()"><h1>Login</h1></a></li>'+
            '</div>'+
        '</nav>');
}

function loadHomeMenu()
{
    $("#menu").empty();
    $("#menu").append('<h3><span class="link"><a onclick="loadLogo()">Home</a></span> '+
            '<span><a onclick="loadInfo()">Info</a></span> ' +
            '<span><a onclick="loadPhotos()">Photos</a></span> ' +
            '<span><a onclick="loadMessages()">Messages</a></span></h3>');
}

function loadHomeNavbar()
{
    $('#navbar').empty();
    $('#navbar').append(
        '<nav class="navbar navbar-default">'+
            '<div class="navbar-header">'+
              '<button id="hamburger" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#links-menu" aria-expanded="false">'+
                '<span class="sr-only">Toggle navigation</span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
              '</button>'+
            '</div>'+
            '<div class="dropdown-menu" id="links-menu">'+
                '<li><a data-toggle="collapse" data-target="#links-menu" onclick="loadLogo(), showHeading()"><h1>Home</h1></a></li>'+
                '<li><a data-toggle="collapse" data-target="#links-menu" onclick="loadInfo(), removeHeading()"><h1>Info</h1></a></li>'+
                '<li><a data-toggle="collapse" data-target="#links-menu" onclick="loadPhotos(), removeHeading()"><h1>Photos</h1></a></li>'+
                '<li><a data-toggle="collapse" data-target="#links-menu" onclick="loadMessages(), removeHeading()"><h1>Messages</h1></a></li>'+
            '</div>'+
        '</nav>');
}

function loadInfo()
{
    $("#append-location").empty();
    $("#append-location").append(
        '<div class="row">'+
            '<div class="col-xs-3"></div>'+
                '<div class="col-xs-6"><br>'+
                    '<h3>Date & Time</h3>'+
                    '<h3>December 25, 2016 at 7pm</h3><br><br>'+
                    '<h3><a href="http://www.ohbanquets.com/" target="_blank">'+
                        'The Grand Opera House Banquet Center</a></h3>'+
                '</div>'+
            '<div class="col-xs-3"></div>'+
        '</div>'+
        '<div class="row">'+
            '<div class="col-xs-2"></div>'+
                '<div class="col-xs-8">'+
                    '<iframe src="https://www.google.com/maps/'+
                    'embed?pb=!1m18!1m12!1m3!1d3110.144179370323!2d-90.48274868545829!3d38.'+
                    '78332897958842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df'+
                    '2fae79f8b719%3A0x9ab2d16625e25dbe!2sThe+Grand+Opera+House+Banquet+Center'+
                    '!5e0!3m2!1sen!2sus!4v1468983528765" width="100%" height="400" frameborder="0"'+
                    ' style="border:0"></iframe>'+
                '</div>'+
            '<div class="col-xs-2"></div>');
}

function loadPhotos()
{
    var HTMLphoto = '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
    '<img data-width="640" data-height="640" data-action="zoom" src="images/photos/%data%" style="width: 200px; height: 200px;"></div>';

    $("#append-location").empty();
    $("#append-location").append(
    '<div class="container">'+
        '<div class="col-xs-1></div>'+
        '<div class="col-xs-10"><div class="qv rc sm sp row">'+
            '<div class="qw">'+
                '<div id="pics-go-here" data-grid="images" data-target-height="150">'+
                '</div>'+
            '</div>'+
        '</div></div><div class="col-xs-1>'+
    '</div>');
    for(var p = 0; p < photo.photos.length; p+=1)
    {
        $('#pics-go-here').append(HTMLphoto.replace('%data%', photo.photos[p].file));
    }
}

function loadMessages()//Shows existing messageposts and option to create new post.
{
    $("#append-location").empty();
                $("#append-location").append(
                    '<div class="row">'+
                        '<div class="col-xs-3"></div>'+
                            '<div class="col-xs-6">'+
                                '<div id="new_message_button"><button class="buttons"'+
                                    ' onclick="createNewMessage()">'+
                                    'Create new message</button>'+
                                '</div>'+
                            '</div><br><br>'+
                        '<div class="col-xs-3"></div>'+
                    '</div>');
                for(var i = messageboard.messages.length - 1; i >= 0; i--)
                {
                    $("#append-location").append(
                        '<div class="row">'+
                            '<div class="col-xs-3"></div>'+
                            '<div class="col-xs-6">'+
                                '<div>' + messageboard.messages[i].name + ', '
                                    + messageboard.messages[i].date + '<br>'
                                    + messageboard.messages[i].post + '<br><br>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-xs-3></div>'+
                        '</div>');
                }
}

function loadRegisterForm()
{
    $("#append-location").empty();
    $("#append-location").append(
        '<div class="row">'+
            '<div class="col-xs-3"></div>'+
            '<div class="col-xs-6">'+
                '<div>'+
                    '<h1>Please create your account.</h1>'+
                    '<form name="registration" onsubmit="addUser(); return false">'+
                        '<h4>First Name: </h4>'+
                        '<input class="form-control" type="text" name="first_name"><br><br>'+
                        '<h4>Nick Name: </h4>'+
                        '<input class="form-control" type="text" name="nick_name"><br><br>'+
                        '<h4>Last Name: </h4>'+
                        '<input class="form-control" type="text" name="last_name"><br><br>'+
                        '<h4>Maiden Name: </h4>'+
                        '<input class="form-control" type="text" name="maiden_name"><br><br>'+
                        '<h4>Email: </h4>'+
                        '<input class="form-control" type="text" name="email"><br><br>'+
                        '<h4>Password: </h4>'+
                        '<input class="form-control" type="text" name="password"><br><br>'+
                        '<input class="buttons" type="submit" value="Submit">'+
                    '</form>'+
                '</div>'+
            '</div>'+
            '<div class-"col-xs-3"></div>'+
        '</div>');
     placeRegistrationCursor();
}

function loadLoginForm()
{
    $("#append-location").empty();
    $("#append-location").append(
        '<div class="row">'+
            '<div class="col-xs-3"></div>'+
            '<div class="col-xs-6">'+
                '<div>'+
                    '<h1>Please login</h1>'+
                    '<form name="login" id="bl_form" onsubmit="allowUser();'+
                    'return false;">'+
                    '<h4>email:</h4>'+
                    '<input class="form-control" id="input-field" type="text" name="email"><br><br>'+
                    '<h4>Password:</h4>'+
                    '<input class="form-control" id="input-field" type="text" name="password"><br><br>'+
                    '<input class="buttons" type="submit" value="Login"><br><br>'+
                    '</form>'+
                '</div>'+
            '</div>'+
            '<div class="col-xs-3"></div>');
    placeLoginCursor();
}

function placeRegistrationCursor()
{
    document.forms["registration"].elements["first_name"].focus();
}

function placeLoginCursor()
{
    document.forms["login"].elements["email"].focus();
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
        alert("'First name', 'last name', 'email' and 'password' must be populated.");
        placeRegistrationCursor();
    }

    else
    {
        alert("You will receive an email when your account has been created.");
        location.reload();
    }
}

function allowUser()//Executes from Login on messages page
{
    var acct = false;
    for(var i = 0; i < graduates.grads.length; i+=1)
        {
        //Authenticates user by matching user input to object in 'graduates'.
        if(document.forms["login"].email.value == graduates.grads[i].email &&
            document.forms["login"].password.value == graduates.grads[i].password)
            {
                acct = true;
                currentuser = graduates.grads[i].first_name
                + " " + graduates.grads[i].last_name;
                loadHomeMenu();
                loadHomeNavbar();
                loadLogo();
                showHeading();
                makeCookie();
                alert("You will be logged out when this window is closed.");
                return acct, currentuser;
            }
        }

    if (acct == false)
    {
        alert("No account found.");
        loadLoginForm();
    }
}

//Cookies coded @ body tag in index.html, allowUser() in script.js and here.
//Remove if not used in final version.  Cookies work in IE and Firefox but 
//not in Chrome because it does not accept local cookies.
function makeCookie()
{
    document.cookie = "user="+currentuser;
}

function getCookie()
{
    var c = document.cookie;
    if(c != "")
    {
        loadHomeMenu();
        loadHomeNavbar();
    }

    else
    {
        loadLoginMenu();
        loadLoginNavbar();
    }
}

function createNewMessage()//Creates textarea for new submission.
{
    //remove the 'create new messagepost' button
    $("#new_message_button").remove();
    //textarea for new posts, added to top of messages
    $("#append-location").prepend(//this line for loadPhotos() and loadMessages()
        // $("#messages-go-here").prepend(//this line for loadPhotosMessages()
        '<div class="row">'+
            '<div class="col-xs-3"></div>'+
            '<div class="col-xs-6">'+
                '<form name="post_message"'+
                ' onsubmit="postMessage(); return false">'+
                '<textarea name="message" id="message_text"'+
                ' rows="10" cols="50"></textarea><br><br>'+
                '<input class="buttons" type="submit" value="Post">'+
                '<input class="buttons" type="reset" onclick="loadMessages()"></form>'+
            '</div>'+
            '<div class="col-xs-3></div>'+
        '</div>');
    placeMessageCursor();
}

function postMessage()//Runs when new message is posted.
    {
        //if statement to compensate for diff between Chrome and IE.
        //IE loses currentuser after second refresh so posts messages
        //w/o names.  Chrome wont accept local cookies so needs currentuser
        //to post names with messages.
        var c = document.cookie;
        if (c.length > 5)
        {
            var start = c.indexOf("user=") + 5;
            var end = c.length;
            var username = c.substring(start, end);
        }
        else
        {
            var username = currentuser;
        }
        //if there is no text, show an alert and reload the messages.
        if (document.forms["post_message"].elements["message"].value=='')
        {
            alert("No message was created.");
            loadMessages();
        }

        //if there is text, post the text to messages.
        else
        {
            var date = new Date();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var year = date.getFullYear();
            messageboard.messages.push({"name": username, "date": month + "/" + day + "/" + year, "post": "'" + document.forms["post_message"].elements["message"].value + "'"})
            loadMessages();
        }
    }

function removeHeading()
{
    $('#heading').hide();
}

function showHeading()
{
    $('#heading').show();
}

//return false; at end of onclicks = http://stackoverflow.com/questions/9181862/onsubmit-refresh-html-form
//May need this variable later:
    // var user_input = '"first_name": "' + document.forms["login"].first_name.value +
    // '", "last_name": "' + document.forms["login"].last_name.value +
    // '", "email": "' + document.forms["login"].email.value + '"';

// these lines work in console
// graduates.grads.push({"first_name": "Scott", "last_name": "Jochim", "email": "sj@att.net"})
// messageboard.messages.push({"name": "Scott Jochim", "date": "7/12/16", "text": "Aliquam gloriatur consequuntur an qui! In audiam accusata"})
