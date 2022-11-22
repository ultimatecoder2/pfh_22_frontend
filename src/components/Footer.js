import React,{Component} from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../assets/css/header_footer.css'


class footer extends Component{
    render(){
        return(
        // <Container>
            <footer>
                <div className="footerSection">
                    <Container>
                        <div className="footerSectionInner">
                            <Row >
                                <Col md={6} className="footerColumn">
                                    <div className="footerHeading"> About Us</div>
                                    <div className  = "footerContent">
                                        We are highly enthusiastic individuals who believe in building products that can help the society and solve real world problems. We are currently
                                        pursuing Bachelors in Technology from Punjab Engineering College (PEC), Chandigarh.
                                        
                                    </div>
                                </Col>

                                <Col md={6} className="footerColumn">
                                    <div className="footerHeading"> Contact Us</div>
                                    <div className  = "footerContent">
                                    <Row><div id="address">
                                            For any kind of queries, suggestions, or any other issues, please feel free to write to us.
                                            We will be happy to help you.
                                        </div>
                                    </Row>
                                    {/* <Row><div><span className= "contact_icons"><FiPhoneCall/></span>+91-1234567890</div></Row> */}
                                    <Row><div><span className= "contact_icons"><AiOutlineMail/></span>
                                      mockingjay.pec@gmail.com
                                    </div></Row>
                                    
                                    
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <div className="">
                                <Row className="footer__logo">
                                    {/* <Image src={Logo} className="footer__brandlogo" fluid/> */}
                                </Row>
                                <Row>
                                </Row>
                            </div>
                            <p style={{fontSize:'1.2rem', color:'#fff'}}>Made with ❤️ by <b>Binary Assassins.</b>   </p>            
                            <p>&#169;	2022. All rights Reserved.</p>
                        </div>    
                    </Container>
                </div>
                
                
            
            </footer>
        // </Container>
        );
    }
}
export default footer;