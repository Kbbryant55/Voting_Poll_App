# Summary

This app implements the MERN tech stack (MongoDB, Express, React, and NodeJs) in order to create a poll in real time.

# Prerequisites

1. Node version 18.10.0
2. MongoDB (I installed on Windows https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
3. Used yarn 1.22.4


## Description

This app used the MERN tech stack (MongoDB, Express, React, and NodeJs) in order to create a poll in real time.

### Run Instructions

1. Open up 3 separate terminals
2. On the 1st terminal, start a local mongo database
  
  ```
  mongosh  (mongoD for mac and linux)
  ```
3. In the second terminal, in order to start with some data, run:
  ```
  mongosh pollAPI < pollsJson.js
  ```
4.  Still in the 2nd terminal, start the express server for the polls API 
  ```
  yarn server
  ```
5. In the final tab, run UI in development mode with
  ```
  yarn start
  ```
  
  

