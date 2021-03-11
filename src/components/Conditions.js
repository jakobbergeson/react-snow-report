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
                {/* <h2> {this.props.city}</h2> */}
              </InlineDate>
            </Today>
          </ConditionsContainer>
        )}
      </div>
    );
  }
}
export default Conditions;
