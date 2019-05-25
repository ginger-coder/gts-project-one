
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './assets/style/index.scss';

export default class UserPersonPage extends Component {

  componentWillReceiveProps(nP) {
    
  }

  componentDidMount() {
    
  }

  loginOut = () => {
    this.props.history.replace('/login');
  }


  render() {

    return (
      <List renderHeader={() => '个人中心'} className="my-list">
        <List.Item arrow="horizontal">
          <Link to="/user/persion/info">基本信息</Link>
        </List.Item>
        <List.Item arrow="horizontal">
          <Link to="/user/persion/cpwd">密码修改</Link>
        </List.Item>
        <List.Item arrow="horizontal">
          <Link to="/user/persion/pay">余额充值</Link>
        </List.Item>
        <List.Item arrow="horizontal" onClick={this.loginOut}>退出</List.Item>
      </List>
    )
  }
}
