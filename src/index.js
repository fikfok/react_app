const React = require("react");
const ReactDOM = require("react-dom/client");
const redux = require("redux");
const Provider = require("react-redux").Provider;
const reducer = require("./app/reducer");
const AppView = require("./app/appview");

const store = redux.createStore(reducer)

store.dispatch({
    type: 'SET_STATE',
    state: {
        phones: ['Qwe', 'Asd']
    }
})

ReactDOM.createRoot(
    document.getElementById('app')
).render(
    <Provider store={store}>
        <AppView/>
    </Provider>
)