import { Card, WhiteSpace, List, InputItem, WingBlank } from 'antd-mobile';
import RequestURL from 'api/requestAPI';


export default class adminPhysicalDetail extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            type: '',
            creatime: '',
        }
        this.userType = {
            1: '普通用户',
            2: '医生',
            3: '社区管理员',
            4: '超级管理员'
        };
    }


    componentDidMount() {
        let _id = this.props.match.params.id;
        this.loadMedicalInfo(_id);
    }

    loadMedicalInfo = (id) => {
        RequestURL.requestData('/user/detail', {
            id
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        username: res.username,
                        password: res.password,
                        type: this.userType[res.type],
                        creatime: res.creatime,
                    })
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
    }
    render() {
        let { username, password, type, creatime } = this.state;
        return (
            <div className="detail-container">
                <WingBlank size="lg">
                    <List style={{ margin: '5x 0' }} renderHeader={() => '用户详情'} className="my-list">
                        <List.Item extra={'用户名'}>{username}</List.Item>
                        <List.Item extra={'密码'}>{password}</List.Item>
                        <List.Item extra={'用户类型'}>{type}</List.Item>
                        <List.Item extra={'创建时间'}>{creatime}</List.Item>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
