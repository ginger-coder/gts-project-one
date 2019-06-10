import { Pagination, Icon, WhiteSpace, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';

export default class HistoryManage extends Component {
    state = {
        medicalData: [],
    }

    componentWillReceiveProps(nP) {
        // 如果切换了路由
        if (nP.location.key !== this.props.location.key) {

        }
    }

    componentDidMount() {
    }

    loadData = (id) => {
        RequestURL.requestData('/medical/record', {
            id: localStorage.getItem('userid')
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        medicalData: [...res.list]
                    })
                }
            })
    }

    linkToPath = (path) => {
        this.props.history.replace(path);
    }

    render() {
        let { linkToPath } = this;
        let { medicalData } = this.state;
        let loadData = medicalData.map((el, index) => {
            return (
                <List.Item extra={el.creatime} arrow="empty" className="spe" wrap key={el.id} >
                    {
                        el.des
                    }
                </List.Item>
            )
        })
        return (
            <div id="user-guest-history-main" >

                <Link to='/user/medicine/history' className="add-item-button" > + </Link>
                <List renderHeader={() => '用药记录'} className="my-list">
                    {
                        loadData
                    }
                </List>
                <WhiteSpace size="lg" />
            </div>
        )
    }
}
