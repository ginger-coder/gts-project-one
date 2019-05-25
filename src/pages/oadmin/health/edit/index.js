
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class oadminHealthEdit extends Component {

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
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改健康指南'} className="my-list">
                    <InputItem
                        clear
                        placeholder="修改标题名"
                        ref={el => this.autoFocusInst = el}
                    >标题</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入备注信息"
                        ref={el => this.inputRef = el}
                    >备注</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={()=>this.saveUserMsg('/oadmin/health')}>保存</Button>
            </WingBlank>
        )
    }
}
