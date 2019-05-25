
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class userPersonPay extends Component {

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {

    }

    saveUserMsg = () => {
        this.props.history.replace('/user/persion');
    }

    render() {

        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '充值中心'} className="my-list">
                    <InputItem
                        clear
                        placeholder="请输入充值的金额"
                        ref={el => this.autoFocusInst = el}
                    >金额</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.saveUserMsg}>充值</Button>
            </WingBlank>
        )
    }
}
