
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class doctorUserEdit extends Component {

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {

    }

    saveUserMsg = (path) => {
        this.props.history.replace(path);
    }

    render() {

        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改用药记录'} className="my-list">
                    <InputItem
                        clear
                        placeholder="修改药品名"
                        ref={el => this.autoFocusInst = el}
                    >药品名</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入备注信息"
                        ref={el => this.inputRef = el}
                    >备注</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={()=>this.saveUserMsg('/doctor/medicine')}>保存</Button>
            </WingBlank>
        )
    }
}
