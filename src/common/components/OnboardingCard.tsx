import styled from "styled-components";

interface OnboardingProps {
  title: string;
  description: string;
  icon?: any;
}

const Card = styled.div`
  max-height: 533px;
  max-width: 371px;
  min-height: 500px;
  min-width: 300px;
  background-color: #f2f2f2;
  border-radius: 14px;
  margin: 10px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

const CardHeading = styled.p`
  font-size: 20px;
  font-family: "Mohave", sans-serif;
`;

const CardDescription = styled.p`
  font-size: 20px;
  font-family: "Mohave", sans-serif;
`;

const CardImageContainer = styled.div`
  width: 331px;
  height: 270px;
  background: #d9d9d9;
`;

export const OnboardingCard: React.FC<OnboardingProps> = ({
  title,
  description,
}) => {
  return (
    <Card>
      <CardHeading role="card_title">{title}</CardHeading>
      <CardImageContainer />
      <CardDescription role="card_desc">{description}</CardDescription>
    </Card>
  );
};
