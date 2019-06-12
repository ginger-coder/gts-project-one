
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class userPersonPay extends Component {
    constructor(){
        super();
        this.state = {
            number:0,
            balance:0,
        }
    }
    

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        this.getMoney();
    }

    getLocalForge = (key) => {
        return localStorage.getItem(key);
    }

    getMoney = () => {
        let type = this.getLocalForge('type');
        let id = this.getLocalForge('userid');
        
        RequestURL.requestData('/user/getBanlance', {
            id,
            type
        })
            .then((res) => {
                this.setState({
                    balance:res.balance || 0
                })
            })
    }

    saveUserMsg = (money) => {
        let type = this.getLocalForge('type');
        let id = this.getLocalForge('userid');

        if(money==0){
            Toast.fail('请输入充值金额', 1);
            return false;
        }
        
        RequestURL.requestData('/user/addBanlance', {
            id,
            type,
            money
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('充值成功', 1);
                    setTimeout(e=>{
                        this.props.history.replace('/user/persion');
                    },500);
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
        this.props.history.replace('/user/persion');
    }

    render() {
        let { number, balance } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '充值中心'} className="my-list">
                    <List.Item extra={balance}>余额</List.Item>
                    <InputItem
                        clear
                        placeholder="请输入充值的金额"
                        value={number}
                        onChange={e=>{
                            this.setState({
                                number:e
                            })
                        }}
                    >充值金额</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={()=>this.saveUserMsg(number)}>充值</Button>
            </WingBlank>
        )
    }
}
