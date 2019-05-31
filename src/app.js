import { Redirect, Switch } from "react-router-dom";
import { MainRouterConfig } from "./config/routerConfig";
// import AuthorizedRoute from "./route/AuthorizedRoute";
import './common/assets/reset.scss';
import './common/assets/style.scss';
import './common/font/iconfont.css';

const Routes = (props) => {
  
  return (
    <Switch>
      {
        MainRouterConfig.map((item, index) => {
          return (
            <Route path={item.path} key={index} component={item.component} />
          )
        })
      }
      <Redirect from='/' exact to='/login' />
    </Switch>
  )
}

export default Routes;
