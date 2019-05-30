
import { List } from 'antd-mobile';
const Item = List.Item;
import RequestURL from 'api/requestAPI';

export default class bhealthUserList extends Component {
    state = {
        medicalData: [],
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
        // data{
        //   code: 0
        //   list: [{
        //   id:			数据id,
        //   username:	用药人姓名,
        //   des:	用药说明,
        //   creatime:	添加时间,
        //   updatime:	修改时间,
        //   },
        let { medicalData } = this.state;
        RequestURL.requestData('/health/list', {
            page
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        medicalData: [...res.list],
                        totalCount: res.pageDataCount * 10 || 0,
                    })
                }
            })
    }

    goToPath = (path) => {
        this.props.history.replace(path);
    }


    render() {
        let { medicalData } = this.state;
        let loadData = medicalData.map((el, index) => {
            return (
                <Item
                    key={el.id}
                    arrow="horizontal"
                    multipleLine
                    onClick={() => { this.goToPath(`/user/health/info/${el.id}`) }}
                    platform="android"
                >
                    {
                        el.title
                    }
                </Item>
            )
        })
        return (
            <List renderHeader={() => '健康指南'} className="my-list">
                {
                    loadData
                }
            </List>
        )
    }
}
