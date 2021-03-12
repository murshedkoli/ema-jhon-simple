import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Manage from './component/Manage/Manage';
import NotFound404 from './component/404/NotFound404';
import SingleProduct from './component/SingleProduct/SingleProduct';

function App() {
  return (
    <div >
     <Router>
     <Header></Header>
     
       <Switch>
         <Route path="/shop">
         
      <Shop></Shop>
         </Route>

        <Route path="/review">
          <Review></Review>
        </Route>

        <Route path="/manage">
          <Manage></Manage>
          </Route>

          <Route exact path="/">
          <Shop></Shop>
          </Route>

          <Route path="/product/:key">
            <SingleProduct></SingleProduct>
          </Route>

          <Route path="*">
          <NotFound404></NotFound404>
          </Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
