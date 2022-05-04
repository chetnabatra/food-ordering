import { createStore } from "redux";
import rootred from "./redux/reducers/main";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
    rootred,
    composeWithDevTools()
    
);


export default store;