
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class UserMedicinePage extends Component {

  componentWillReceiveProps(nP) {
    
  }

  componentDidMount() {
    
  }

  loginOut = () => {
    this.props.history.replace('/login');
  }


  render() {

    return (
      <List renderHeader={() => '用药管理'} className="my-list">
        <List.Item arrow="horizontal">
          <Link to="/user/medicine/history">查询用药记录</Link>
        </List.Item>
        <List.Item arrow="horizontal">
          <Link to="/user/medicine/morder">医嘱</Link>
        </List.Item>
      </List>
    )
  }
}
