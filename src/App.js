import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import PostPage from "./pages/PostPage";
import Navigation from "./components/Navigation";
import NewPostPage from "./pages/NewPostPage";
import PostDetailPage from "./pages/PostDetailPage";
import { Auth } from "./pages/auth/Auth";
import { PrivateRoute } from "./helpers/PrivateRoute";
import CategoryPage from "./pages/category/CategoryPage";
import NewCategoryPage from "./pages/category/NewCategoryPage";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-[300px] bg-gray-100 p-4 overflow-auto">
              <Navigation />
            </div>
            <div className="bg-white absolute top-0 left-[300px] right-0 bottom-0 overflow-auto">
              <PrivateRoute
                exact
                path="/posts/detail/:id"
                component={PostDetailPage}
              />
              <PrivateRoute
                exact
                path="/posts/edit/:id"
                component={NewPostPage}
              />
              <PrivateRoute exact path="/posts/add" component={NewPostPage} />
              <PrivateRoute exact path="/posts" component={PostPage} />
              <PrivateRoute exact path="/categories" component={CategoryPage} />
              <PrivateRoute
                exact
                path="/categories/add"
                component={NewCategoryPage}
              />
              <PrivateRoute
                exact
                path="/categories/edit/:id"
                component={NewCategoryPage}
              />
              <PrivateRoute exact path="/" component={PostPage} />
            </div>
          </div>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
