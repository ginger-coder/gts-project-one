import { Card, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';


export default class AppPhysical extends Component {
    constructor() {
        this.state = {
            homeData: [],
        }

    }

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {


    }
    render() {
        let { } = this.props;

        return (
            <div className="detail-container">
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="This is title"
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
