// import 3 part package in node
const redux = require('redux');


// 2. reducer function, the output should be the same type of the input.
// Receive the previous status and produces the next status
const counterReducerFunction = (state = { counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }



    return state
}


// 1. create the store
//const store = redux.createStore();
// 3. passing the reduce function to the store
const store = redux.createStore(counterReducerFunction);

console.log(`--> Initial State: ${JSON.stringify(store.getState())}`)

// 4. now we need a consumer/subscriber function
// this is only  consult the tore
const counterSubscriberFunction = () => {
    const latestState = store.getState();
    console.log(latestState)
};

// 5. add the subscriber
store.subscribe(counterSubscriberFunction)


// 6. dispatch an action
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
