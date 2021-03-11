import React, { Component } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Conditions from "./components/Conditions";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center bottom;
  background-image: url("https://images.unsplash.com/photo-1521911494023-701af6c9579c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1616&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;

const Content = styled.div`
  width: 650px;
  height: 400px;
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: auto;
  display: block;
  transform: translateY(-50px);
`;

const API_KEY = "80e06df3b0a11ff1061bde09a6793a9a";

const APP_ID = "8c44ef0e";

class App extends Component {
  state = {
    resort: undefined,
    error: undefined,
  };

  getReport = async (e) => {
    e.preventDefault();

    const resort = e.target.elements.resort.value;

    const stringConv = resort.toLowerCase().trim();

    const resortKey = {
      mammoth: 619002,
    };

    const match = resortKey.hasOwnProperty(stringConv);

    if (match) {
      const RESORT_ID = resortKey[stringConv];

      const api_call = await fetch(
        `https://api.weatherunlocked.com/api/resortforecast/${RESORT_ID}?app_id=${APP_ID}&app_key=${API_KEY}`
      );

      const sheet = await api_call.json();

      console.log(sheet);

      this.setState({
        resort: stringConv,
      });
    } else {
      this.setState({
        resort: undefined,
        error: true,
      });
      alert("Please enter a resort in California");
    }
    console.log(this.state.resort);
  };
  render() {
    return (
      <Wrapper>
        <Content>
          <Form resort={this.state.resort} getReport={this.getReport} />
          <Conditions resort={this.state.resort} />
        </Content>
      </Wrapper>
    );
  }
}

export default App;
