
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class adminUserEdit extends Component {
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
        let _id = this.props.match.params.id;
        this.loadMedicalInfo(_id);
    }

    saveUserMsg = () => {
        let { username, password } = this.state;
        let id = this.props.match.params.id;
        RequestURL.requestData('/user/update', {
            id,
            username,
            password,
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('修改成功', 1);
                    setTimeout(() => {
                        this.props.history.replace('/admin/user');
                    }, 800)

                } else {
                    Toast.fail('修改失败', 1);
                }
            })
    }

    loadMedicalInfo = () => {
        RequestURL.requestData('/uesr/detail', {
            id: this.props.match.params.id
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        username: res.username,
                        des: res.des,
                    })
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
    }

    setData = (stateType) => {
        return (val) => {
            this.setState({
                [stateType]: val
            })
        }
    }
    render() {
        let { username, password } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改用户'} className="my-list">
                    <InputItem
                        clear
                        placeholder="修改用户名"
                        onChange={e=>{
                            this.setState({
                                username:e
                            })
                        }}
                        value={username}
                    >用户名</InputItem>
                    <InputItem
                        clear
                        placeholder="修改密码"
                        onChange={e=>{
                            this.setState({
                                password:e
                            })
                        }}
                        value={password}
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={()=>this.saveUserMsg('/admin/user')}>保存</Button>
            </WingBlank>
        )
    }
}
