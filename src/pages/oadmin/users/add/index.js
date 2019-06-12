
import { List, InputItem, WhiteSpace, Button, WingBlank, Picker } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class oadminUsersical extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            type: [
                1
            ],
        }
        this.users = [
            {
              label: '超级管理员',
              value: 4
            },
            {
              label: '社区管理员',
              value: 3
            },
            {
              label: '医生',
              value: 2
            },
            {
              label: '普通用户',
              value: 1
            },
      
          ];
    }

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        
    }

    saveUserMsg = (type, username, password) => {
        if (username == '' || password == '') {
            Toast.offline('请输入所有信息，再进行保存@-@！', 1);
            return false;
        }

        RequestURL.requestData('/user/add', {
            type,
            username,
            password
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('填加成功', 1);
                    setTimeout(e => {
                        this.props.history.replace('/admin/user');
                    }, 500);
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })

    }

    render() {
        let { users } = this;
        let {type, username, password} = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '添加用户'} className="my-list">
                    <Picker
                        data={users}
                        cols={1}
                        className="forss"
                        value={type}
                        onOk={(e) => {
                            this.setState({
                                type: e
                            })
                        }}
                    >
                        <List.Item arrow="horizontal">选择用户类型</List.Item>
                    </Picker>
                    <InputItem
                        clear
                        placeholder="请输入用户"
                        value={username}
                        onChange={e=>{
                            this.setState({
                                username:e
                            })
                        }}
                    >用户名</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        value={password}
                        onChange={e=>{
                            this.setState({
                                password:e
                            })
                        }}
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={()=>this.saveUserMsg(type[0], username, password)}>保存</Button>
            </WingBlank>
        )
    }
}
