
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';

export default class userPersonInfo extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            name: '',
            tele: '',
            sontele: '',
            address: '',
            sex:'',
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
                    let { username, password, balance, name, address, tele, sontele, sex } = res;
                    this.setState({
                        username,
                        password,
                        balance,
                        address,
                        sex,
                        name,
                        tele,
                        sontele
                    })
                }
                
            })
    }
    render() {
        let { username, password, balance, name, address, tele, sontele, sex } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '基本信息'} className="my-list">
                    <List.Item extra={username}>用户名</List.Item>
                    <List.Item extra={name}>昵称</List.Item>
                    <List.Item extra={sex}>性别</List.Item>
                    <List.Item extra={tele}>电话</List.Item>
                    <List.Item extra={sontele}>家属电话</List.Item>
                    <List.Item extra={address}>地址</List.Item>
                    <List.Item extra={balance}>余额</List.Item>
                </List>
                <WhiteSpace />
            </WingBlank>
        )
    }
}
