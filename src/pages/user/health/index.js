
import { List, Carousel } from 'antd-mobile';
const Item = List.Item;
import RequestURL from 'api/requestAPI';

const imgTags = (id) => {
    return require(`../../../common/imgs/img${id}.jpg`);
}

export default class bhealthUserList extends Component {
    state = {
        medicalData: [],
        page: 1,
        totalCount: 0,
        data: ['1', '2', '3'],
        imgHeight: 175,
    }

    componentDidMount() {
        let { page } = this.state;
        this.loadData(page);
        // simulate img loading
    }

    linkToPath = (path) => {
        this.props.history.push(path);
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
        this.props.history.push(path);
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
            <div>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="javascript:;"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${imgTags(val)}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <List renderHeader={() => '健康指南'} className="my-list">
                    {
                        loadData
                    }
                </List>
            </div>

        )
    }
}
