import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: block;
  margin-top: 0em;
  box-sizing: border-box;
`;

const Field = styled.div`
  margin-bottom: 15px;
  box-sizing: border-box;
  display: block;
`;

const Input = styled.input`
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
  margin: 0;
  font: inherit;
  color: inherit;
`;

const FieldInput = styled(Input)`
  height: 60px;
  margin-bottom: 30px;
  width: 100%;
  background: rgba(227, 231, 228, 1);
  font-family: "Open Sans", sans serif;
  border: 0;
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  padding: 0 10px;
  border-radius: 0;
`;

const TextArea = styled.textarea`
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textarea;
  background-color: white;
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  resize: auto;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  box-sizing: border-box;
  margin: 0;
  font: inherit;
  color: inherit;
  overflow: auto;
  width: 100%;
  background: rgba(227, 231, 228, 1);
  font-family: "Open Sans", sans serif;
  border: 0;
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  padding: 0 10px;
  padding-top: 1em;
`;

const ButtonDiv = styled.div`
  display: block;
  box-sizing: border-box;
`;

const ButtonInput = styled(Input)`
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  outline: 0;
  background: #95cbdd;
  -webkit-appearance: button;
  cursor: pointer;
  margin: 0 auto 20px auto !important;
  -webkit-box-shadow: none;
  -webkit-border-radius: 0;
  display: block;
  border: 0;
  text-transform: none;
  color: #fff;
  width: 185px;
  height: 60px;
  text-shadow: none;
  font-size: 14px;
  padding: 0.5em;
  letter-spacing: 0.05em;
`;

const Row = styled.div`
  z-index: 9999;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
  display: block;
`;

const Col = styled.div`
  margin-left: 16.66666667%;
  width: 66.66666667%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  display: block;
`;

const ContactForm = styled.div`
  position: relative;
  z-index: 999;
  box-sizing: border-box;
  display: block;
`;
export default class ContactFormSection extends React.Component {
  render() {
    console.log("In side ContactForm");
    return (
      <Row>
        <Col>
          <ContactForm>
            <Form>
              <Field>
                <FieldInput type="text" placeholder="Your Name"></FieldInput>
              </Field>
              <Field>
                <FieldInput type="text" placeholder="Your Email"></FieldInput>
              </Field>
              <Field>
                <FieldInput type="text" placeholder="Your Subject"></FieldInput>
              </Field>
              <Field>
                <TextArea></TextArea>
              </Field>
              <ButtonDiv>
                <ButtonInput type="submit" value="SEND MESSAGE"></ButtonInput>
              </ButtonDiv>
            </Form>
          </ContactForm>
        </Col>
      </Row>
    );
  }
}
