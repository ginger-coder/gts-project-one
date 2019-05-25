
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class adminHealthAdd extends Component {

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
                <List style={{ margin: '5x 0' }} renderHeader={() => '添加健康指南'} className="my-list">
                    <InputItem
                        clear
                        placeholder="请输入标题"
                        ref={el => this.autoFocusInst = el}
                    >标题</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入备注信息"
                        ref={el => this.inputRef = el}
                    >备注</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={()=>this.saveUserMsg('/admin/health')}>保存</Button>
            </WingBlank>
        )
    }
}
