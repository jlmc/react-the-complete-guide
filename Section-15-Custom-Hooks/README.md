# Custom hooks

- Custom hooks are just regular functions
- Just functions which can contain stateful logic
- Outsource stateful logic into re-usable functions
- Unlike "regular functions", custom hooks can use other React hooks and React state
- With Custom hooks, you can outsource logic which you might be using in different components into a custom hook, which you can call from all these various components.


##

* The hook name must start with the prefix 'use*'.

* If you call a custom hook in one of your components and that component and that component for example registers a state or an effect, then this state and effect will tied to the component in which you use your custom hook,.
