// VALIDATED @ http://jslint.com/.  THROWS ERRORS "Use double quotes, not single quotes"
// FOR CONCATENATED STRINGS, "'['xxx'] is better written in dot notation", "Unexpected 'for'" 
// @ LINE 170, "Expected ';' and instead saw ','" @ LINE 182

"use strict";

var currentuser = "";//Used for posting messages.

//'Load' functions append html to the div with id="append-location".
//Each 'load' function removes the current html before appending
//its own html.
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
    $("#append-location").empty();
    $("#append-location").append(
    '<div class="container">'+
        '<div class="col-xs-1></div>'+
        '<div class="col-xs-10"><div class="qv rc sm sp row">'+
            '<div class="qw">'+
                '<div data-grid="images" data-target-height="150">'+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div>'+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div>'+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div>'+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div>'+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div> '+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div>'+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div> '+
                    '<div style="margin-bottom: 10px; margin-right: 10px; display: inline-block; vertical-align: bottom;">'+
                    '<img data-width="640" data-height="640" data-action="zoom" src="https://placekitten.com/640/640" style="width: 200px; height: 200px;">'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div></div><div class="col-xs-1>'+
    '</div>');
}

function loadRegister()
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
                        '<h4>Last Name: </h4>'+
                        '<input class="form-control" type="text" name="last_name"><br><br>'+
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

function loadLogin()
{
    $("#append-location").empty();
    $("#append-location").append(
        '<div class="row">'+
            '<div class="col-xs-3"></div>'+
            '<div class="col-xs-6">'+
                '<div>'+
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
    }
}

function allowUser()//Executes from Login on messages page
{
    var acct = false;
    for(i = 0; i < graduates.grads.length; i+=1)
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
    $("#menu").append('<span class="link"><a onclick="loadLogo()">Home</a></span> '+
            '<span class="link"><a onclick="loadInfo()">Info</a></span> ' +
            '<span class="link"><a onclick="loadPhotos()">Photos</a></span> ' +
            '<span class="link"><a onclick="showMessages()">Messages</a></span>');
}

function showMessages()//Shows existing messageposts and option to create new post.
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

function createNewMessage()//Creates textarea for new submission.
{

    //remove the 'create new messagepost' button
    $("#new_message_button").remove();
    //textarea for new posts, added to top of messages
    $("#append-location").prepend(
        '<div class="row">'+
            '<div class="col-xs-3"></div>'+
            '<div class="col-xs-6">'+
                '<form name="post_message"'+
                ' onsubmit="postMessage(); return false">'+
                '<textarea name="message" id="message_text"'+
                ' rows="10" cols="50"></textarea><br><br>'+
                '<input class="buttons" type="submit" value="Post">'+
                '<input class="buttons" type="reset" onclick="showMessages()"></form>'+
            '</div>'+
            '<div class="col-xs-3></div>'+
        '</div>');
    placeMessageCursor();
}

function postMessage()//Runs when new message is posted.
    {
        //if there is no text, show an alert and reload the messages.
        if (document.forms["post_message"].elements["message"].value=='')
        {
            alert("No message was created.");
            showMessages();
        }

        //if there is text, post the text to messages.
        else
        {
            var date = new Date();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var year = date.getFullYear();
            messageboard.messages.push({"name": currentuser, "date": month + "/" + day + "/" + year, "post": "'" + document.forms["post_message"].elements["message"].value + "'"})
            showMessages();
        }
    }

//The next two functions are unsed on small screens only.
//removeHeading() gets rid text above the logo.
//showSponsors() appends html that is normally on sidebar.
function removeHeading()
{
    $('#heading').remove();
}

function showSponsors()
{
    $("#append-location").empty();
    $('#append-location').append('<h4>Our Supporters</h4>'+
                        '<a href="http://www.rei.com" target="_blank">'+
                            '<div class="business_card">'+
                                'Acme Inc'+
                            '</div>'+
                        '</a>'+
                        '<a href="http://www.rei.com" target="_blank">'+
                            '<div class="business_card">'+
                                'Acme Inc'+
                            '</div>'+
                        '</a>'+
                        '<a href="http://www.rei.com" target="_blank">'+
                            '<div class="business_card">'+
                                'Acme Inc'+
                            '</div>'+
                        '</a>'
        );
}

//Hides menu and sidebars on small screens. src=http://stackoverflow.com/questions/18767789/how-to-automatically-collapse-panel-on-small-device-in-bootstrap
$(document).ready(function()
{
  if ($(window).width() > 676)
  {  
    $('.collapse').addClass('in');
  }
});

$(window).resize(function()
{
  if ($(window).width() > 676)
  {  
    $('.collapse').addClass('in');
    $('#navbar').removeClass('collapse in');
  }

  if ($(window).width() <= 676)
  {  
    $('.collapse').removeClass('in');
    // $('#navbar').addClass('collapse in');
  }
});

//return false; at end of onclicks = http://stackoverflow.com/questions/9181862/onsubmit-refresh-html-form
//May need this variable later:
    // var user_input = '"first_name": "' + document.forms["message_login"].first_name.value +
    // '", "last_name": "' + document.forms["message_login"].last_name.value +
    // '", "email": "' + document.forms["message_login"].email.value + '"';

// these lines work in console
// graduates.grads.push({"first_name": "Scott", "last_name": "Jochim", "email": "sj@att.net"})
// messageboard.messages.push({"name": "Scott Jochim", "date": "7/12/16", "text": "Aliquam gloriatur consequuntur an qui! In audiam accusata"})
