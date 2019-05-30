
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';

export default class userPersonInfo extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            balance:'',
        }
    }

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        let type = this.getLocalForge('type');
        let id = this.getLocalForge('userid');
        this.loadMedicalInfo(id, type);
    }

    getLocalForge = (key) => {
        return localStorage.getItem(key);
    }

    loadMedicalInfo = (id, type) => {
        RequestURL.requestData('/user/get', {
            id,
            type
        })
            .then((res) => {
                if(type == 1){
                    this.setState({
                        username: res.username,
                        password: res.password,
                        balance: res.balance,
                    })
                }
                
            })
    }
    render() {
        let { username, password, balance } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '基本信息'} className="my-list">
                    <List.Item extra={username}>用户名</List.Item>
                    <List.Item extra={balance}>余额</List.Item>
                </List>
                <WhiteSpace />
            </WingBlank>
        )
    }
}
