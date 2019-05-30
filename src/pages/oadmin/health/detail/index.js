import { Card, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';


export default class oadminHealthDetail extends Component {
    state = {
        title: '',
        content: '',
        id: this.props.match.params.id,
    }

    componentDidMount() {
        let { id } = this.state;
        this.loadMedicalInfo(id);
    }

    loadMedicalInfo = (id) => {
        RequestURL.requestData('/health/detail', {
            id
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        title: res.title,
                        content: res.content,
                    })
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
    }
    render() {
        let { title, content } = this.state;
        return (
            <div className="detail-container">
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title={title}
                    />
                    <Card.Body>
                        <div>{content}</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
