import React from "react";
import styled from "styled-components";

const StyledContentSection = styled.section`
  position: relative;
  padding: 30vh 4vw 10vh;
  background-color: #e1dfdd;
  z-index: -1;
  .content__wrapper {
    width: 100%;
    max-width: 1417px;
    margin: 0 auto;
    .content__text--heading {
      font-family: "Italiana", serif;
      font-size: clamp(1rem, 5.5vw, 10rem);
      line-height: 1;
      font-weight: 300;
    }
    .content__text--copy {
      font-size: clamp(1rem, 2vw, 1.25rem);
      line-height: 1.3;
      font-weight: 300;
      width: 50%;
      margin-bottom: 10vh;
      margin-top:10vh;

    }
  }
`;
const Content = () => {
  return (
    <StyledContentSection>
      <div className="content__wrapper">
        <p className="content__text--heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nostrum
          hic eveniet laboriosam, neque nulla possimus voluptate ullam cum
          cumque delectus adipisci inventore pariatur veritatis, non et. Eaque,
          odio cumque!
        </p>
        <p className="content__text--copy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          maiores quo laborum temporibus culpa libero et aliquam eveniet iusto,
          neque voluptatibus itaque delectus laudantium quidem nostrum enim
          blanditiis quaerat minus?
        </p>
      </div>
    </StyledContentSection>
  );
};

export default Content;
