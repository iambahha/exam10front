import React from 'react';
import {Container} from 'reactstrap'
import Posts from "./containers/Posts";
function App() {
  return (
    <div className="App">
      <Container>
        <Posts />
      </Container>
    </div>
  );
}

export default App;
