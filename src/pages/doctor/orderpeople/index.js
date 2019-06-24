import { WhiteSpace, WingBlank, Pagination, Icon, List } from 'antd-mobile';
import RequestURL from 'api/requestAPI';
import { Link } from 'react-router-dom';

export default class doctorMyPeopleListManage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            page: 1,
            totalCount: 0,
        }
    }

    pageCallback = (page) => {
        this.setState({
            page: page
        }, () => {
            this.loadData(page);
        })

    }


    componentDidMount() {
        let { page } = this.state;
        this.loadData(page);
    }

    linkToPath = (path) => {
        this.props.history.push(path);
    }

    loadData = (page = 1) => {
        RequestURL.requestData('/order/listuser', {
            page
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        data: [...res.list],
                        totalCount: res.pageDataCount
                    })
                }
            })
    }

    render() {
        let { data, totalCount, page } = this.state;
        if (data.length == 0) {
            return (
                <div style={{ textAlign: 'center', padding: '15px' }} className="noContent" >
                    <p>暂无病人</p>
                </div>
            )
        }
        let loadData = [];
        loadData = data.map((el, i) => {
            return (
                <List arrow="horizontal" key={el.id}>
                    <List.Item arrow="horizontal" onClick={() => this.linkToPath(`/doctor/mypeople/yizhu/${el.id}`) } >
                        {el.username}
                    </List.Item>
                </List>
            )
        })
        return (
            <div id="my-order-doctor-main" >
                <WhiteSpace size="lg" />
                <List renderHeader={() => '我的病人'} className="my-list">
                    {
                        loadData
                    }
                </List>
                <WhiteSpace />
                <div className="pagination-container">
                    <Pagination total={totalCount}
                        className="custom-pagination-with-icon"
                        current={page}
                        onChange={(e) => { this.pageCallback(e) }}
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
