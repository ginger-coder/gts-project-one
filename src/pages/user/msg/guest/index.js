
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';


export default class userGuestHistory extends Component {

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {

    }


    render() {
        return (
            <WingBlank size="md">
                <WhiteSpace size="md" />
                <div>
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
                    <WhiteSpace size="md" />
                </div>
            </WingBlank>
        )
    }
}
