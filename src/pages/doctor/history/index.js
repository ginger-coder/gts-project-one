import { Card, WhiteSpace, WingBlank, Pagination, Icon } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class doctorMyOrderListManage extends Component {
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
        RequestURL.requestData('/order/docorders', {
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
                <div style={{ textAlign: 'center', padding: '15px' }} className="noContent">
                    <p>暂无记录</p>
                </div>
            )
        }
        let loadData = [];
        loadData = data.map((el, i) => {
            return (<Card key={el.id}>
                <Card.Header
                    title={el.username}
                />
                <Card.Body>
                    <div>
                        {
                            el.service
                        }
                    </div>
                </Card.Body>
                <Card.Footer content={el.time} extra={<div>预约时间</div>} />
            </Card>)
        })
        
        return (
            <div id="my-order-doctor-main" >
                <WhiteSpace size="lg" />
                <WingBlank size="md">
                    {
                        loadData
                    }
                </WingBlank>
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
