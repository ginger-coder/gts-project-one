import { Link } from 'react-router-dom';
import { WingBlank, WhiteSpace, List, InputItem, Radio, Flex, Button } from 'antd-mobile';
import './assets/style/index.scss';
import RequestURL from 'api/requestAPI';

const RadioItem = Radio.RadioItem;

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      type: 1,
      username: '',
      password: '',
    }
    this.users = [
      {
        label: '普通用户',
        type: 1
      },
      {
        label: '医生',
        type: 2
      },
      {
        label: '社区管理员',
        type: 3
      },
      {
        label: '超级管理员',
        type: 4
      },
    ];
  }

  componentDidMount(){
    localStorage.clear();
  }

  setLocalForge = (data) => {
    for (const key in data) {
      localStorage.setItem(key, data[key]);
    }
  }

  setLoginData = (stateType) => {
    return (val) => {
      this.setState({
        [stateType]: val
      })
    }
  }

  loginSend = () => {
    let { type, username, password } = this.state;

    RequestURL.requestData('/user/login', {
      type, username, password
    })
      .then((res) => {
        if (res.code == 0) {
          Toast.success('登录成功', 1);
          this.setLocalForge({
            userid: res.userId,
            type: res.type
          })
          setTimeout(() => {
            let path = '';
            switch (res.type) {
              case '1':
                path = '/user'
                break;
              case '2':
                path = '/doctor'
                break;
              case '3':
                path = '/oadmin'
                break;
              case '4':
                path = '/admin'
                break;
            }
            this.props.history.replace(path);
          }, 200)
        } else {
          Toast.fail('登录失败', 1);
        }

      })
  }

  render() {
    let { type, username, password } = this.state;
    let { users } = this;

    let uesrItems = users.map((user, index) => {
      return (
        <RadioItem key={user.type} checked={type === user.type} onChange={e => this.setLoginData('type')(user.type)}>
          {user.label}
        </RadioItem>
      )
    })

    return (
      <div id="login-container" className="login-container">
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <List renderHeader={() => '登录'}>
            <InputItem
              type="text"
              placeholder="请输入帐号"
              value={username}
              onChange={e => {
                this.setLoginData('username')(e);
              }}
            >帐号</InputItem>
            <InputItem
              type="password"
              placeholder="****"
              value={password}
              onChange={e => {
                this.setLoginData('password')(e);
              }}
            >密码</InputItem>
          </List>
          <List renderHeader={() => '用户类型'}>
              {
                uesrItems
              }
          </List><WhiteSpace />

          <Button type="primary" onClick={this.loginSend}>登录</Button><WhiteSpace />
          <Button type="primary" onClick={() => { this.props.history.replace('/register') }} >去注册</Button><WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}