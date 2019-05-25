import { Accordion, List, Pagination, Icon, WhiteSpace, SearchBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './assets/style/index.scss';

export default class adminUserManage extends Component {
  state = {
    homeData: [],
  }

  componentWillReceiveProps(nP) {
    // 如果切换了路由
    if (nP.location.key !== this.props.location.key) {

    }
  }

  componentDidMount() {

  }

  linkToPath = (path) => {
    this.props.history.replace(path);
  }

  render() {
    let { linkToPath } = this;
    return (
      <div id="admin-user-main" >
        <Link to='/admin/medicine/add' className="add-item-button" > + </Link>
        <SearchBar
          placeholder="查找"
          maxLength={8}
          onSubmit={value => console.log(value, 'onSubmit')}
        />
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="用药1">
            <List className="my-list">
              <List.Item arrow="horizontal" onClick={()=>linkToPath('/admin/medicine/detail/1')} >查看</List.Item>
              <List.Item arrow="horizontal" onClick={()=>linkToPath('/admin/medicine/edit/1')}>编辑</List.Item>
              <List.Item arrow="horizontal">删除</List.Item>
            </List>
          </Accordion.Panel>
        </Accordion>
        <WhiteSpace />
        <div className="pagination-container" >
          <Pagination total={5}
            className="custom-pagination-with-icon"
            current={1}
            locale={{
              prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
              nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
            }}
          />
        </div>
        
      </div>
    )
  }
}
