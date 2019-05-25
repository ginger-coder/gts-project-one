import { Link } from 'react-router-dom';
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
                        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                    >
                        <Link to={route.path} onClick={onOpenChange}>{route.name}</Link>
                    </List.Item>);
                })}
            </List>);

            return (<div>
                <NavBar icon={<Icon type="ellipsis" />} onLeftClick={onOpenChange}> 医疗保健 </NavBar>
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
