
import { List, WhiteSpace, Button, WingBlank, TextareaItem } from 'antd-mobile';
import RequestURL from 'api/requestAPI';

export default class doctorYiZhu extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
        }
    }


    componentWillReceiveProps(nP) {

    }

    componentDidMount() {
        
        // this.loadMedicalInfo(_id);
    }

    saveUserMsg = () => {
        let { content } = this.state;

        RequestURL.requestData('/order/adviceAdd', {
            id : this.props.match.params.id,
            advice:content
        })
            .then((res) => {
                if (res.code == 0) {
                    Toast.success('添加成功', 1);
                    setTimeout(() => {
                        this.props.history.push('/doctor/mypeople');
                    }, 800)

                } else {
                    Toast.fail('添加失败', 1);
                }
            })
    }
    render() {
        let { content } = this.state;
        return (
            <WingBlank size="lg">
                <List style={{ margin: '5x 0' }} renderHeader={() => '填写医嘱'} className="my-list">
                    <TextareaItem
                        clear
                        placeholder="内容"
                        autoHeight
                        rows={7}
                        title='医嘱:'
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
