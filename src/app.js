import { Redirect, Switch } from "react-router-dom";
import { routerData } from "./config/routerConfig";
import AuthorizedRoute from "./route/AuthorizedRoute";


const Routes = (props) => {
  return(
    <Switch>
      {
          routerData.map((item,index)=>{
            return (
              <Route path={item.path} key={index} component={item.component}/>
            )
          })
        }
    </Switch>
  )
}

export default Routes;
