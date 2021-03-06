## NZX test project

### Introduction

All this app does is display information about the 2014 election, it calls an external api(nodejs), makes a small modification to the data and then passes it on to React which then displays the data to the user.

It's important to note that this app doesn't do anything that would be considered useful. I was hoping to make something that was a bit more obvious in terms of functionality but time constraints have limited what I could achive.

This app is currently running on a Digital Ocean droplet at http://104.131.1.114

### The external API

I tried to get this working with sheetsu but I couldn't get ActiveResource to talk to the sheetsu generated api properly. I stuggled a little bit with debugging ActiveResource as I'd never used it before.

In the end I just ended up deploying a node server to serve a hard coded json object in a simular way to what I was trying to get sheetsu to do.

The node project I wrote for this is avalible at https://github.com/thomashorrobin/nzx-api and the server for it is running at http://159.203.108.59/api/parties.json

### The rails project

The rails project doesn't do a lot in this app unfortunately. I couldn't really think of any useful transformations to do to my data so I just calculated the total vote and added it to the ActiveResource object so it could be passed down to React.

Rails does host React though and I have successfully not used the React GEM.

To a certain extent you'll just have to trust me that I can program with rails. One app I've done the probably better reflects my ability with rails can be found here: https://github.com/thomashorrobin/TwitterAppV5 

### React

The React portion of this app basically just displays data to the user. The user can navigate between different parties and react rerenders to display data.

This is obviously a very basic use of React but I've focused the functionality on being useful to the interview and covering all of reacts basics.


### conclusion

I enjoyed linking all this stuff up. I'd never build a React app without the help of a scaffolder so that was exciting as well. However isn't the most elegant code I've written, I just didn't have time to refactor anything I'm sorry. I hope it's good enough that you guys can follow it along.
