import {Fragment} from "react";
import Header from "./componens/Layout/Header";
import Meals from "./componens/Meals/Meals";
import Cart from "./componens/Card/Cart";

function App() {
  return (

      <Fragment>
          <Cart></Cart>
          <Header/>
          <main>
              <Meals/>
          </main>
      </Fragment>
  );
}

export default App;
