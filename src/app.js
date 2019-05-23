import { Redirect, Switch } from "react-router-dom";
import { MainRouterConfig } from "./config/routerConfig";
import AuthorizedRoute from "./route/AuthorizedRoute";
import './common/assets/reset.scss';
import './common/assets/style.scss';

const Routes = (props) => {
  return(
    <Switch>
      <Redirect from='/' exact to='/login'/>
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
