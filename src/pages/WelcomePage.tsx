import React from "react";
import styled from "styled-components";
import { AppButton } from "../common/components/AppButton";
import { OnboardingCard } from "../common/components/OnboardingCard";
import { AuthPageConatiner } from "../common/containers/AuthPageContainer";
import { SLIDES_DATA } from "../constants/OnboardingData";

const CardContainer = styled.div`
  margin-top: 30px;
  display: -webkit-box;
  flex-direction: row;
  justify-content: center;
  overflow: auto;
`;

const IndicatorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 15px;
`;

const SlideIndicator = styled.div`
  height: 15px;
  width: 15px;
  background-color: #f2f2f2;
  border-radius: 50px;
  margin-right: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const WelcomePage = () => {
  const onButtonClickHandler = () => console.log("navigated");
  return (
    <AuthPageConatiner>
      <CardContainer>
        {SLIDES_DATA.map((slide, indx) => {
          return (
            <React.Fragment key={`${indx}${slide?.heading}`}>
              <OnboardingCard
                title={slide!.heading}
                description={slide!.description}
              />
            </React.Fragment>
          );
        })}
      </CardContainer>
      <IndicatorContainer>
        {SLIDES_DATA.map((i, indx) => {
          return <SlideIndicator key={`${indx}${i?.heading}`} />;
        })}
      </IndicatorContainer>
      <ButtonContainer>
        <AppButton
          active
          title="Cleared for take-off"
          onClickHandler={() => onButtonClickHandler()}
        />
      </ButtonContainer>
    </AuthPageConatiner>
  );
};
