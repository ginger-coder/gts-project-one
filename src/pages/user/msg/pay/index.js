
import { Pagination, Icon, WhiteSpace, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';

export default class userPayHistory extends Component {
    state = {
        medicalData: [],
        page: 1,
        totalCount: 0,
    }


    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        RequestURL.requestData('/balance/list', {
            id: localStorage.getItem('userid'),
            type:localStorage.getItem('type')
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
        let { medicalData } = this.state;
        let loadData = medicalData.map((el, index) => {
            return (
                <List.Item extra={el.creatime} arrow="empty" className="spe" wrap key={el.id} >
                    {
                        '￥ '+el.num
                    }
                </List.Item>
            )
        })
        return (
            <div id="user-guest-history-main" >
                <List renderHeader={() => '充值记录'} className="my-list">
                    {
                        loadData
                    }
                </List>
                <WhiteSpace size="lg" />
            </div>
        )
    }
}
