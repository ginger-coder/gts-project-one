
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class doctorPersonEdit extends Component {

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {

    }

    saveUserMsg = () => {
        this.props.history.replace('/doctor/user');
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

        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改个人信息'} className="my-list">
                    <InputItem
                        clear
                        placeholder="请输入您的用户名"
                        ref={el => this.autoFocusInst = el}
                    >用户名</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入备注信息"
                        ref={el => this.inputRef = el}
                    >备注</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.saveUserMsg}>保存</Button>
            </WingBlank>
        )
    }
}
