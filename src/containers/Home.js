import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import '../styles/home.scss'
import OrderGeneralInfo from '../components/OrderGeneralInfo'


const Home=()=> {
    const [activeTab,setActiveTab]=React.useState("order_general_info")
  return (
    <div>
        <Header />
        <div className='container'>
            <div className='sidenav-container'>
                <Sidebar />
            </div>
            <div className='content-container'>
                <div className='tab-container'>
                    <div style={activeTab=="order_general_info"?{background:"#2471A3"}:{}} onClick={()=>setActiveTab("order_general_info")}>Order General Info</div>
                    <div style={activeTab=="order_details"?{background:"#2471A3"}:{}} onClick={()=>setActiveTab("order_details")}>Order Details</div>
                    <div style={activeTab=="select_shipping"?{background:"#2471A3"}:{}} onClick={()=>setActiveTab("select_shipping")}>Select Shipping</div>
                    <div style={activeTab=="review_order"?{background:"#2471A3"}:{}} onClick={()=>setActiveTab("review_order")}>Review Order & Make Payment</div>
                </div>
                {activeTab=="order_general_info"?(
                    <OrderGeneralInfo />
                ):null}
            </div>
        </div>
        
    </div>
  )
}

export default Home
