import { Card, WhiteSpace, WingBlank, Button, Pagination, Icon } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class UserMyOrderListManage extends Component {
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
        this.props.history.replace(path);
    }

    loadData = (page = 1) => {
        RequestURL.requestData('/order/userorders', {
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
                    <p>暂无预约</p>
                    <WhiteSpace size="lg" />
                    <Button type="primary" inline size="small" onClick={() => this.linkToPath('/user/orderlist')} style={{ marginRight: '4px' }}>去预约</Button>
                </div>
            )
        }

        let loadData = [];
        loadData = data.map((el, i) => {
            return (
                <div key={i} >
                    <Card>
                        <Card.Header
                            title={el.docname}
                            extra={el.time}
                        />
                        <Card.Body>
                            <div>
                                {
                                    el.service
                                }
                            </div>
                            <WhiteSpace size="sm" />
                            {
                                el.advice.length !== 0 ?
                                    <div>
                                        医嘱：{el.advice}
                                    </div>
                                    :
                                    undefined
                            }
                        </Card.Body>
                        <Card.Footer content={el.address} />
                       
                    </Card>
                    <WhiteSpace />
                </div>
            )
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
