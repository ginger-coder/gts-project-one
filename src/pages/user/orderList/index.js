import { List, Pagination, Icon, WhiteSpace, SearchBar, Modal, Picker, DatePicker, InputItem } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class UserOrderListManage extends Component {
    constructor() {
        super();
        this.nowTimeStamp = Date.now();
        this.now = new Date(this.nowTimeStamp + 24*60*60*60);
        this.state = {
            doctors: [],
            page: 1,
            totalCount: 0,
            model: false,
            activeId: 0,
            activeServer: [],
            // activeAddress: [],
            activeAddress:'',
            time: this.now,
            serverData: [
                {
                    label: '打针',
                    value: 0,
                },
                {
                    label: '静脉采血',
                    value: 1,
                },
                {
                    label: '普通换药',
                    value: 2,
                },
                {
                    label: '导尿',
                    value: 3,
                },
                {
                    label: '吸痰',
                    value: 4,
                },
            ],
            addressData: [
                {
                    label: '北京',
                    value: 0,
                },
                {
                    label: '上海',
                    value: 1,
                },
            ]
        }
    }


    componentDidMount() {
        let { page } = this.state;
        this.loadData(page);
    }

    linkToPath = (path) => {
        this.props.history.replace(path);
    }

    loadData = (page = 1) => {
        RequestURL.requestData('/order/doctors', {
            page
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        doctors: [...res.list],
                        totalCount: res.pageDataCount
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
                    let { id, name } = res;
                    
                    this.setState({
                        doctors: [{
                            id,
                            username:name
                        }]
                    })
                }
            })
            .catch(error => {
                this.setState({
                    doctors: []
                })
            })
    }
    pageCallback = (page) => {
        this.setState({
            page: page
        }, () => {
            this.loadData(page);
        })

    }

    openMode = (id) => {
        this.setState({
            model: true,
            activeId: id
        })
    }
    closeMode = () => {
        this.setState({
            model: false,
        })
    }

    orderDoctor = () => {
        let { activeId, activeServer, activeAddress, time, serverData, addressData } = this.state;

        if( activeServer.length == 0 ){
            Toast.fail('请选择服务', 1);
            return false;
        }
        if( activeAddress.length == 0 ){
            Toast.fail('请选择出诊地址', 1);
            return false;
        }
        // 医生id, 服务名称service，时间time，地点address
        let service = serverData.filter(e=>{ return e.value == activeServer[0] })[0].label;
        // let address = addressData.filter(e=>{ return e.value == activeAddress[0] })[0].label;
        
        RequestURL.requestData('/order/addorder', {
            id:activeId,
            service:service,
            address:activeAddress,
            time
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('预约成功', 1);
                    this.setState({
                        model:false
                    })
                }else{
                    Toast.fail('预约失败', 1);
                    this.setState({
                        model:false
                    })
                }
            })
    }

    selectData = (type) => {
        return val => {
            this.setState({
                [type]: val
            })
        }
    }

    render() {
        let { totalCount, page, doctors, model, serverData, addressData, activeServer, activeAddress, time } = this.state;
        let loadData = [];
        loadData = doctors.map((el, i) => {
            return <List.Item
                key={el.id}
                arrow="horizontal"
                onClick={() => { this.openMode(el.id) }}
            >{el.username}</List.Item>
        })
        if (loadData.length == 0) {
            loadData.push(
                <div style={{ textAlign: 'center', padding: '15px' }} key={1}>无医生</div>
            )
        }
        return (
            <div id="order-doctor-main" >
                <Modal
                    visible={model}
                    transparent
                    maskClosable={false}
                    onClose={() => { this.setState({ model: false }) }}
                    title="预约"
                    footer={[
                        { text: '预约', onPress: this.orderDoctor },
                        { text: '取消', onPress: this.closeMode },
                    ]}
                >
                    <List style={{ backgroundColor: 'white' }} className="picker-list">
                        <Picker
                            data={serverData}
                            cols={1}
                            value={activeServer}
                            className="forss"
                            onOk={e => this.selectData('activeServer')(e)}
                        >
                            <List.Item arrow="horizontal">选择服务</List.Item>
                        </Picker>
                        {/* <Picker
                            data={addressData}
                            cols={1}
                            className="forss"
                            value={activeAddress}
                            onOk={e => this.selectData('activeAddress')(e)}
                        >
                            <List.Item arrow="horizontal">选择出诊地址</List.Item>
                        </Picker> */}
                        <InputItem
                            clear
                            placeholder="请输入出诊地址"
                            value={activeAddress}
                            onChange={e=>{
                                this.setState({
                                    activeAddress:e
                                })
                            }}
                        >出诊地址</InputItem>
                        <DatePicker
                            value={time}
                            onChange={time => this.setState({ time })}
                            minDate={this.now}
                        >
                            <List.Item arrow="horizontal">时间</List.Item>
                        </DatePicker>
                    </List>
                </Modal>
                <SearchBar
                    placeholder="查找"
                    maxLength={8}
                    onSubmit={this.findData}
                />
                <List renderHeader={() => '医生列表'}>
                    {
                        loadData
                    }
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
