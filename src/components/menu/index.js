import { Link } from 'react-router-dom';
import { Card, WingBlank, WhiteSpace, List, InputItem, Radio, Flex, Button } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class MenuPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        let { routes } = this.props;
        let menuLink = routes.map((el, i) => {
            return (
                <li>
                    <Link to={el.path} >{el.name}</Link>
                </li>
            )
        })
        return (
            <ul id="menu-container" className="menu-container">
                {
                    menuLink
                }
            </ul>
        )
    }
}