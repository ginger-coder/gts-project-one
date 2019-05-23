import { Card, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';


export default class adminGuestDetail extends Component {
    constructor() {
        super()
        this.state = {
            homeData: [],
        }
    }

    componentDidMount() {


    }
    render() {
        return (
            <div className="detail-container">
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="详情页"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div>This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
            </div>
        )
    }
}
