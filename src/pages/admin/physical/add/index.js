
import { List, InputItem, WhiteSpace, Button, WingBlank, Picker } from 'antd-mobile';
import { Link } from 'react-router-dom';
import RequestURL from 'api/requestAPI';

export default class adminAddPhysical extends Component {
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

        RequestURL.requestData('/exam/add', {
            id,
            des
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('填加成功', 1);
                    setTimeout(e => {
                        this.props.history.push('/admin/physical');
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
                <List style={{ margin: '5x 0' }} renderHeader={() => '添加体检记录'} className="my-list">
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
                        <List.Item arrow="horizontal">选择体检人</List.Item>
                    </Picker>
                    <InputItem
                        clear
                        placeholder="请输入体检说明"
                        onChange={ e => this.setState({
                            des: e,
                        }) }
                    >体检说明</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.saveUserMsg(des, activeId[0])} >保存</Button>
            </WingBlank>
        )
    }
}
