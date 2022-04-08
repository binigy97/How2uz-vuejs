# application이란?
응용 프로그램 (; 운영 체제에서 실행되는 모든 소프트웨어)

## application의 분류
- Navtive app
- Web app
- Hybrid app

## Native app
- 스마트폰에 설치되는 소프트웨어
- 개발시 운영 체제 별로 최적회된 개발언어 사용
    - android : java, kotlin, python, c++, ...
    - ios : objective-C, c++, swift, ...
- 스마트폰에 최적화  
    = 스마트폰의 기능(센서, GPS, bluetooth, ...) 다루기 용이  
    = 운영 체제 별로 개발/패치

## :star:Web app
- 스마트폰에서 인터넷을 통해 접근 가능한 웹 사이트
- 앱 설치 필요없음
- 사용자가 별도의 업데이트를 하지 않아도 됨
- Native app보다 제한적인 스마트폰 기능 활용

## Hybrid app
- 외부는 native app, 내부는 web app 형태로 실행 (앱 설치 필요, 별도의 업데이트 필요 없음)
- 개발시 하이브리드 앱 프레임워크 필요
    - React native : react 기반
    - Ionic framework : angular, vue 기반
    - Flutter : dart(java + kotlin) 기반

---
# Framework란?
frame을 따르는 코드의 집합체 (; 개발에 필요한 코드가 frame을 갖춰 미리 작성되어진 것)
- 개발자가 정의된 frame의 <u>규칙을 따라 코드를 작성</u>함으로써 개발 시간, 유지보수 등에서 장점을 갖음
- 단점 : 규칙 학습 필요
<details>
<summary>library?</summary>

- 코드의 집합체 (; 개발에 필요한 함수가 미리 작성되어진 것)
- 개발자가 원하는대로 구현된 코드를 이용함으로써 개발 시간 등에서 장점을 갖음
- [framework와 library 차이 (영상)](https://www.youtube.com/watch?v=t9ccIykXTCM)
</details>
<details>
<summary>module?</summary>

- 라이브러리에 포함되는 개념으로, 개발에서는 같은 개념으로 취급하기도 함
- 참고 : https://joie-kim.github.io/Module-Library-Framework/
</details>

## Framework 종류
- Hybrid app framework : 하이브리드 앱 개발을 위한 프로젝트 구조가 정의되어져 있는 것
- Frontend framework : 프론트엔드 프로젝트 구조가 정의되어져 있는 것
- Backend framework : 백엔드 프로젝트 구조가 정의되어져 있는 것
- :star:**Javascript framework** : interactive한 웹 구현을 위한 프로젝트 구조가 정의되어져 있는 것
- Java framework : java app 프로젝트 구조가 정의되어져 있는 것
- ORM framework : DB와 OOP 언어 간의 데이터 mapping에 대한 프로젝트 구조가 정의되어져 있는 것
- CSS framework : 특정 요소(ex. 버튼, 폼, ...)의 스타일이 정의되어져 있는 것

*ORM(Obejct-Relational Mapping)  
*OOP(Object Oriented Programming, 객체 지향 프로그래밍)

<details>
<summary>프레임워크 종류 자세히 보기</summary>

### Hybrid app framework 종류
- React native
- Ionic framework
- Flutter

### Frontend framework 종류
- React
- Angular
- Vue.js
- Foundation
- Flutter

*[Top Most Popular Frontend Frameworks 2022](https://www.sam-solutions.com/blog/best-frontend-framework/)

### Backend framework 종류
- Node.js
- Django
- Spring

### Javascript framework 종류
- React
- Angular
- Vue.js

### Java framework 종류
- Struts
- Spring

### ORM framework 종류
- MyBatis(ibatis)
- JPA
- Hibernate

### CSS framework 종류
- Bootstrap
- UI kit
- Foundation

*[CSS 프레임워크 모음](https://wooncloud.tistory.com/51#header11)
</details>

---
# :star:Vue.js란?
interactive한 web app(ex. SPA)을 위한 Framework(MVVM 패턴)

## Vue.js 특징
-  AngularJS를 사용하여 구글을 위해 작업하던 Evan You에 의해 개발
    - AngularJS의 장점과 추가적인 개념을 동반하여 가볍게 만들었다고 함
- JS 문법을 잘 몰라도 되며 문법이 단순하여 학습하기 쉬움 (cf. React, Angular)
- React, Angular에 비해 시작이 쉬움 (; cdn 추가 -> vue 인스턴스 생성 -> 끝)
- [리액트가 아닌 Vue를 쓰는 이유 (영상)](https://www.youtube.com/watch?v=-tVaahsXpwk)
- [Vue가 아닌 리액트를 쓰는 이유 (블로그)](https://ahnheejong.name/articles/why-i-prefer-react-over-vuejs/)

## MVVM 패턴
![2022-04-05-05-06-57](https://user-images.githubusercontent.com/75118895/161803960-150bbb7c-c472-4abf-b041-c3729405c5ec.png)

*그림출처 : https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/
- 구성 : View, ViewModel, Model
    - View 계층 : html DOM으로 구성
    - Model 계층 : 간단한 JS 객체로 작성한 Business logic, data로 구성
    - ViewModel 계층 : view와 model 계층 사이에서 data를 전달하는 역할
- ViewModel 계층
    - DOM Listener : view에서 이벤트가 발생하면 이를 감지
    - Data Bindings : 서로 다른 언어로 같은 data를 표현할 때 이를 연결(mapping, binding) 

## Data Bindings
![2022-04-05-05-31-27](https://user-images.githubusercontent.com/75118895/161804014-969d5510-4c7b-45e1-908c-fb6048991cd3.png)

*그림출처 : https://blog.daum.net/creazier/15310724
