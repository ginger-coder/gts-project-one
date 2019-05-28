import { Card, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';


export default class doctorPhysicalDetail extends Component {
    state = {
        medicalInfo:{
            username:'',
            des:'',
        },
        id:this.props.match.params.id,
    }

    componentDidMount() {
        
        let { id } = this.state;
        this.loadMedicalInfo( id );
    }
    loadMedicalInfo = ( id ) => {
        let { medicalInfo } = this.state;
        RequestURL.requestData('/medical/detail', {
          id
        })
          .then((res) => {
            if (res.code == 0) {
              this.setState({
                medicalInfo:{
                    username:res.username,
                    des:res.des,
                }
              })
            }else{
                Toast.fail('获取信息失败', 1);
            }
          })
      }
    render() {
        let { medicalInfo : { username, des } } = this.state;
        return (
            <div className="detail-container">
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title={username}
                    />
                    <Card.Body>
                        <div>{des}</div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
