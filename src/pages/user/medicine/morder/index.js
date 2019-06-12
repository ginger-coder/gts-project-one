import { Pagination, Icon, WhiteSpace, SearchBar, WingBlank, Card } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class MorderManage extends Component {
    state = {
        homeData: [],
    }

    componentWillReceiveProps(nP) {
        // 如果切换了路由
        if (nP.location.key !== this.props.location.key) {

        }
    }

    componentDidMount() {

    }

    linkToPath = (path) => {
        this.props.history.replace(path);
    }

    render() {
        let { linkToPath } = this;
        return (
            <div id="user-Morder-main" >

                <Link to='/user/medicine' className="add-item-button backbtn" >返回</Link>
                <SearchBar
                    placeholder="查找"
                    maxLength={8}
                    onSubmit={value => console.log(value, 'onSubmit')}
                />
                <WingBlank>
                    <WhiteSpace />
                    <Card>
                        <Card.Header
                            title="This is title"
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                </WingBlank>
            </div>
        )
    }
}
