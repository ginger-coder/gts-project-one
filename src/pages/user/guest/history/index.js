import { Pagination, Icon, WhiteSpace, List, Calendar } from 'antd-mobile';
import moment from 'moment';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';
const extra = {
    // '2017/07/15': { info: 'Disable', disable: true },
};
const now = new Date();

export default class userGuestHistoryManage extends Component {
    constructor() {
        super()
        this.originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
        this.state = {
            medicalData: [],
            en: false,
            show: false,
            config: {},
        }
    }

    componentWillReceiveProps(nP) {
        // 如果切换了路由
        if (nP.location.key !== this.props.location.key) {

        }
    }

    componentDidMount() {
        this.loadData('2019-06-10', '2020-06-10');
    }

    renderBtn(zh, config = {}) {

        return (
            <List.Item arrow="horizontal"
                onClick={() => {
                    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                    this.setState({
                        show: true,
                        config,
                    });
                }}
            >
                {zh}
            </List.Item>
        );
    }
    getDateExtra = date => extra[+date];

    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }

    onSelect = (date, state) => {
        return [date, new Date(+now - 604800000)];
    }

    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime,
            endTime,
        });
        this.loadData(this.filterDate(startTime), this.filterDate(endTime))
    }

    filterDate = (time) => {
        return moment(time).format("YYYY-MM-DD");
    }



    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }

    loadData = (start, end) => {
        RequestURL.requestData('/follow/record', {
            id: localStorage.getItem('userid'),
            start_time: start,
            end_time: end,
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
        let { medicalData, show } = this.state;
        let loadData = [];
        if (medicalData.length == 0) {
            loadData = (
                <div style={{ textAlign: 'center', padding: '15px' }} className="noContent">暂无记录</div>
            )
        } else {
            loadData = medicalData.map((el, index) => {
                return (
                    <List.Item extra={el.creatime} arrow="empty" className="spe" wrap key={el.id} >
                        {
                            el.des
                        }
                    </List.Item>
                )
            })
        }
        return (
            <div id="user-guest-history-main" >
                <Link to='/user/guest' className="add-item-button backbtn" >返回</Link>
                <List renderHeader={() => '随访记录'} className="my-list">
                    {this.renderBtn('选择日期区间')}
                    {
                        loadData
                    }
                </List>
                <Calendar
                    type='range'
                    pickTime={true}
                    locale={zhCN}
                    visible={show}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                    getDateExtra={this.getDateExtra}
                    defaultDate={now}
                    onSelect={this.onSelect}
                />
            </div>
        )
    }
}
