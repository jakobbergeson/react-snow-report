import React, { Component } from "react";
import styled from "styled-components";

const FormDiv = styled.form`
  width: 100%;

  & > h1 {
    width: 100%;
    text-align: center;
    font-weight: 200;
    letter-spacing: 0.26em;
    font-size: 50px;
  }

  & > p {
    font-weight: 100;
    letter-spacing: 0.2em;
    font-size: 14px;
    text-align: center;
    padding-top: 20px;
  }

  & > button {
    display: inline-block;
    position: absolute;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: black;
    border: 2px solid black;
    top: 80%;
    left: 34%;
  }
`;

const InputDiv = styled.div`
  width: 510px;
  margin: 50px auto 20px auto;
  display: block;
  align: center;

  & > input {
    border: none;
    border-radius: 9px;
    outline: none;
    font-family: "Raleway", sans-serif;
    color: #3f3f3f;
    box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
    margin: 0 10px;
    font-size: 33px;
    width: 480px;
    text-align: center;
    height: 76px;
    padding: 10px 0 10px 0px;
    ::placeholder {
      opacity: 0.4;
    }
  }
`;

class Form extends Component {
  render() {
    return (
      <div>
        {!this.props.report && (
          <FormDiv onSubmit={this.props.getReport}>
            <h1>Snow Report</h1>
            <InputDiv>
              <input name="resort" type="text" placeholder="Big Bear"></input>
            </InputDiv>
            <p>Enter name of ski resort to begin</p>
            <button>Enter</button>
          </FormDiv>
        )}
      </div>
    );
  }
}

export default Form;
