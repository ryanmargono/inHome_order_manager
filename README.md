# README.md
## Installation
`yarn install`

## Execution
`npm start`

`localhost:3000`

## Design Decisions

### Folder Structure

    ├── src                   
    │   ├── components  # reusable components
    │   ├── hocs    # higher order components
    │   ├── stores  # redux actions, effects, and reducers
    │   ├── styles  # css
    │   ├── utils   # utility functions
    │   ├── views   # components that are rendered by route
    │   └── index.js    # app entry point and routes  

Like with the backend, I wanted to approach this application as I would in a real world application. The benefits similarly from the backend architecture. To reiterate, seperation of concerns lead to easier unit testing and the organization also helps onboarding engineers in a scaling team.

### Ant Design UI Libary 

Like in the real world with time constraints and a small team, using UI libraries can help push out polished looking applications quickly. In the past, I’ve used Material UI Libraries but I wanted to explore a new one for this assignment and Ant Design was gaining a lot of traction on Reddit.

Most custom styling was done using in-line styling.

### React-Redux

Typically, react-redux is used in situations where state needs to be globally available, such as communication between components with no common ancestry. This application could have gone without it, since each view can pass down the required information to their children. Despite this, react-redux is an important tool to know and I wanted to showcase that I knew how to use it. It helps with rerendering the view when edits / deletes are made without having to retrieve an updated list from the backend. However, since there are relational data, editing would require editing all assosiated states in the redux store. To keep things simple, I refreshed the state with the latest data from the backend when a manage view is rendered. In the future, this can be made more efficient by using react-ORM so that the backend wouldn’t have the requested in order to keep data in sync.

## Limitations and Improvements

	* writing tests.
	* more error handling.
	* using redux-toolkit to simplify creating redux actions and reducers.
	* using react-ORM to deal with many to many relationships in redux reducers.


