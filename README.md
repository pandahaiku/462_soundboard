SoundPanel with Passport login 
==============

This repository serves as an example of a basic Node.js application which is using [Passport](http://passportjs.org/) as the authentication middleware for authenticating against a locally configured Mongo backend

Steps to run the app
=====================
* After cloning the repo, install the dependencies by running **npm install**
* To start the server, run **npm start** on the base directory

Prequisites
============
The server assumes that you have a local mongo instance running. This means if you have mongo installed locally, all you need to do is configure the db.js file correctly and run the mongod daemon

Closing Procedures
============
Once you kill the node process. The mongo process will keep running in the background. If you want to stop it, use the following. 
```
mongo
use admin
db.shutdownServer()

```
# cs462-157305
