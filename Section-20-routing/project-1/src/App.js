import {Route} from 'react-router-dom';
import Products from "./components/pages/Products";
import Welcome from "./components/pages/Welcome";

function App() {

    return (
      <div>
          <Route path="/welcome">
              <Welcome/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
      </div>
    );


/*  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );*/
}

export default App;
