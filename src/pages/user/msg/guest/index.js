
import { Pagination, Icon, WhiteSpace, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';

export default class userGuestHistory extends Component {
    state = {
        medicalData: [],
        page: 1,
        totalCount: 0,
    }

    componentWillReceiveProps(nP) {
        // 如果切换了路由
        if (nP.location.key !== this.props.location.key) {

        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = (id) => {
        RequestURL.requestData('/follow/record', {
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

                <Link to='/user/guest/history' className="add-item-button" > + </Link>
                <List renderHeader={() => '随访记录'} className="my-list">
                    {
                        loadData
                    }
                </List>
                <WhiteSpace size="lg" />
                <div className="pagination-container" >
                    <Pagination total={totalCount}
                        className="custom-pagination-with-icon"
                        current={page}
                        locale={{
                            prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
                            nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
                        }}
                    />
                </div>
            </div>
        )
    }
}

