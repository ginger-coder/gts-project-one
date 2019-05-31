import { Link, Switch, Redirect } from 'react-router-dom';
import { Card, WingBlank, WhiteSpace, List, InputItem, Radio, Flex, Button } from 'antd-mobile';
import RequestURL from 'api/requestAPI';
import MainSubscription from '../../components/menu';

class oAdminLayoutPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {


    }

    render() {
        let { router } = this.props;

        let childrenRoute = [];
        let routes = router.map((el, index) => {
            if (!el.show) return false;
            let cRoute = el.routes;
            if (cRoute.length > 0) {
                childrenRoute = [...childrenRoute, ...cRoute];
            }
            return <Route path={el.path} key={index} exact={el.exact} component={el.component} />
        });

        childrenRoute = childrenRoute.map((el, index) => {
            if (!el.show) return false;
            return <Route path={el.path} key={index} exact={el.exact} component={el.component} />
        })


        return (

            <div className="admin-main-content">

                <Switch>
                    {
                        routes
                    }
                    {
                        childrenRoute
                    }
                    
                    <Redirect from='/oadmin' exact to='/oadmin/health' />
                </Switch>
            </div>
        )
    }
}

// export default AdminLayoutPage;
export default MainSubscription(oAdminLayoutPage, 'oadmin');