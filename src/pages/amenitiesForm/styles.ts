import styled from "styled-components";

export const Flex = styled.div`
  display: flex;

  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  margin-right: 5rem;
`;

export const Wrapper = styled(Flex)`
  flex-direction: row;
  align-items: center;

  margin-top: 2rem;
`;
