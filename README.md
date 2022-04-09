# How2uz-vuejs
vue.js 사용법 익히기

## [0. vue.js란?](https://github.com/binigy97/How2uz-vuejs/blob/main/vuedongsan/doc/0_define_vuejs.md)
interactive한 web app(ex. SPA)을 위한 Framework(MVVM 패턴) 

## [1. vue.js 시작하기](https://github.com/binigy97/How2uz-vuejs/blob/main/vuedongsan/doc/1_create_vueProject.md)
- cdn으로 vue.js 시작하기
  ```html
  <!-- 개발버전, 도움되는 콘솔 경고를 포함. -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```
- node.js로 vue 프로젝트 만들기
  |No.|제목|내용|
  |:-:|----|---|
  |1-1|node.js 설치|https://nodejs.org/ko/ 에서 LTS 버전 설치|
  |1-2|@vue/cli 설치|cdn에서 `npm i -g @vue/cli` 입력|
  |2-4|Vue CLI로 Vue 프로젝트 생성|작업폴더 생성 후 해당 디렉토리로 이동<br>:point_right: `vue create [프로젝트명]`|
  |2-5|Vue 프로젝트 실행|`cd [프로젝트명]`<br>`npm run serve`|

## [2. Vue 앱 동작원리](https://github.com/binigy97/How2uz-vuejs/blob/main/vuedongsan/doc/2_how-it-works.md)
- Vue 프로젝트의 디렉토리 구조  
  |폴더/파일|설명|
  |---------|----|
  |./node_modules|- `npm install [패키지명]` 수행 시 생성되는 폴더<br>- package.json 또는 package-lock.json 기반 node_modules 트리 구성|
  |./public|- Webpack의 처리를 받지 않는 static assets(css, img, 등)을 모아둔 파일|
  |**./public/index.html**|- Webpack의 처리를 일부 받음<br>- **Vue 앱은 index.html로부터 실행**|
  |./scr|- Vue 애플리케이션의 핵심 내용을 모아두는 디렉토리|
  |**./src/assets**|- static assets(css, img, 등)을 모아두는 디렉토리|
  |**./src/components**|- Vue 애플리케이션의 **Vue 컴포넌트**를 모아두는 디렉토리|
  |**./src/main.js**|- Vue 앱 초기화 (;Vue 인스턴스 생성 및 마운팅)|
  |**./src/App.vue**|- Vue 애플리케이션의 **최상위 컴포넌트**|
  |./babel.config.js|- Babel의 config 파일|
  |./jsconfig.json|- JavaScript 컴파일에 대한 config 파일||
  |./package.json|- 프로젝트의 정보, 의존하는 패키지 정보 및 빌드방식 등이 담긴 파일|
  |./package-lock.json|- 개발자들이 동일한 node_modules 트리를 생성해서 같은 의존성을 설치하도록 보장해주는 파일|
  |./vue.config.json|- Vue의 config 파일|
