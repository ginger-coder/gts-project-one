
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class adminHealthAdd extends Component {

    state = {
        title:'',
        content:'',
    }

    componentWillReceiveProps(nP) {

    }

    componentDidMount() {

    }

    saveUserMsg = ( title , content ) => {
        if(title == '' || content == '') {
            Toast.offline('请输入所有信息，再进行保存@-@！',1);
            return false;
        }
        
        RequestURL.requestData('/health/add', {
            title,
            content
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('填加成功', 1);
                    setTimeout(e=>{
                        this.props.history.replace('/admin/health');
                    },500);
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
        
    }
    render() {
        let { title , content } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '添加健康指南'} className="my-list">
                    <InputItem
                        clear
                        placeholder="请输入标题"
                        onChange={e=>{
                            this.setState({
                                title:e
                            })
                        }}
                        value={title}
                    >标题</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入内容"
                        onChange={e=>{
                            this.setState({
                                content:e
                            })
                        }}
                        value={content}
                    >备注</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={()=>this.saveUserMsg(title,content)}>保存</Button>
            </WingBlank>
        )
    }
}
