import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";

const ConditionsContainer = styled.div`
  height: 100%;
`;

const Today = styled.div`
  width: 100%;
  text-align: left;
  font-size: 10px;
  padding: 46px;
`;

const InlineDate = styled.div`
  * {
    display: inline;
  }

  p {
    font-size: 14px;
    color: #848484;
  }

  h2 {
    display: block;
    font-size: 20px;
  }
`;

const TodayDescribe = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  align-items: flex-start;
  h1 {
    font-size: 130px;
    flex: 130px;
    margin: 0;
    padding-left: 60px;
  }
  div {
    flex: 300px;
    padding: 60px 0 0 0;
    margin: 0;
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 17px;
    }
    p {
      text-align: center;
      width: 180px;
      margin: 0 auto;
      color: #848484;
      font-size: 12px;
    }
  }
`;

const Future = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "day day2 day3 day4 day5";
  position: relative;
  justify-items: center;
  height: 100%;
  width: 787px;
  margin-top: 185px;
  transform: translate(-50px, 0px);

  p {
    margin: 0;
    text-align: center;
  }
`;

const FutureDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
  margin-right: 30px;
  background-color: white;
  width: 100px;
  height: 150px;
  padding: 18px;
  grid-area: day;

  &:nth-child(2) {
    grid-area: day2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }

  &:nth-child(3) {
    grid-area: day3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
  &:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    grid-area: day4;
  }
  &:nth-child(5) {
    grid-area: day5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
`;

class Conditions extends Component {
  render() {
    const date = new Date();
    return (
      <div>
        {this.props.resort && (
          <ConditionsContainer>
            <Today>
              <InlineDate>
                <p>
                  <Moment format="MMMM do[, ] YYYY">{date}</Moment>
                </p>
              </InlineDate>
              <TodayDescribe></TodayDescribe>
            </Today>
            <Future>
              <FutureDiv></FutureDiv>
              <FutureDiv></FutureDiv>
              <FutureDiv></FutureDiv>
              <FutureDiv></FutureDiv>
              <FutureDiv></FutureDiv>
            </Future>
          </ConditionsContainer>
        )}
      </div>
    );
  }
}
export default Conditions;
