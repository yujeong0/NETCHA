# 넷챠

 [Notion : [넷차-NETCHA\]](https://www.notion.so/NETCHA-72ed718f85484ea88000e5e69d0e089d)

------

## ✒ 서비스 한 줄 요약

넷플릭스, 왓챠, 왓챠피디아를 클론 코딩한 개인화 추천알고리즘 기반 스트리밍, 영화 취향 분석 웹서비스



## 📖 기획 배경

프로젝트 수행 목적을 개발자로서의 역량을 키우는데에 중점을 두고 이미 잘 만들어진 서비스를 clone코딩해보며, 추가적인 기능을 구현해보자는 취지로 넷챠를 기획하게 되었습니다.



## 👥 팀 구성

<img src="./README.assets/team-Members.png" />



## 📑 프로젝트 상세 소개

**🕹 What features does our service provide?**

​	사용자가 보고싶은 영화를 보여줍니다. 

​	우리의 개인화된 추천 알고리즘을 이용해 영화를 추천해줍니다. 

​	리뷰를 작성할 수 있고, 다른 사용자가 작성한 리뷰도 볼 수 있어요. 

​	사용자별 영화 취향 분석을 보여줍니다.

​	보고싶은영화를 찜해두어 언제든 바로 찾을수 있어요.

​	영화를 평가하면서 사용자 취향에 맞는 영화를 추천받을수 있어요.

​	MBTI성향을 기반으로 영화를 추천받을수 있어요.

- **기능 명세 바로가기**

  [기능 명세](https://www.notion.so/4ec97bb09b314fd29ef90ff0e13d31a3)

- **Table 및 ERD 바로가기**

  

## 🔎 상세 화면 및 서비스 흐름 구성

- 넷챠
 [상세화면 및 테스트케이스](https://www.notion.so/bd8693c94a1d4ce4a826cd55bea22302)


- 넷챠피디아

  [상세화면 및 테스트케이스](https://www.notion.so/bd8693c94a1d4ce4a826cd55bea22302)



## 🗓️ 개발 일정

- 개발 일정(notion으로 관리했어요 ! )

  <img src="./README.assets/plan.png" />
  
  

## 📚 기술 스택

- **Back-End**
  - Java 8
  - Spring Boot
  - Spring Security
  - JPA Hibernate & Spring Data JPA
- **Front-End**
  - React.js
  - Redux
  - Redux-saga
  - Material-UI
  - chart.js
  - ReactHlsPlayer
- **Devops & Tools**
  - MySQL
  - AWS EC2
  - AWS S3
  - AWS CloudFron
  - git-flow
  - Jira
  - notion



## 🎲 개발 규칙

- **GIT**
  - git branch feature 이름 규칙 : 'feature/FE_admin'
  - git commit 규칙 : '0322_FE : 'commit 내용'
  
- **JIRA(epic 이름 규칙)**
  - 백엔드 : [B] 기능명
  - 프론트엔드 :  [F-넷챠] 기능명 , [F-넷챠피디아] 기능명



## ⚙ 설치 방법

- **백엔드**

  ```bash
  cd /home/ubuntu/s04p23d105/exec/backend/netcha
  sudo gradle jar
  sudo gradle build
  cd build/libs
  sudo java -jar netcha-0.0.1-SNAPSHOT.jar
  ```

- **프론트엔드**

  ```bash
  npm install
  npm start
  ```

  

  

  
