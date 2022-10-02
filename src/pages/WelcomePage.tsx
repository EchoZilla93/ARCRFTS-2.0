import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppButton } from "../common/components/AppButton";
import { OnboardingCard } from "../common/components/OnboardingCard";
import { AuthPageConatiner } from "../common/containers/AuthPageContainer";
import { localStorageItems } from "../constants/local_storage/localStorageItems";
import { SLIDES_DATA } from "../constants/OnboardingData";

const CardContainer = styled.div`
  margin-top: 30px;
  display: -webkit-box;
  flex-direction: row;
  justify-content: center;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { visited_before } = localStorageItems;

  const onButtonClickHandler = () => {
    localStorage.setItem(visited_before, "true");
    navigate("/auth");
  };

  useEffect(() => {
    const visited = localStorage.getItem(visited_before);
    if (visited === "true") navigate("/auth");
  }, [navigate]);

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
      <ButtonContainer>
        <AppButton
          active
          title="Cleared for take-off"
          onClickHandler={onButtonClickHandler}
        />
      </ButtonContainer>
    </AuthPageConatiner>
  );
};
