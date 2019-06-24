
import { List, InputItem, WhiteSpace, Button, WingBlank, TextareaItem } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class adminHealthEdit extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
        }
    }


    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        let _id = this.props.match.params.id;
        this.loadMedicalInfo(_id);
    }

    saveUserMsg = () => {
        let { title, content } = this.state;
        let id = this.props.match.params.id;

        RequestURL.requestData('/health/update', {
            id,
            title,
            content
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('修改成功', 1);
                    setTimeout(() => {
                        this.props.history.push('/admin/health');
                    }, 800)

                } else {
                    Toast.fail('修改失败', 1);
                }
            })
    }

    loadMedicalInfo = (id) => {
        RequestURL.requestData('/health/detail', {
            id
        })
            .then((res) => {
                if (res.code == 0) {
                    this.setState({
                        title: res.title,
                        content: res.content,
                    })
                } else {
                    Toast.fail('获取信息失败', 1);
                }
            })
    }

    setData = (stateType) => {
        return (val) => {
            this.setState({
                [stateType]: val
            })
        }
    }

    render() {
        let { title, content } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '修改健康指南'} className="my-list">
                    <InputItem
                        clear
                        placeholder="修改标题名"
                        onChange={e=>{
                            this.setState({
                                title:e
                            })
                        }}
                        value={title}
                    >标题</InputItem>
                    <TextareaItem
                        clear
                        placeholder="内容"
                        autoHeight
                        rows={15}
                        onChange={e=>{
                            this.setState({
                                content:e
                            })
                        }}
                        value={content}
                    >内容</TextareaItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.saveUserMsg()}>保存</Button>
            </WingBlank>
        )
    }
}
