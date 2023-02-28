import "./Contact.css";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RxCodesandboxLogo } from "react-icons/rx";
import styled from "styled-components";
import Form from "../Form";

const Contact = () => {
    return (
        <div className="contact-section-main" id="contact">
            <h1>Contact</h1>
            <ContactWrapper>
                <ContactDetail>
                    <div className="contact-section-container">
                        <div className="contacts-social-media-icons">
                            <p><MdPhoneIphone /></p>
                            <p><MdOutlineMail /></p>
                            <p><GoLocation /></p>
                        </div>
                        <div className="contact-information">
                            <p>+91 7028401240</p>
                            <p>sw.wakchaure@gmail.com</p>
                            <p>Sangamner, Maharastra</p>
                        </div>
                    </div>
                    <div className="social-media-icons">
                        <a href="https://www.linkedin.com/in/swapnil-wakchaure-675071202/" target="_blank">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/swapnilwakchaure" target="_blank">
                            <BsGithub />
                        </a>
                        <a href="https://codesandbox.io/u/swapnilwakchaure2411999" target="_blank">
                            <RxCodesandboxLogo />
                        </a>
                    </div>
                </ContactDetail>
                <FormWrapper>
                    <Form />
                </FormWrapper>
            </ContactWrapper>
        </div>
    )
}

export default Contact;




const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, max-content));
  justify-content: center;
  align-items: center;
  grid-gap: 5%;
  margin-bottom: 50px;
`

const ContactDetail = styled.div`
  
`


const FormWrapper = styled.div`
  
`