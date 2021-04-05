import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";

import PhotosByAlbum from "./domains/components/PhotoByAlbum";
import  {Home}  from "./domains/Home";
import {Users} from "./domains/components/Users";
import  {DisplayAPhoto} from "./domains/components/DisplayAPhoto";
import {usePhotos}  from "./domains/Services/photosApi";


const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Header = styled.header`
  height: 150px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #33ad73;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
  }
  & > a {
    margin-right: 20px;
  }
`;


const Content = styled.div`
  padding: 20px;
`;

function App() {

  const [limit, setLimit] = useState(25);
  const { loading, data: photos, error } = usePhotos();

  return (
    <div className="App">
      <Main>
        <Router>
          <Header>
              <DisplayAPhoto photoUrl={photos[0]?.url} />
              <nav style={{ display: "flex" }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/photos-by-album">Photos by Album</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </nav>
          </Header>

          <Content>
            <Switch>
              <Route path="/photos-by-album">
                <PhotosByAlbum
                  limit={parseInt(limit)}
                  setLimit={setLimit}
                  photos={photos}
                />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                {loading ? (
                  <div>Loading</div>
                ) : error ? (
                  <div>Error</div>
                ) : (
                  <Home setLimit={setLimit} limit={parseInt(limit)} photos={photos} />
                )}
              </Route>
            </Switch>
          </Content>

          <footer>Ceci est le footer</footer>
        </Router>
      </Main>
    </div>
  );
}

export default App;
