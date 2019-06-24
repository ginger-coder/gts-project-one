
import { List, InputItem, WhiteSpace, Button, WingBlank, Radio } from 'antd-mobile';
import RequestURL from 'api/requestAPI';



const RadioItem = Radio.RadioItem;

export default class userPersonInfo extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            name: '',
            tele: '',
            sontele: '',
            address: '',
            sex:'',
            balance:'',
            sexN: 1,
        }
        this.sexData = [
            {
                label: '女',
                value: 0
            },
            {
                label: '男',
                value: 1
            },

        ];
    }

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        let type = this.getLocalForge('type');
        let id = this.getLocalForge('userid');
        this.loadMedicalInfo(id, type);
    }

    getLocalForge = (key) => {
        return localStorage.getItem(key);
    }

    loadMedicalInfo = (id, type) => {
        RequestURL.requestData('/user/get', {
            id,
            type
        })
            .then((res) => {
                if(type == 1){
                    let { username, password, balance, name, address, tele, sontele, sex } = res;
                    this.setState({
                        username,
                        password,
                        balance,
                        address,
                        sex,
                        name,
                        tele,
                        sontele,
                        sexN:sex=='男'?1:0
                    })
                }
                
            })
    }

    changeInfo = () => {
        let { username, sexN, name, tele, sontele, address, password } = this.state;
        

        let type = this.getLocalForge('type');
        let id = this.getLocalForge('userid');

        if (username == '' || name == '' || tele == '' || sontele == '' || address == '') {
            Toast.fail('请补全信息再保存！', 1);
            return false;
        }

        let sexName = this.sexData[sexN].label;

        RequestURL.requestData('/user/update', {
            type, username, name, tele, sontele, address, sex: sexName, id , password
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('修改成功', 1);
                    setTimeout(() => {
                        this.props.history.push('/user/persion');
                    }, 800)
                } else {
                    Toast.fail('修改失败', 1);
                }
            })
    }


    setRegisterData = (stateType) => {
        return (val) => {
            this.setState({
                [stateType]: val
            })
        }
    }

    render() {
        let { username, password, balance, name, address, tele, sontele, sex, sexN } = this.state;
        let { sexData } = this;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '基本信息'} className="my-list">
                <InputItem
                            type="text"
                            placeholder="请输入帐号"
                            value={username}
                            onChange={e => {
                                this.setRegisterData('username')(e);
                            }}
                        >帐号</InputItem>
                        <InputItem
                            type="text"
                            placeholder="请输入昵称"
                            value={name}
                            onChange={e => {
                                this.setRegisterData('name')(e);
                            }}
                        >昵称</InputItem>
                        <WhiteSpace size="md" />
                        <List renderHeader={() => '性别'} className="register-sex">
                            {sexData.map(i => (
                                <RadioItem key={i.value} checked={sexN === i.value} onChange={() => this.setRegisterData('sexN')(i.value)} >
                                    {i.label}
                                </RadioItem>
                            ))}
                        </List>
                        <WhiteSpace size="md" />
                        <InputItem
                            type="number"
                            placeholder="请输入电话"
                            value={tele}
                            onChange={e => {
                                this.setRegisterData('tele')(e);
                            }}
                        >电话</InputItem>
                        <InputItem
                            type="number"
                            placeholder="请输入子女电话"
                            value={sontele}
                            onChange={e => {
                                this.setRegisterData('sontele')(e);
                            }}
                        >子女电话</InputItem>
                        <InputItem
                            type="text"
                            placeholder="请输入住址"
                            value={address}
                            onChange={e => {
                                this.setRegisterData('address')(e);
                            }}
                        >住址</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.changeInfo} >修改</Button>
            </WingBlank>
        )
    }
}
