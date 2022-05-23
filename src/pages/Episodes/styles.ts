import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const MainContent = styled.main`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  position: relative;

  top: -300px;

  > h1 {
    color: #fff;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 1000px) {
    top: -150px;
  }

  @media only screen and (max-width: 768px) {
    top: -100px;
  }
`;

export const SectionEpisodes = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
