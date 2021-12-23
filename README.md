# TemedicaTest

## Prerequisite
* NodeJS
* Xcode or Android Emulator

## BACKEND - tbackend

The backend was built on NestJS, which uses typescript by default. 
By using docker-compose, the set up should be easy as long as you have docker.

Use the following commands to run the nest application

* ```cd tbackend```

* ```docker-compose up```

The backend runs on port 4000 and was done in both GraphQL and REST, 
to access the graphql playground, go to `http://localhost:4000/graphql` after running it

To access the RESTful apis, go to `http://localhost:4000/v1/drugs`


## MOBILE - tmobile

This was done in react-native, you need to have at least an Xcode to run this on macOS

Use the following commands

* ```cd tmobile```

* ```yarn install```

* ```npx react-native run-ios``` for iOS and ```npx react-native run-android``` for android


## FRONTEND - tfrontend

This was done in NextJS, 

Use the following commands

* ```cd tfrontend```

* ```yarn install```

* ```yarn dev```

And you can access this by going to `http://localhost:3000`

I integrated with Apollo client from the frontend but I can also implement with REST and Redux.
I also used debounce to limit excessive calls to the backend.
All frontend applications are by default pointing to http://localhost:4000/graphql