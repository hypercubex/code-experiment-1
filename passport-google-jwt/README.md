This demonstrate how to get user info from Google by using googleapis lib

## Prerequisites
- Google+ API
- Google People API Enabled

## Install

1. npm i
1. rename the credentials.example.js and fill in necessary information

## run
[PORT=DESIRED_PORT] npm start

## Logging
This project uses bunyan for logging, for better view, you might want to run the followings:
> npm i bunyan -g

> [PORT=DESIRED_PORT] npm start | bunyan

## Note

1. build a protected page
1. create a URL for login
1. create a callback URL for OAuth2
1. retrieve user info AND store the user info in the callback handling
1. use jsonwebtoken#sign to issue JWT
1. use passport to authenticate protected URL(s) with jwt strategy

## User Flow

1. start the server
1. go to http://localhost:8080/user
1. use the link return in step 2 to proceed
1. after successful login, copy the token returned
1. go to http://localhost:8080/user?token=THE_TOKEN_FROM_STEP_4
1. The user profile should be as the same as the previous oue, except marked '"from": "jwt"'
