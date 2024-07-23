import React from "react";
import styled from "styled-components";

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  margin-top: 70px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 8px 15px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
  }

  button {
    margin-left: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const MainWrapper = styled.main`
  width: 100%;
  padding: 40px;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const LogoItem = styled.div`
  flex: 0 1 15%;
  text-align: center;
  margin: 10px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const RecommendationSection = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
`;

const RecommendationTitle = styled.h2`
  margin-bottom: 40px;
`;

const RecommendationImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Main = () => {
  return (
    <BodyWrapper>
      <Header>
        <Menu>
          <MenuItem>인기뉴스</MenuItem>
          <MenuItem>장르별</MenuItem>
          <MenuItem>최신작</MenuItem>
          <MenuItem>랭킹</MenuItem>
          <MenuItem>더보기+</MenuItem>
        </Menu>
        <Search>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </Search>
      </Header>
      <MainWrapper>
        <LogoContainer>
          {/* 예시 로고들, 실제 이미지 URL로 대체 */}
          {["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"].map((logo, index) => (
            <LogoItem key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </LogoItem>
          ))}
        </LogoContainer>
       
      </MainWrapper>
      <RecommendationSection>
          <RecommendationTitle>추천 콘텐츠</RecommendationTitle>
          <RecommendationImage src="recommended-image.jpg" alt="추천 이미지" />
        </RecommendationSection>
    </BodyWrapper>
  );
};

export default Main;
