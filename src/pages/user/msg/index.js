
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class UserMsgPage extends Component {

  componentWillReceiveProps(nP) {
    
  }

  componentDidMount() {
    
  }

  loginOut = () => {
    this.props.history.push('/login');
  }


  render() {

    return (
      <List renderHeader={() => '消息记录'} className="my-list">
        <List.Item arrow="horizontal">
          <Link to="/user/msg/pay">充值记录</Link>
        </List.Item>
        <List.Item arrow="horizontal">
          <Link to="/user/msg/login">登录记录</Link>
        </List.Item>
        <List.Item arrow="horizontal">
          <Link to="/user/msg/medicine">用药通知</Link>
        </List.Item>
        <List.Item arrow="horizontal">
          <Link to="/user/msg/guest">随访通知</Link>
        </List.Item>
      </List>
    )
  }
}
