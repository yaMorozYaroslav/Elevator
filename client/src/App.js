import {Provider} from 'react-redux';
import configureStore from './store/configurestore';
import Posts from './store/components/posts';
//import "./App.css";
const store = configureStore()

function App(){
  return(
   <Provider store={store}>
      <Posts/>
    </Provider>
    );
}
export default App;