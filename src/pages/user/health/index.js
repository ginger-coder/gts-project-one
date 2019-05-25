
import { List } from 'antd-mobile';
const Item = List.Item;

export default class bhealthUserList extends Component {

    constructor(){
        super();
    }

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {

    }

    goToPath = (path) => {
        this.props.history.replace(path);
    }


    render() {

        return (
            <List renderHeader={() => '健康指南'} className="my-list">
                <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={() => { this.goToPath('/user/health/info/1') }}
                    platform="android"
                >
                    ListItem 
                </Item>
            </List>
        )
    }
}
