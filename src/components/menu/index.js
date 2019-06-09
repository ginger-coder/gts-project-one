import { NavLink  } from 'react-router-dom';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './asstes/style.scss';
import { routerData } from '../../config/routerConfig';



const MainSubscription = (WrappedComponent, type) => {
    const filterTitle = (t) => {
        return routerData[type].filter((el) => {
            return el.path;
        })
    }
    return class MenuPage extends Component {
        state = {
            open: false,
            routers: routerData[type]
        }
        onOpenChange = (...args) => {
            this.setState({ open: !this.state.open });
        }
        render() {
            // fix in codepen

            let { routers, open } = this.state;
            let { onOpenChange } = this;
            const sidebar = (<List>
                {routers.map((route, index) => {
                    return (<List.Item key={index}
                    >
                        <span className={`iconfont ${route.icon}`}></span>
                        <NavLink  to={route.path} activeClassName="active" onClick={onOpenChange}>{route.name}</NavLink>
                    </List.Item>);
                })}
            </List>);

            return (<div>
                <NavBar icon={<Icon type="ellipsis" />} onLeftClick={onOpenChange}> 社区医疗服务 </NavBar>
                <Drawer
                    className="menu-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    enableDragHandle
                    contentStyle={{}}
                    sidebar={sidebar}
                    open={open}
                    onOpenChange={onOpenChange}
                >
                    <WrappedComponent router={routers} />
                </Drawer>
            </div>);
        }
    }

}
export default MainSubscription;
