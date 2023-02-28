import styled from "styled-components";

const Form = () => {
    return (
        <FormWrapper>
            <FormName>
                <FormLabel>
                    <Label>Name: </Label>
                    <Label>Email: </Label>
                    <Label>Message: </Label>
                </FormLabel>
                <FormInput>
                    <Input
                        type="text"
                        placeholder="Enter You Name..."
                    />
                    <br />
                    <Input
                        type="email"
                        placeholder="Enter Email Address..."
                    />
                    <br />
                    <Input
                        type="text"
                        placeholder="Write here..."
                    />
                </FormInput>
            </FormName>
            <Button>Send Message</Button>
        </FormWrapper>
    )
}


export default Form;


const FormWrapper = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  line-height: 30px;
  padding: 20px;

  @media (max-width: 500px) {
    width: 90%;
    margin: auto;
  }
`

const FormName = styled.div`
  margin: 0px 0px 0px 10px;
  display: flex;
  gap: 10%;
  align-items: center;
  line-height: 60px;
`

const FormLabel = styled.div`
  width: 15%;
  font-size: 18px;
`

const Label = styled.label`
  padding: 0px 5px;
  font-size: 18px;
`

const FormInput = styled.div`
  width: 80%;
`


const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
`

const Button = styled.button`
  border: 1px solid red;
  margin: 20px 0px 0px 0px;
  padding: 10px 20px;
  font-size: 16px;
  letter-spacing: .10rem;
  border: none;
  transition-duration: .5s;
  border-radius: 5px;
  
  &: hover {
    cursur: pointer;

  }
`


