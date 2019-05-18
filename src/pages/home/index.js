import {bindActionCreators} from 'redux';
import {actions} from './homeRedux';
let {
  getHomeDataAction
} = actions;

@connect(
  state=>{
      let {
          homeData
      } = state;
      return {
          homeData:[...homeData],
      }
  },
  dispatch=>bindActionCreators({
      getHomeDataAction
  },dispatch)
)
export default class AppHomePage extends Component{
  state = {
      homeData:[],
  }

  componentWillReceiveProps(nP){
      // 如果切换了路由
      if(nP.location.key!==this.props.location.key){
          
      }
  }

  componentDidMount(){
      // 请求商品详情数据
      console.log(this.props);
      
  }
  render(){
      let {getHomeDataAction,homeData} = this.props;
      return (
          <div id="main" >
          <div>
            {
              homeData
            }
          </div>
              <button onClick={getHomeDataAction}>home button</button>
          </div>
      )
  }
}
