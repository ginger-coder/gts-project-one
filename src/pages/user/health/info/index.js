
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import RequestURL from 'api/requestAPI';


export default class healthUserInfo extends Component {

  state = {
    title:'',
    content:'',
    create_time:'',
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
            create_time:res.create_time
          })
        } else {
          Toast.fail('获取信息失败', 1);
        }
      })
  }
  render() {
    let { title, content, create_time } = this.state;
    return (
      <WingBlank size="md">
        <WhiteSpace size="md" />
        <Card full>
          <Card.Header
            title={title}
          />
          <Card.Body>
            <div>{content}</div>
          </Card.Body>
          <Card.Footer content={create_time} />
        </Card>
      </WingBlank>
    )
  }
}