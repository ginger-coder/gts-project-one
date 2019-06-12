import { Pagination, Icon, WhiteSpace, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';

export default class userLoginHistory extends Component {
    state = {
        medicalData: [],
        page: 1,
        totalCount: 0,
    }


    componentDidMount() {
        let { page } = this.state;
        this.loadData(page);
    }

    loadData = (page) => {
        RequestURL.requestData('/login/list', {
            id: localStorage.getItem('userid'),
            type:localStorage.getItem('type'),
            page
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        medicalData: [...res.list]
                    })
                }
            })
    }

    render() {
        let { medicalData, totalCount, page } = this.state;
        let loadData = medicalData.map((el, index) => {
            return (
                <List.Item extra={el.creatime} arrow="empty" className="spe" wrap key={el.id} >
                    {
                        el.username
                    }
                </List.Item>
            )
        })
        return (
            <div id="user-guest-history-main" >
                <Link to='/user/msg' className="add-item-button backbtn" >返回</Link>
                <List renderHeader={() => '登录记录'} className="my-list">
                    {
                        loadData
                    }
                </List>
                <WhiteSpace size="lg" />
            </div>
        )
    }
}

