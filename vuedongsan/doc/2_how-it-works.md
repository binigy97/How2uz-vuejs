> ### 목차
> 1. [Vue 프로젝트의 디렉토리 구조](#vue-프로젝트의-디렉토리-구조)
> 1. [DOM](#dom)
> 1. [Vue Components](#vue-components)
> 1. [Vue 실행동작](#vue-실행동작)

# Vue 프로젝트의 디렉토리 구조
npm으로 생성한 vue 프로젝트의 기본 디렉토리 구조이다.  
(vue 프로젝트를 시작하는 방법은 이전 글 참고 : [vue 프로젝트 시작하기](https://github.com/binigy97/How2uz-vuejs/blob/main/vuedongsan/doc/1_create_vueProject.md))

![image](https://user-images.githubusercontent.com/75118895/162256899-24ed6fca-345f-47df-8829-69d96ac08643.png)

*참고 : Vue 프로젝트 = Vue 앱 = Vue 애플리케이션

### 프로젝트의 루트에는 node_modules, public, src, 패키지 파일, 다수의 config 파일이 있다.
#### :question: node_modules
- **`npm install [패키지명]` 수행 시 생성되는 폴더**
- 특정 패키지를 구성하는 모듈들이 모여진 폴더
    <details>
    <summary>vuedongsan의 node_modules (자세히 보기)</summary>

    ![image](https://user-images.githubusercontent.com/75118895/162272492-bb238aa2-a33c-4d97-ab04-d63a36359727.png)

    ![image](https://user-images.githubusercontent.com/75118895/162272333-bb6b5d7a-d9d2-4308-8d5f-a47f573b1dce.png)

    vuedongsan 프로젝트는 @vue/cli를 통해 만든 vue 앱이므로 @vue/cli 패키지의 모듈이 아주 많이 있다.
    </details>
- **특정 패키지를 구성하는 모듈에 대한 정보는 package.json 또는 package-lock.json에 적혀있음**
- ./node_modules/.bin : node에서 사용하는 모듈들의 실행 파일이 모여진 폴더
    <details>
    <summary>/.bin (자세히보기)</summary>

    - binary의 약자
    - 0과 1로 구성된 바이너리 파일이 모아져 있는 폴더
    - 즉, 실행 파일이 모아져 있는 폴더
    </details>

#### :question: public
- Webpack의 처리를 받지 않고 퍼블리싱되는 정적 자산(static assets)을 모아둔 파일 (단, index.html은 Webpack의 처리를 일부 받음)
- :star: **index.html**
    - 앱의 템플릿 파일
        - **Vue 앱은 index.html로부터 실행**
        - 단, lodash 템플릿 구문을 사용해 보간법으로 값을 지정 가능
    - 애플리케이션 레이아웃을 관리하는 템플릿이 아님
        - Vue 앱 외부의 정적 HTML을 제어하는 템플릿
        - 이 파일을 직접 편집할 일은 거의 없음
    - vuedongsan의 ./public/index.html  
        ![image](https://user-images.githubusercontent.com/75118895/162288301-b26854f5-713d-4a43-82a4-0b6e5ef51f37.png)
#### :question: scr
- Vue 애플리케이션의 핵심 내용을 포함하게 될 디렉토리
- :star: **./src/assets**
    - **정적 자산(static assets)**을 저장하는 디렉토리
    - src 디렉토리에 포함되어 있기 때문에 Webpack의 처리를 받음
- :star: **./src/components**
    - Vue 애플리케이션의 **Vue 컴포넌트**를 저장할 디렉토리
    - 지금은 한 개의 예시 컴포넌트만을 포함
- :star: **main.js**
    - 애플리케이션의 진입점
        - **Vue 앱 초기화 (;Vue 인스턴스 생성 및 마운팅)**
        - 마운팅 : DOM 객체에서 어떤 element를 앱에 붙여야 하는지
        - 위 코드에서는 index.html의 #app 엘리멘트를 나타냄
    - 전역 컴포넌트나 부가적인 Vue 라이브러리를 등록하는 경우가 많음
    - vuedongsan의 ./scr/main.js  
        Vue CLI를 통해 생성된 main.js는 아래과 같이 Vue 인스턴스를 선언함

        ![image](https://user-images.githubusercontent.com/75118895/162291746-abad3ab7-2f37-4989-a94c-8f722dd66f40.png)
- :star: **App.vue**
    - Vue 애플리케이션의 **최상위 컴포넌트**
    - 세 파트(template, script, style)로 구성 (각각 HTML, JS, CSS 작성)
    - script : 컴포넌트 화면에 표시되지 않는 모든 로직 포함
        - script에는 export되는 JS object type을 꼭 포함해야 됨 (*참고 : 사진에서 export default로 적힌 부분)
        - export에서 이뤄지는 작업 : 로컬 컴포넌트 등록, 컴포넌트 인풋(props) 정의, 로컬 상태 관리, 메서드 정의 등
        - 빌드 단계에서 export 부분이 처리되고, 템플릿과 함께 render() 함수를 통해 Vue 컴포넌트로 변환
    - vuedongsan의 ./scr/App.vue  
        ![image](https://user-images.githubusercontent.com/75118895/162295800-e832aaab-223c-4590-9077-853dc56cb536.png)
#### :question: babel.config.js
- Babel의 config 파일
    <details>
    <summary>vuedongsan의 babel.config.js (자세히 보기)</summary>

    ![image](https://user-images.githubusercontent.com/75118895/162283531-4b4a232e-6745-4a04-9e00-d222cb0c351f.png)
    </details>
#### :question: jsconfig.jso
- JavaScript 컴파일에 대한 기본 옵션을 정의함
    - 해당 디렉토리가 JavaScript 프로젝트의 루트 디렉토리임을 나타냄
    - `allowJs` 옵션이 true로 설정된 tsconfig.json (*참고 : [jsconfig.json을 상속받는 tsconfig.json](https://basemenks.tistory.com/266))
    <details>
    <summary>vuedongsan의 jsconfig.json (자세히 보기)</summary>
    
    ![image](https://user-images.githubusercontent.com/75118895/162283962-b67e57fc-73ef-419d-bc83-ee48823910d7.png)

    vuedongsan은 ts를 사용하지 않으므로 tsconfig.json은 없다.
    </details>
#### :question: package.json
- 프로젝트의 정보, 의존하는 패키지 정보 및 빌드방식 등이 담긴 파일
    <details>
    <summary>vuedongsan의 package.json (자세히 보기)</summary>

    ![image](https://user-images.githubusercontent.com/75118895/162265380-cd833799-126b-4f24-8fa8-073ff485ad0c.png)

    |프로퍼티|설명|
    |--------|----|
    |name|프로젝트 이름|
    |version|프로젝트 버전
    |private|모듈 배포 옵션|
    |scripts|주로 사용할 명령어 모음<br> - serve 명령을 실행시 vue-cli-service serve 파일 실행<br> - 출처 : https://oops4u.tistory.com/m/2559|
    |dependencies|프로덕션 환경에서 응용 프로그램 개발에 필요한 패키지|
    |devdependencies|로컬 개발 & 테스트에서 필요한 패키지|

    *참고 : [package.json 분석하기](https://blog.martinwork.co.kr/vuejs/2018/04/22/what-is-packagejson.html)
    </details>
#### :question: package-lock.json
- 개발자들이 동일한 node_modules 트리를 생성해서 같은 의존성을 설치하도록 보장해주는 파일
    <details>
    <summary>vuedongsan의 package-lock.json (자세히 보기)</summary>

    ![image](https://user-images.githubusercontent.com/75118895/162275442-5bae9ec9-ce6f-44fe-8bce-2f652825a667.png)

    #### :question: package-lock.json이 필요한 이유
    - 기존의 package.json 만으로는 정보가 부족
        - 위 사진에서 24번줄까진 package.json와 동일한 내용
        - 그 이하는 node_modules 트리에 대한 내용
    - 그로인해 서로 다른 node_modules 트리 생성 가능 (`npm install`에서 node_modules 구조가 다른 경우)
        1. npm의 버전 차이
        1. package.json의 version을 적지 않아 최신 버전의 패키지의 설치를 진행할 경우
        1. package.json에 명시된 의존하는 패키지가 새로운 버전으로 배포됐을 경우

    #### :question: 동일한 node_modules 트리를 보장받는 이유
    - package.json 수정 또는 node_modules의 구조 변경 시, 당시 의존성에 대한 정보를 토대로 자동 생성
    - `npm install`에서 package-lock.json 있다면 이를 사용하여 node-modules 생성
        - package-lock.json 없으면, package.json를 사용하여 node_modules 생성
    
    <br>
    *출처 : https://junwoo45.github.io/2019-10-02-package-lock/
    </details>
#### :question: vue.config.json
- Vue의 config 파일
- 앱 배포 경로, 빌드 파일 생성 경로, Vue 코어 빌드 사용 여부 등 설정 가능 (*참고 : https://cli.vuejs.org/config/#lintonsave)
    <details>
    <summary>vuedongsan의 vue.config.json (자세히 보기)</summary>
    
    ![image](https://user-images.githubusercontent.com/75118895/162286107-0ae78c75-ea8c-43c2-8b5e-13105d908205.png)

    </details>

<details>
<summary>용어 설명 (펼치기)</summary>

|용어|설명|
|----|----|
|static assets|- 정적자산<br> - **CSS나 이미지 등**|
|Webpack|- **자바스크립트 파일 병합/분리 도구**(;JavaScript Module Bundler)<br> - 특정 JS에 의존되는 모듈(.js, .png, .sass, 등)을 병합하여 대표하는 하나 또는 여러개의 파일(;static assets)로 만듦<br> - **웹팩의 처리를 받다 = Sass/SCSS나 Stylus와 같은 전처리 도구 사용 가능**<br> *참고 : [왜 Bundler을 사용해야하는가?](https://velog.io/@eastshine94/Bundler-%EC%99%9C-Bundler%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%ED%95%98%EB%8A%94%EA%B0%80)|
|Babel|- 자바스크립트 변환도구(;Javascript compiler)<br> - 상용 브라우저 호환이 가능하도록 최신 JavaScript를 구버전으로 번역<br> - **ES6(ECMA Script 2015)로 작성된 코드를 ES5로 변환해 IE 등의 브라우저에서 동작하게 만듦**<br>|
</details>

---
# DOM

#### :question: Document Obejct Model (문서 객체 모델)
- Document : HTML 또는 XML과 같은 **문서**를
- Obejct : 스크립트 언어(JavaScript, python, 등)에서 조작할 수 있도록 **객체**화 시킴
- Model : 이를 계층 구조(tree)로 **표현**한 것
- W3C의 표준 객체 모델

#### :question: HTML 문서(document)를 DOM 트리로 표현하기
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>hi</h1>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
</body>
</html>
```
<img src="https://user-images.githubusercontent.com/75118895/162493480-17e74bd3-dfe1-4b5b-8194-1962ad14637e.png" width="500px">

---
# Vue Components

#### :question: HTML Element
- 한 번 생성되면 다시는 변형되지 않음
- DOM의 관점에서 브라우저에 나타낼 객체(plain object)<br>
(아래 사진에서 노랑색 하나하나가 element)  
<img src="https://user-images.githubusercontent.com/75118895/162497326-d407fa54-9e65-44a6-98c2-06a6d6878577.png" width="500px">

#### :question: Component
- HTML Element를 확장하고 재사용 가능한 형태로 구현 (;Vue 인스턴스를 통해 컴포넌트 구현)
- 모든 **Vue 인스턴스**는 하나하나가 Vue 컴포넌트  
<img src="https://user-images.githubusercontent.com/75118895/162496152-42a6b887-be65-42d3-8636-aeffae43485e.png" width="300px">

*참고 : [지역/전역 컴포넌트 등록 방법](https://uxgjs.tistory.com/131)

#### :question: SPA (Single Page Application)
- 정적 파일을 한번에(나눠서도 가능) 다운받고, 사용자의 요청에 따라 필요한 데이터만 서버에서 동적(비동기적)으로 받게 함으로써 트래픽의 총량을 줄이는 어플리케이션 형태
- 즉, 특정 컴포넌트를 제외한 나머지는 불러오지 않음
<img src="https://user-images.githubusercontent.com/75118895/162501076-e9eb78ba-96c9-443a-92d5-236244b6fd90.png" width="600px">
