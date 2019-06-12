
import { List, InputItem, WhiteSpace, Button, WingBlank, Picker } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class doctorGuestAdd extends Component {
    constructor() {
        super();
        this.state = {
            des: '',
            allUser: [],
            activeId: [],
        }
    }

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        this.getAllUser();
    }

    getAllUser = (page = 1) => {

        RequestURL.requestData('/user/medicalist', {
            page
        })
            .then((res) => {
                if (res.code == 0) {

                    this.setState({
                        allUser: [...res.list.map((el, index) => {
                            return {
                                value: el.id,
                                label: el.username,
                            }
                        })]
                    })
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
    }

    saveUserMsg = (des, id) => {
        if (des == '' || id == 0) {
            Toast.offline('请输入所有信息，再进行保存@-@！', 1);
            return false;
        }

        RequestURL.requestData('/follow/add', {
            id,
            des
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('填加成功', 1);
                    setTimeout(e => {
                        this.props.history.replace('/doctor/guest');
                    }, 500);
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })

    }

    render() {
        let { des, allUser, activeId } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '添加随访记录'} className="my-list">
                    <Picker
                        data={allUser}
                        cols={1}
                        className="forss"
                        value={activeId}
                        onOk={(e) => {
                            this.setState({
                                activeId: e
                            })
                        }}
                    >
                        <List.Item arrow="horizontal">选择随访人</List.Item>
                    </Picker>
                    <InputItem
                        clear
                        placeholder="请输入备注信息"
                        onChange={ e => this.setState({
                            des: e,
                        }) }
                    >备注</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.saveUserMsg(des,activeId[0])}>保存</Button>
            </WingBlank>
        )
    }
}
