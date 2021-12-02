# node-express

Building Web Applications with Node.js and Express

### Mongo

setup MongoDB in docker container. [Official docker image](https://hub.docker.com/_/mongo)

docker pull mongo

docker run -d -p 27017:27017 --name globomantics-mongo mongo

#### Run interactive terminal in mongodb (Powershell)

docker exec -it globomantics-mongo /bin/bash
ls

start mongo client

> mongo

create new database

> use globomantics

create collection

> db.createCollection('sessions')
> db.sessions.insert or db.sessions.insertMany - insert items into collection

show databases

> show dbs

show collections

> db.sessions.find({}).pretty()

remove collesions

> db.sessions.remove({})

### Mongo client

setup MongoDB Client docker container. [Official docker image](https://hub.docker.com/r/mongoclient/mongoclient)

docker run -d -p 3000:3000 mongoclient/mongoclient

#### add mongodb package

npm i mongodb

- 4.2.1
- v3.6.6
