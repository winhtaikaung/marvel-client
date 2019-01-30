
  

# React Marvel Character Browser

> Simple Marvel Character View Application 

This projected is created with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)

## Prerequisite
Node version should be more than 8
`Node version >= 8`

## Available Scripts

Before you start you may have to run following command in project directory

### `npm install`
### `yarn install`

After all installation in the project directory, you can run:

### `npm start` 
### `yarn start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Username and password
 default username `syndelife@cray.co`
 default password `123456`
 
 
The page will reload if you make edits.

You will also see any lint errors in the console.
 


### `npm test`
### `yarn test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
 

### `npm run build`
### `yarn build`


Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
  
  
  
 

## Available application & screen routes

| RouteName |Description | path|
|--|--|--|
|**Login**| Login Screen|`http://localhost:3000/app/login`
|**Register**| Register Screen | `http://localhost:3000/app/register`
|**Home**| Main Application|`http://localhost:3000/app/p/home`
|**Detail Drawer**| Direct detail drawer | `http://localhost:3000/app/p/home/{:character_id}` eg.http://localhost:3000/app/p/home/1017100


## Dependencies list
| Library Name |Version |Description |
|--|--|--|
|antd| ^3.12.4| (UI Framework Library)
|axios|^0.18.0| (Promised Based Http client)
|connected-react-router|^5.0.1|(Connected React Router)
|formik|^1.4.2|(Light weight form management library)
|history|^4.7.2|(Session history management Library)
|hoist-non-react-statics|^3.3.0|(Copying non-react specific statics to child component)
|immer|^1.12.1|(Light weight immutable library without changing datastructure)
|md5|^2.2.1|(hashing md5 for marvel api requests)
|react|^16.2.0|
|react-dom|^16.2.0|
|react-redux|^5.1.1|(State management library)
|react-router-dom|^4.3.1|Routing components 
|react-scripts|2.1.3|(scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app)
|redux-logger|^3.0.6|(Logging Redux store changes)
|redux-saga|^1.0.0|(Provide application side effects for asynchronous process using es6 [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*))
|reselect|^4.0.0|(Selector library for Redux Store)


## Test dependencies
Testing was done by using [enzyme](https://github.com/airbnb/enzyme)
  