import { Redirect, Switch } from "react-router-dom";
import { MainRouterConfig } from "./config/routerConfig";
import AuthorizedRoute from "./route/AuthorizedRoute";
import './common/assets/reset.css';

const Routes = (props) => {
  return(
    <Switch>
      {
          MainRouterConfig.map((item,index)=>{
            return (
              <Route path={item.path} key={index} component={item.component}/>
            )
          })
        }
    </Switch>
  )
}

export default Routes;
