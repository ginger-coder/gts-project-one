
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import RequestURL from 'api/requestAPI';
export default class oadminPersonEdit extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
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

    saveUserMsg = () => {
        let { username, password } = this.state;
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
                    Toast.success('修改成功', 1);
                    setTimeout(() => {
                        this.props.history.push('/oadmin/user');
                    }, 800)

                } else {
                    Toast.fail('修改失败', 1);
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
        let { username, password } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改个人信息'} className="my-list">
                    <InputItem
                        clear
                        value={username}
                        disabled={true}
                        onChange={e => {
                            this.setState({
                                username: e
                            })
                        }}
                    >用户名</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        value={password}
                        onChange={e => {
                            this.setState({
                                password: e
                            })
                        }}
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.saveUserMsg}>保存</Button>
            </WingBlank>
        )
    }
}
