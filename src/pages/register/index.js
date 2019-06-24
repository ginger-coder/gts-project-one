import { Link } from 'react-router-dom';
import { Toast, WingBlank, WhiteSpace, List, InputItem, Radio, Flex, Button } from 'antd-mobile';

import './assets/style/index.scss';
import RequestURL from 'api/requestAPI';

const RadioItem = Radio.RadioItem;

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            type: 1,
            username: '',
            password: '',
            name: '',
            tele: '',
            sontele: '',
            address: '',
            sexN: 1,
        }
        this.users = [
            {
                label: '社区用户',
                type: 1
            },
            // {
            //     label: '医生',
            //     type: 2
            // },
            // {
            //     label: '社区管理员',
            //     type: 3
            // },
            // {
            //     label: '超级管理员',
            //     type: 4
            // },
        ];
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

    setRegisterData = (stateType) => {
        return (val) => {
            this.setState({
                [stateType]: val
            })
        }
    }

    registerSend = () => {
        let { type, username, password, sexN, name, tele, sontele, address } = this.state;
        if (username == '' || password == '' || name == '' || tele == '' || sontele == '' || address == '') {
            Toast.fail('请补全信息再注册！', 1);
            return false;
        }

        let sexName = this.sexData[sexN].label;

        RequestURL.requestData('/user/register', {
            type, username, password, name, tele, sontele, address, sex: sexName
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('注册成功，快去登录吧！', 1);
                } else {
                    Toast.fail(res.msg, 1);
                }
            })
    }

    onChangeSex = (val) => {
        this.setState({
            sex: val
        })
    }



    render() {
        let { type, username, password, sexN, name, tele, sontele, address } = this.state;
        let { users, sexData } = this;

        let uesrItems = users.map((user, index) => {
            return (
                <RadioItem key={user.type} checked={type === user.type} onChange={e => this.setRegisterData('type')(user.type)}>
                    {user.label}
                </RadioItem>
            )
        })

        return (
            <div id="login-container" className="login-container">
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <List renderHeader={() => '注册'}>
                        <InputItem
                            type="text"
                            placeholder="请输入帐号"
                            value={username}
                            onChange={e => {
                                this.setRegisterData('username')(e);
                            }}
                        >帐号</InputItem>
                        <InputItem
                            type="password"
                            placeholder="****"
                            value={password}
                            onChange={e => {
                                this.setRegisterData('password')(e);
                            }}
                        >密码</InputItem>
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
                    <List renderHeader={() => '用户类型'}>
                        {
                            uesrItems
                        }
                    </List><WhiteSpace />

                    <Button type="primary" onClick={this.registerSend} >注册</Button><WhiteSpace />
                    <Button type="primary" onClick={() => { this.props.history.push('/login') }} >已有帐号，去登录</Button><WhiteSpace />
                    <WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}