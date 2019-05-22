import { Link } from 'react-router-dom';
import { Card, WingBlank, WhiteSpace, List, InputItem, Radio, Flex, Button } from 'antd-mobile';
import RequestURL from 'api/requestAPI';
import MenuPage from '../../components/menu';
import { routerData } from 'config/routerConfig';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <div id="admin-main-container" className="admin-main-container">
                <MenuPage routes={routerData.admin} />
            </div>
        )
    }
}