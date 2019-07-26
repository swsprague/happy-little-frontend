# The Bob Ross-O-Mizer

### PROJECT SYNOPSIS:
I wanted to create a Bob Ross video hub and randomizer, in which users can (eventually) access all 31 seasons of the show, make custom playlists with their favorite episodes, and be able to press a "Random" button that will cue a random episode of the show each time it's pressed. Eventually I'd like to communicate directly with the Youtube API to acquire the episodes and embed them into my app, but form now I'm using the Youtube Embed iFrame functionality to populate the videos.

I came up with the idea through my love of Bob Ross's show, *The Joy of Painting*. I wanted to create something that would cut out the process of navigating Youtube to track down episodes of the show, and would be solely dedicated to presenting the show with an easy-to-use site. The main motivation for this was honestly my own personal use for it, as I watch *The Joy of Painting* on a daily basis, oftentimes in order to help me go to sleep.

I've spoken with many people about their love of the show, but I've been surprised to learn that most people are unaware the show is available to watch in its entirety for free on Youtube. So I decided for the sake of both myself and others I'd create a simple application that cuts out the clutter and distractions of Youtube and only focuses on the show.

#### Front-end Github:
###### https://github.com/swsprague/happy-little-frontend

#### Front-end URL:
###### https://swsprague.github.io/happy-little-frontend/

#### Back-end Github:
###### https://github.com/swsprague/happy-little-backend

#### Back-end URL:
###### https://happy-little-backend.herokuapp.com/

### Enjoy these ugly hand-drawn ERD / wireframes!

#### ERD:

![ERD][logo]

[logo]: https://i.imgur.com/n9s4VKA.jpg "Ross-O-Mizer"

#### WIREFRAME:

#### Part 1
![WIREFRAME][frame]

[frame]: https://i.imgur.com/voBTgj0.jpg

#### Part 2
![p2][wfp2]

[wfp2]: https://i.imgur.com/7OXKsMn.jpg

#### Technologies Used:
###### - Javascript
###### - jQuery
###### - Handlebars
###### - Rails
###### - SQL / PostGresSQL
###### - Ruby
###### - HTML
###### - AJAX
###### - JSON
###### - Git / Github
###### - Grit
###### - Determination
###### - Blood
###### - Sweat
###### - Heroku
###### - Grunt Serve

### USER STORIES:

As a user, I want to sign up using an email and password, and be able to sign in with these credentials as well.

As a user, I want to sign out easily and securely.

As a user, I want to be able to change my password as necessary.

As a user, I want to be able to view episodes and choose one I want to watch.

As a user, I want to be able to create an episode playlist by selecting episodes to add to my lists.

As a user, I want to be able to remove an episode from a playlist I've created.

As a user, I want to be able to view my previously created playlists.

As a user, I want to be able to delete my previously created playlists.

As a user, I want to be able to update the title of my playlist.

As a user, I want to be able to play a random episode of the show at the press of a button.

### TABLES / COLUMNS:

##### Users
| ID | Email | Playlist
| ---- | ---- | ---- | ----
| integer | string | array

##### Playlists
| ID | user_id | videos |
| ---- | ---- | ----
| integer | integer | array

##### Join Table: Playlist_Videos
| ID | playlist_id | video_id |
| ---- | ---- | ----
| integer | reference | reference

##### Videos
| ID | name | episode_Number | season_number
| ---- | ---- | ---- | ----
| integer | string | integer | integer

### ROUTING:
###### post - sign-up
###### post - sign-in
###### delete - sign-out
###### patch - change-pw

###### get - list all videos in a season - index
###### get - a single episode - show
###### get - a random episdoe - show

###### get - all user playlists - index
###### get - one playlist - show
###### post - create new playlist - create
###### patch - change playlist name
###### delete - delete a playlist

### Future Features:
###### - Styling!
###### - Remove Episodes from Playlist without deleting playlist
###### - Block Adding Duplicate Episodes to Playlists
###### - Add 'Add To Playlist' Functionality to all Episodes Upon Indexing.
###### - Show "change password" and "password hints" if Sign-In Fails More Than Three Times
