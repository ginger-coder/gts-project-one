import { Link, Switch } from 'react-router-dom';
import { Card, WingBlank, WhiteSpace, List, InputItem, Radio, Flex, Button } from 'antd-mobile';
import RequestURL from 'api/requestAPI';
import MainSubscription from '../../components/menu';

class AdminLayoutPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {


    }

    render() {
        let { router } = this.props;
        return (
            <div className="admin-main-content">
                <Switch>
                    {
                        router.map((el, index) => {
                            return <Route path={el.path} key={index} component={el.component} />
                        })
                    }
                </Switch>
            </div>
        )
    }
}

// export default AdminLayoutPage;
export default MainSubscription(AdminLayoutPage,'admin');