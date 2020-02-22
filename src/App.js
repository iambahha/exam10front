import React from 'react';
import {Container} from 'reactstrap'
import Posts from "./containers/Posts";
import AddNewPost from "./containers/AddNewPost";
import SinglePost from "./containers/SinglePost";
import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/news" exact component={Posts} />
          <Route path="/newpost" exact component={AddNewPost} />
          <Route path="/news/:id" exact component={SinglePost} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
