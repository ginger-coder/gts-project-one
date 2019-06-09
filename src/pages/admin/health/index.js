import { Accordion, List, Pagination, Icon, WhiteSpace, SearchBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './assets/style/index.scss';
import RequestURL from 'api/requestAPI';

export default class adminUserManage extends Component {
  state = {
    medicalData: [],
    page: 1,
    totalCount: 0,
  }

  componentDidMount() {
    let { page } = this.state;
    this.loadData(page);
  }

  linkToPath = (path) => {
    this.props.history.replace(path);
  }

  loadData = (page = 1) => {
    // data{
    //   code: 0
    //   list: [{
    //   id:			数据id,
    //   username:	用药人姓名,
    //   des:	用药说明,
    //   creatime:	添加时间,
    //   updatime:	修改时间,
    //   },
    let { medicalData } = this.state;
    RequestURL.requestData('/health/list', {
      page
    })
      .then((res) => {
        if (res.code == 0) {
          this.setState({
            medicalData: [...res.list],
            totalCount: res.pageDataCount,
          })
        }
      })
  }

  deleteDate = id => {
    let { medicalData } = this.state;
    RequestURL.requestData('/health/del', {
      id
    })
      .then((res) => {
        if (res.code == 0) {
          medicalData = medicalData.filter((el, index) => {
            return el.id !== id;
          })
          this.setState({
            medicalData
          })
        }
      })
  }
  pageCallback =(page) => {
    this.setState({
      page: page
    },()=>{
      this.loadData(page);
    })
    
  }

  render() {
    let { linkToPath } = this;
    let { totalCount, page, medicalData } = this.state;

    let loadData = medicalData.map((el,index)=>{
      return (
        <Accordion.Panel header={el.title} key={el.id}>
            <List className="my-list">
              <List.Item arrow="horizontal" onClick={() => linkToPath(`/admin/health/detail/${el.id}`)} >查看</List.Item>
              <List.Item arrow="horizontal" onClick={() => linkToPath(`/admin/health/edit/${el.id}`)}>编辑</List.Item>
              <List.Item arrow="horizontal" onClick={() => this.deleteDate(el.id)}>删除</List.Item>
            </List>
          </Accordion.Panel>
      )
    })
    return (
      <div id="admin-user-main" >
        <Link to='/admin/health/add' className="add-item-button" > + </Link>
        <SearchBar
          placeholder="查找"
          maxLength={8}
          onSubmit={value => console.log(value, 'onSubmit')}
        />
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          {
            loadData
          }
        </Accordion>
        <WhiteSpace />
        <div className="pagination-container" >
          <Pagination total={totalCount}
            className="custom-pagination-with-icon"
            current={page}
            onChange={(e)=>{this.pageCallback(e)}}
            locale={{
              prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
              nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
            }}
          />
        </div>
        
      </div>
    )
  }
}
