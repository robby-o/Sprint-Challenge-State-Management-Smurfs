1. What problem does the context API help solve?

Prop drilling! The context API allows you to 'skip' over passing props to children components that don't need them.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are like methods that you use to update the state given certain UI interactions.

Reducers are the logic which 'read' the actions and using the action and current state, update the state accordingly.

The store is the top level location where the initial and ultimately final state 'live' which will be accessed by any components that need to use state. This is why it's known as a 'single source of truth' because all state needs are 'stored' here and come from here.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application wide state is like what the store contains. It's state that any components could subscribe to. Whereas component state would be local to that component. It's not always necessary for every piece of state to be accessable to all components such as when using forms. Often the forms have small pieces of state logic that only need to be submitted application wide when the form is complete.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows for asynchronous actions interacting with the store. It intercepts any actions before they go to the store and only once the asynchronous logic is complete does that action hit the store. Our action creators now have at least 3 'dispatches' that link with the store detailing a start, success, and failure of that particular action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like them all. Context is very simple and comes with React so that's nice while Redux and Thunk are powerful and I can see the use for them.
