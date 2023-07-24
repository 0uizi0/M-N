# Meet&Notes

<div align="center">
  <img width="529" alt="main" src="./src/assets/images/main.png">
</div>

## 팀원 소개

|                                      구슬기                                      |                                      김은정                                      |                                      김호준                                      |                                     박성재                                      |                                      백진솔                                      |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img width="160px" src="https://avatars.githubusercontent.com/u/103307233?v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/102431281?v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/108918379?v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/71877347?v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/121254493?v=4"/> |
|                     [@guseulgi](https://github.com/guseulgi)                     |                       [@0uizi0](https://github.com/0uizi0)                       |                     [@HOJOON07](https://github.com/HOJOON07)                     |                [@qkrtjdwo5662](https://github.com/qkrtjdwo5662)                 |                    [@KARIS-SOL](https://github.com/KARIS-SOL)                    |
|                              Front-end <br/> Design                              |                                    Front-end                                     |                             Front-end <br/> Back-end                             |                                    Back-end                                     |                                    Front-end                                     |

## 프로젝트 소개

프로젝트 기획 방향 및 세부 사항 공유를 통한 효율적인 프로젝트 진행을 위해 기획된 서비스입니다.

애자일 프로젝트 관리 도구 중 하나인 Jira의 프로세스를 참고하였습니다.

## 시작 가이드

### Requirements

For building and running the application you need:

- Node.js 18.16.0
- Npm 9.5.1

### Installation

```bash
$ git clone https://github.com/0uizi0/M-N
$ cd M-N
```

#### Run

```bash
$ npm install
$ npm start
```

---

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Styled-components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled_components&logoColor=white")

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

---

## 화면 구성 📺

|                               메인 페이지                               |                           회원가입 페이지                            |
| :---------------------------------------------------------------------: | :------------------------------------------------------------------: |
|          <img width="329" src="./src/assets/images/main.png"/>          | <img width="329" height="180" src="./src/assets/images/signup.png"/> |
|                           워크스페이스 페이지                           |                     워크플로우(칸반보드) 페이지                      |
| <img width="329" height='184' src="./src/assets/images/workspace.png"/> |      <img width="329" src="./src/assets/images/workflow.png"/>       |

---

## 주요 기능 📦

### ⭐️ 프로젝트 별 작업 공간 생성 및 팀원 초대 기능

- 작업 공간 생성 시, 초대된 팀원만 접근 가능하도록 함
- 추후 깃허브 레퍼지토리와 연결 예정

### ⭐️ 칸반보드 형식의 프로젝트 공간

- 애자일 프로젝트 템플릿인 칸반 보드를 활용해 해야 할 업무를 시각화
- 각 업무의 단계를 따라 이슈 카드가 배치되어, 프로젝트의 진행 상황을 쉽게 파악 가능

---

## 아키텍쳐

### 디렉토리 구조

```bash
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜GlobalStyle.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┗ 📜Nav.jsx
 ┣ 📂pages
 ┃ ┗ 📂components
 ┃   ┣ 📂CreateWorkspace
 ┃   ┣ 📂Main
 ┃   ┣ 📂SignUp
 ┃   ┣ 📂Workflow
 ┃   ┗ 📂workspaceList
 ┣ 📂store
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📜createDate.js
 ┃ ┃ ┣ 📜user.js
 ┃ ┃ ┗ 📜workspace.js
 ┃ ┗ 📜index.js
 ┣ 📜Router.js
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
