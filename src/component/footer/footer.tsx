import { Col, Row } from "antd";


function FooterCustom(){
    return(
        <div className="footer">
            <Row style={{height: '100%'}}>
                <Col span={8}>
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                </Col>
                <Col span={8} >
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                </Col>
                <Col span={8} >
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                    <span>footer</span><br/>
                </Col>
            </Row>                              
        </div>
    );
}

export default FooterCustom;