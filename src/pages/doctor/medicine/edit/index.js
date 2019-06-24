
import { List, InputItem, WhiteSpace, Button, WingBlank, Picker } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class doctorUserEdit extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            des: '',
        }
    }


    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        let _id = this.props.match.params.id;
        this.loadMedicalInfo(_id);
    }

    saveUserMsg = () => {
        let { des } = this.state;
        let id = this.props.match.params.id;
        RequestURL.requestData('/medical/update', {
            id,
            des
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('修改成功', 1);
                    setTimeout(() => {
                        this.props.history.push('/doctor/medicine');
                    }, 800)

                } else {
                    Toast.fail('修改失败', 1);
                }
            })
    }

    loadMedicalInfo = () => {
        RequestURL.requestData('/medical/detail', {
            id: this.props.match.params.id
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        username: res.username,
                        des: res.des,
                    })
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
    }

    setData = (stateType) => {
        return (val) => {
            this.setState({
                [stateType]: val
            })
        }
    }

    render() {
        let { username, des } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改用药记录'} className="my-list">
                    <InputItem
                        clear
                        placeholder="用药人"
                        disabled={true}
                        value={
                            username
                        }
                    >
                        用药人
                    </InputItem>
                    <InputItem
                        clear
                        placeholder="请输入备注信息"
                        onChange={e => {
                            this.setData('des')(e);
                        }}
                        value={des}
                    >备注信息</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.saveUserMsg()}>保存</Button>
            </WingBlank>
        )
    }
}
