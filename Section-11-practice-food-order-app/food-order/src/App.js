import {Fragment} from "react";
import Header from "./componens/Layout/Header";
import Meals from "./componens/Meals/Meals";

function App() {
  return (

      <Fragment>
          <Header/>
          <main>
              <Meals/>
          </main>
      </Fragment>
  );
}

export default App;
