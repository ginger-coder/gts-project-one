
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class doctorPersonCwd extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            name: ''
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

    saveUserMsg = (username, password, name) => {
        if (username == '' || password == '') {
            Toast.offline('请输入所有信息，再进行保存@-@！', 1);
            return false;
        }
        let type = this.getLocalForge('type');
        let id = this.getLocalForge('userid');

        RequestURL.requestData('/user/update', {
            id,
            type,
            username,
            password,
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.fail('修改成功', 1);
                    setTimeout(e => {
                        this.props.history.replace('/doctor/persion');
                    }, 500);
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
    }
    loadMedicalInfo = (id, type) => {
        RequestURL.requestData('/user/get', {
            id,
            type
        })
            .then((res) => {
                this.setState({
                    username: res.username,
                    password: res.password,
                })
            })
    }

    render() {
        let { username, password, name } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改个人信息'} className="my-list">
                    <InputItem
                        clear
                        value={username}
                        disabled={true}
                    >用户名</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        value={password}
                        type="password"
                        onChange={e => {
                            this.setState({
                                password: e
                            })
                        }}
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.saveUserMsg(username, password)}>保存</Button>
            </WingBlank>
        )
    }
}
