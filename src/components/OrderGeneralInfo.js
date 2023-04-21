import React from 'react'
import {Row,Col,Input,Radio,Select,Form, Checkbox} from 'antd'
import TextArea from 'antd/es/input/TextArea'

const OrderGeneralInfo=()=>{
    const [category,setCategory]=React.useState("")
    const [tableData,setTableData]=React.useState([
        {
            item:"4 Inch Reel LT, 22 ft",
            sku:"(100-108-00)",
            qty:1,
            price:289.53,
            no_cut_length:true,
            note:""
        },
        {
            item:"4 Inch Reel LT, 22 ft",
            sku:"(100-108-00)",
            qty:1,
            price:289.53,
            no_cut_length:false,
            cut_length:{
                qty:2,
                cut_desc:[
                    {
                        length:""
                    },
                    {
                        length:""
                    }
                ]
            },
            note:""
        },
        {
            item:"4 Inch Reel LT, 22 ft",
            sku:"(100-108-00)",
            qty:1,
            price:289.53,
            no_cut_length:true,
            note:""
        },
    ])
    
  return (
    <div className='form-container'>
        <Form layout="vertical" >
            <Row gutter={[48,48]}>
                    <Col span={12}>
                        <div>
                            <Form.Item>
                                <label className='form-label'>Type</label>
                                <Radio.Group>
                                    <Radio value={"Customer"}>Customer</Radio>
                                    <Radio value={"Dealer"}>Dealer</Radio>
                                    <Radio value={"Lead"}>Lead</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <Form.Item>
                                <Select className='form-selection'>
                                    <Select.Option>Select</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[48,48]}>
                    <Col span={12}>
                        <div>
                            <Form.Item label="Job Name/PO">
                                <Input />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item label="Category">
                                <Select className='form-selection' onChange={(e)=>setCategory(e)}>
                                    <Select.Option disabled={true}>Select</Select.Option>
                                    <Select.Option value="retractable_screen_system">Retractable Screen System</Select.Option>
                                    <Select.Option value="screen_only">Screen Only</Select.Option>
                                    <Select.Option value="components">Components</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        {category=="retractable_screen_system" || category=="screen_only"?(
                            <div>
                                <Form.Item label="Product">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Insect Screen">Insect Screen</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="retractable_screen_system" || category=="screen_only"?(
                            <div>
                                <Form.Item label="Fabric">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Ferrari">Ferrari</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="retractable_screen_system" || category=="screen_only"?(
                            <div>
                                <Form.Item label="Track Type">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="One Track">One Track</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="screen_only"?(
                            <div>
                                <Form.Item label="Keder Colors">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="retractable_screen_system"?(
                            <div>
                                <Form.Item label="Weight Bar">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Ferrari">Ferrari</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="retractable_screen_system"?(
                            <div>
                                <Form.Item label="Operator">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Fenetex Smart Motor">Fenetex Smart Motor</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}
                    </Col>
                    <Col span={12}>
                        <div>
                            <Form.Item label="Job Number">
                                <Input />
                            </Form.Item>
                        </div>
                        {category=="components"?(
                            <div>
                                <Form.Item label="Type">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Reel Assembly">Reel Assembly</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}
                        {category=="retractable_screen_system" ?(
                            <div>
                                <Form.Item label="Enter Qty">
                                    <Input />
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="retractable_screen_system" ?(
                                <div className='form-row'>
                                    <Form.Item>
                                        <div className='form-label'>Phase 2</div>
                                        <Radio.Group>
                                            <Radio value={"Yes"}>Yes</Radio>
                                            <Radio value={"No"}>No</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <div className='form-selection-container'>
                                        <Form.Item>
                                            <Select className='form-selection'>
                                                <Select.Option disabled={true}>Select</Select.Option>
                                                <Select.Option value="Tracks only Installed">Tracks only Installed</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                        ):null}

                        {category=="retractable_screen_system" || category=="screen_only" ?(
                            <div>
                                <Form.Item label="Color">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Ferrari">Ferrari</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="retractable_screen_system" ?(
                            <div>
                                <Form.Item label="Track Color">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Ferrari">Ferrari</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}
                        
                        {category=="retractable_screen_system" || category=="screen_only" ?(
                            <div>
                                <Form.Item label="Weight Bar Color">
                                    <Select className='form-selection'>
                                        <Select.Option disabled={true}>Select</Select.Option>
                                        <Select.Option value="Ferrari">Ferrari</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        ):null}

                        {category=="retractable_screen_system" ?(
                            <div style={{paddingTop:"9px"}}>
                                <Form.Item>
                                    <div className='form-label'>Housing Style</div>
                                    <Radio.Group>
                                        <Radio value={"Hood"}>Hood</Radio>
                                        <Radio value={"No Hood"}>No Hood</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        ):null}
                    </Col>
                </Row>
                {category=="components"?(
                    <Row gutter={[48,48]}>
                        <Col span={24}>
                            <div className='title-container'>
                                <div className='table-title'>4.0" REEL ASSEMBLY</div>
                                <div className='title-border' />
                            </div>   
                            <table>
                                <thead>
                                    <td>Item</td>
                                    <td>SKU</td>
                                    <td>Qty</td>
                                    <td>Price</td>
                                    <td>Cut length</td>
                                    <td>Note</td>
                                </thead>
                                <tbody>
                                    {tableData&&tableData.map((data,index)=>{
                                        if(data.no_cut_length){
                                            return(
                                                <tr>
                                                    <td>{data.item}</td>
                                                    <td>{data.sku}</td>
                                                    <td style={{width:"10%"}}><Input type='number' /></td>
                                                    <td style={{width:"10%"}}><Input type='number' /></td>
                                                    <td><Checkbox checked={data.no_cut_length}>No Cut Length</Checkbox></td>
                                                    <td><TextArea value={data.note} /></td>
                                                </tr>
                                            )
                                        }else{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{data.item}</td>
                                                        <td>{data.sku}</td>
                                                        <td style={{width:"10%"}}><Input type='number' value={data.qty} /></td>
                                                        <td style={{width:"10%"}}><Input type='number' value={data.price} /></td>
                                                        <td><Checkbox checked={data.no_cut_length}>No Cut Length</Checkbox></td>
                                                        <td><TextArea value={data.note} /></td>
                                                    </tr>
                                                    <tr style={{verticalAlign:"baseline"}}>
                                                        <td></td>
                                                        <td>Enter No. of Cuts</td>
                                                        <td style={{width:"10%"}}><Input type='number' value={data?.cut_length?.qty} /></td>
                                                        <td style={{width:"10%"}}>
                                                            {data?.cut_length?.cut_desc.map((len,index)=>(
                                                                <Input style={{marginTop:"10px"}} />
                                                            ))}
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                ):null}

                {category=="retractable_screen_system" || category=="screen_only" || category=="components"?(
                    <Row gutter={[48,48]}>
                        <Col span={24}>
                            <Form.Item label="Note">
                                <Input.TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row>
                ):null}

        </Form>
    </div>
  )
}
export default OrderGeneralInfo
