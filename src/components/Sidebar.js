import React from 'react'
import {Layout,Menu} from 'antd'
import {DashboardFilled,VideoCameraOutlined,UploadOutlined} from '@ant-design/icons'

const {Sider}=Layout
const Sidebar=()=> {
    const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className='sidebar-container'>
        <Sider collapsible collapsed={collapsed} trigger={null} width={"100%"} onCollapse={(value) => setCollapsed(value)}>
            <div
                style={{
                    height: 32,
                    margin: 16,
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[
                {
                    key: '1',
                    icon: <i className="fa fa-desktop" aria-hidden="true"></i>,
                    label: 'Dashboard',
                },
                {
                    key: '2',
                    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
                    label: 'New Order / Quote',
                    children:[
                        {
                            key:'2.1',
                            label: 'Manage Quotes',
                        },
                        {
                            key:'2.2',
                            label: 'Manage Orders',
                        },
                        {
                            key:'2.3',
                            label: 'Manage Invoices',
                        },
                        {
                            key:'2.4',
                            label: 'Draft Quotes',
                        }
                    ]
                },
                {
                    key: '3',
                    icon: <i className="fa fa-truck" aria-hidden="true"></i>,
                    label: 'Track Shipping',
                },{
                    key: '4',
                    icon: <i className="fa fa-share-square-o" aria-hidden="true"></i>,
                    label: 'RMA',
                },{
                    key: '5',
                    icon: <i className="fa fa-users" aria-hidden="true"></i>,
                    label: 'Employee',
                },{
                    key: '6',
                    icon: <i className="fa fa-pie-chart" aria-hidden="true"></i>,
                    label: 'Reports',
                },{
                    key: '7',
                    icon: <i className="fa fa-info-circle" aria-hidden="true"></i>,
                    label: 'Help & Support',
                },{
                    key: '8',
                    icon: <i className="fa fa-gear" aria-hidden="true"></i>,
                    label: 'Settings',
                },
            ]} />
        </Sider>
    </div>
  )
}

export default Sidebar
