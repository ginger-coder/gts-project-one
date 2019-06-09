import { Accordion, List, Pagination, Icon, WhiteSpace, SearchBar } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class UserOrderListManage extends Component {
    state = {
        doctors: [],
        page: 1,
        totalCount: 0,
    }

    componentDidMount() {
        let { page } = this.state;
        this.loadData(page);
    }

    linkToPath = (path) => {
        this.props.history.replace(path);
    }

    loadData = (page = 1) => {
        RequestURL.requestData('/order/listuser', {
            page
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        doctors: [...res.list]
                    })
                }
            })
    }
    findData = (username = '') => {
        RequestURL.requestData('/order/doctorByName', {
            username
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        doctors: [...res.list]
                    })
                }
            })
    }
    pageCallback = (page) => {
        this.setState({
            page: page
        }, () => {
            this.loadData(page);
        })

    }

    render() {
        let { totalCount, page, doctors } = this.state;
        let loadData = doctors.map((el, i) => {
            return <List.Item
                key={el.id}
                arrow="horizontal"
                onClick={() => { }}
            >{el.username}</List.Item>
        })
        return (
            <div id="order-doctor-main" >
                <SearchBar
                    placeholder="查找"
                    maxLength={8}
                    onSubmit={this.findData}
                />
                <List renderHeader={() => '医生列表'}>
                    {
                        loadData
                    }
                    <List.Item
                        arrow="horizontal"
                        onClick={() => { }}
                    >123</List.Item>
                </List>
                <WhiteSpace />
                <div className="pagination-container" >
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
