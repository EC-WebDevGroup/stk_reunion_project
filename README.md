This append version replaces seperate html links with html strings that are appended to the index.html page by js functions.

8/1/16
Applied bootsrap form-control to registration and blog login forms.  Debugged form reloads. Logging into blog now shows previous posts, gives option to make new post and pushes new post to array.

8/3/16 Changes per meeting with Matt:
hamburger menu button for small screen
remove map
form fields for nickname, maiden name, password.
facebook link
seperate login so that its for whole page, add password
add 'who's coming' to message board as sidebar

8/5/16
Homepage now loads to just 'Registration' and 'Login' links.
Other links appear when user logs in.
Added password field to regsistration, login and data.js.
Renamed some functions & ids(all references to 'blog' are now 'message').
Deleted loadMap().
Added 'Cancel' button to message post.

There is still no validation of Regsitration fields beyond the requirement that they not be empty.  Photos page could use some work.  Needs sponsors.  Tim is looking into adding Facebook logo/link.  Whole page could probably be improved regarding layout(some centering issues) and responsiveness.  There is no logout funtion.  No hamburger button, no maiden name or nickname. 


8/18
Made links larger on small screen.  moved column definitions for append area from index.html to append functions. Cleaned up append strings for readibility.  Still needs more complete meta tags.

8/30
Created 'if' statement for message creation for 'no text' condition.  Added facebook link from Nancy.  Validated index.html, script.js and style.css, and noted any remaining errors. Still not sure how to best implement sponsors and attendees.  Still need meta-data.

8/31
fixed problem with textbox for new messages.  was not centered; needed bootstrap columns.  Changed columns for logo to 4/4/4, to make smaller, so it will show more completely.

9/1
Added 'use-strict'.  I broke showMessages().  Fixed it by declaring 'var i' instead of 'i' in the 'for' loop.

9/2
Made photos 200x200px.

9/4
Added 'collapse' to menu and side columns.  Used function from 'http://stackoverflow.com/questions/18767789/how-to-automatically-collapse-panel-on-small-device-in-bootstrap' to cause collapse with small screen-size.

9/5
All small-screen nav is now on menu button that appears @ 676px or less.  Added removeHeading() to clear screen completely before appending, and showSponsors() to append what is normally in sidebar.  Facebook link does href to new tab.

9/8
removed 'collapse' except for navbar button dropdown menu.  now that sidebars are below main content, no need for 'collapse'.  menu and navbar controlled by css media queries.  set breakpoint to 768px to match bootstrap.  Modified register and login fields.  Re-wrote loadPhotos() so that that they are pulled from array.

9/14
Added some meta tags.  Added cookies to prevent logout on refesh.  Does not work on chrome and opera.

9/17
Added if statment to postMessage() to consider diff browsers.
if there is a cookie name of person posting message will be name in the cookie.  If there is no cookie name will be current user which would be same value.  IE needs to use the cookie for the name current user gets cleared on 2nd refresh and messages are posted w/o name.  Chrome will not allow local cookies so needs currentuser for the name.  Might be best to have session controlled by server instead of local cookies.

Remaining:
1. collapse menues when clicked off of them.
2. photos and messages on same page.(bailing on this for now)


bugs
If heading has been removed by naviation on small screen it does not re-appear when screen is made large again.