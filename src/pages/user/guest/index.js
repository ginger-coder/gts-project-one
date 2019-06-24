
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class UserMedicinePage extends Component {

  componentWillReceiveProps(nP) {
    
  }

  componentDidMount() {
    
  }

  loginOut = () => {
    this.props.history.push('/login');
  }


  render() {

    return (
      <List renderHeader={() => '随访管理'} className="my-list">
        <List.Item arrow="horizontal">
          <Link to="/user/guest/history">查询随访管理</Link>
        </List.Item>
        {/* <List.Item arrow="horizontal">
          <Link to="/user/guest/chat">数据折线图</Link>
        </List.Item> */}
      </List>
    )
  }
}
