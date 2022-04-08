# Vue.js 시작하기

## cdn으로 시작
#### :question: 왜 cnd를 사용하는지?
- Vue 프로젝트를 생성하지 않고, 현재 개발 환경의 일부에 Vue.js를 이용하기 위해
- Vue 프로젝트를 생성하는 것이 이득이라면 node.js를 이용하자

<br>

```HTML
<!-- 개발버전, 도움되는 콘솔 경고를 포함. -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
또는
```HTML
<!-- 상용버전, 속도와 용량이 최적화됨. -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
또는
```HTML
<script src="https://unpkg.com/vue"></script>
```

<details>
<summary>자세히보기 (사진)</summary>

1) html 아래 vue를 위한 cdn을 script에 삽입  
    <img src="https://user-images.githubusercontent.com/75118895/161807688-463c7234-27da-46bc-ab29-cec40a76378d.png" style="width: 500px">

1) Vue 인스턴스 생성  
    <img src="https://user-images.githubusercontent.com/75118895/161807848-518e9ec5-989c-455d-b0d6-48c8c9909e10.png" style="width: 500px">

1) Vue 인스턴스의 el 프로퍼티(property)에 상호작용할 요소의 id를 넣어 해당 요소와 vue 객체 연결  
    <img src="https://user-images.githubusercontent.com/75118895/161808191-3d0dce32-c66f-434c-8b8e-5fa80e002c0f.png" style="width: 500px">

1) Vue 인스턴스의 data 프로퍼티에 html 요소에 들어갈 data를 object 형으로 선언  
    <img src="https://user-images.githubusercontent.com/75118895/161808248-8aeaa1c9-380a-49a7-a3da-926b8e45b95d.png" style="width: 500px">

1) html에 Vue 인스턴스의 data 프로퍼티 출력

    1) html에서 {{}}에 obejct의 key로 data에 접근  
        <img src="https://user-images.githubusercontent.com/75118895/161808491-f634ca20-4888-4ed7-be1a-9d4c93d2b692.png" style="width: 500px">

    1) html에서 v-for 속성을 이용해 data에 접근 가능  
        <img src="https://user-images.githubusercontent.com/75118895/161808540-444a9d74-f6b3-48cd-9653-1d8e49b0b914.png" style="width: 500px">

*영상출처 : https://vimeo.com/247494684
</details>
<br>

## node.js로 시작
맨 아래의 '용어 설명' 먼저 읽고 아래 과정 따르기 추천

#### :question: 왜 node.js를 사용하는지?
- Vue 프로젝트 초기 환경 세팅이 매우 간단함
    - vue create 명령어만 입력하면 Vue 프로젝트 뚝딱 생성
    - vue create 명령어는 @vue/cli라는 패키지 안에 있기 때문에 이를 먼저 설치해야 됨
    - @vue/cli 패키지는 npm 안에 있어서 npm을 먼저 설치해야 됨
    - npm는 웹개발 라이브러리(모듈)이 패키지화 되있는 것으로, node.js 안에 있기 때문에 이를 먼저 설치해야 됨
- 따라서, node.js는 Vue 프로젝트를 만들기 위해 설치한다고 정리 가능 
<br>

### 1. https://nodejs.org/ko/ 에서 node.js 설치 후 터미널에서 vue-cli 설치
<details>
<summary>1-1. node.js 설치 (자세히 보기)</summary>

#### 1-1-1. https://nodejs.org/ko/ 에서 node.js 설치
- 짝수 : LTS 버전
- 홀수 : Stable 버전

![image](https://user-images.githubusercontent.com/75118895/161749443-55acd30c-989e-476a-a15a-792e0be0ebde.png)  


#### 1-1-2. 설치 확인 : cmd에서 node와 npm 버전 확인  
명령어가 정상적으로 실행되면, 설치가 정상적으로 완료된 상태

![image](https://user-images.githubusercontent.com/75118895/161749692-d35f0064-8296-4db2-91f2-1cf74b8c03c0.png)  
(2022-03에 node.js를 설치해서 약간의 버전 차이 있는 상태)  
</details>

<details>
<summary>1-2. @vue/cli 설치 (자세히 보기)</summary>

#### 1-2-1. cmd 또는 VScode의 터미널에서 아래의 명령어로 진행 가능
```
npm install -g @vue/cli
```
또는
```
npm i -g @vue/cli
```
#### :question: npm install [패키지명]
- `./node_modules`폴더에 패키지를 다운받아 설치하기 위한 명령어
- package.json의 dependencies에 있는 모든 패키지를 설치
- 축약형 : `npm i`
- `-g 옵션`
    - global (;로컬 어디에서든 설치하려는 패키지를 요청할 수 있게 만드는 명령어)
    - 설치 시간이 약간 필요

#### :question: @vue/cli
- Vue CLI 패키지 이름
    |버전|vue cli 패키지명|
    |:--:|:--------------:|
    |Vue CLI 2|vue-cli|
    |Vue CLI 3|@vue/cli|

    *참고 : @ 마크는 npm의 Scoped package를 의미
- 기본 vue 개발 환경을 설정해주는 도구 (;기본적인 프로젝트 세팅 ;vue 명령어를 통해 vue.js 응용 프로그램을 만들 수 있음)
- 폴더 구조, lint, build, 어떤 라이브러리로 구성을 해야되는지 webpack 설정은 어떻게 해야되는지에 대한 고민을 덜을 수 있음

*출처 : https://simplevue.gitbook.io/intro/01.-vue-cli  
*참고 : https://cli.vuejs.org/guide

#### :question: vue cli 2를 사용하고 있을 경우
기존에 Vue CLI 2를 사용하고 있었다면, vue라는 커맨드의 네임스페이스가 꼬일 수 있기 때문에 Vue CLI 2를 제거 후 `npm i -g @vue/cli` 진행
```
npm r -g vue-cli
npm i -g @vue/cli
```

#### 1-2-2. 설치 확인 : vue 버전 확인
```
vue --version
```
![image](https://user-images.githubusercontent.com/75118895/161753996-c29d06aa-0c6e-4f3d-933b-a8276ebd15f3.png)

3.x 이상의 버전이 정상적으로 나오면 @vue/cli 설치가 정상적으로 끝난 것

#### :question: VSCode에서의 vue --version 에러
cmd에서는 정상적으로 실행이 되는데, VSCode에서는 에러 발생  

![image](https://user-images.githubusercontent.com/75118895/161748011-cf974990-7b99-430d-82d2-15d6684ea2d2.png)  

VSCode의 터미널은 기본적으로 PowerShell로 설정되어져 있음  
vue cli 4.x 버전부터는 cmd 외의 cli 프로그램에서 vue 명령어를 사용하기 위해선 vue.cmd 명령어를 이용해야 됨  

```
vue.cmd --version
```

![image](https://user-images.githubusercontent.com/75118895/161748745-469a6678-bab8-4554-87ed-b017e72d4d06.png)  

*참고 : 프롬프트(입력칸) 앞에 PS는 PowerShell을 뜻함
</details>
<br>

### 2. 개발환경 세팅 : Vue CLI로 Vue 프로젝트 생성
<details>
<summary>2-1. VSCode 설치 (자세히 보기)</summary>

#### https://code.visualstudio.com/ 에서 자신의 운영 체제에 맞는 stable 버전으로 설치
- Stable 버전 : 안정화된 버전 (;버그가 최소화된 버전)
- Insiders 버전 : 최신 버전의 기능을 먼저 사용할 수 있는 버전 (;불안정한 기능, 버그 존재)

![image](https://user-images.githubusercontent.com/75118895/161750156-4f73f82b-d1b9-45ee-bbe9-71d13837be19.png)  
</details>

<details>
<summary>2-2. VSCode 확장 프로그램 설치 (자세히 보기)</summary>

#### Ctrl + Shift + X (Extensions 메뉴)에서 아래의 프로그램 설치  
- 2, 3번은 반복 코드 입력 시간을 줄이기 위한 프로그램으로, 설치하지 않아도 무관

#### 2-2-1. Vetur : .vue 파일의 코드 하이라이팅을 위한 확장 프로그램
<img src="https://user-images.githubusercontent.com/75118895/161750272-a8741eeb-90bd-4607-a21b-99117990e302.png" style="width: 500px">

|설치전|설치후|
|---|---|
|![2022-04-05-19-54-04](https://user-images.githubusercontent.com/75118895/161750417-37b20f74-927f-4fe8-9bee-b42030e594e1.png)|![2022-04-05-19-53-18](https://user-images.githubusercontent.com/75118895/161750328-5a5d25d1-929d-44c8-9a15-605fd7f3a454.png)|

#### 2-2-2. Vue 3 Snippets : vue에 대한 스니펫이 정의되어져 있는 확장 프로그램
<img src="https://user-images.githubusercontent.com/75118895/161750504-8b208294-cdab-45db-90e0-d5b26cf5714d.png" style="width: 500px">

#### 2-2-3. HTML CSS Support : 해당 html 문서의 id, class 명을 추천해주는 확장 프로그램
<img src="https://user-images.githubusercontent.com/75118895/161750547-83797781-3f1e-4490-b9cf-4db39fb41775.png" style="width: 500px">
    
- 사용예시  
![2022-04-05-20-03-50](https://user-images.githubusercontent.com/75118895/161750578-650b5e4d-7b1e-4a51-914d-4c7c2f412ef3.png)
</details>

<details>
<summary>2-3. git과 VSCode 연동 (자세히 보기)</summary>

*단순히 github에 작성 코드를 올리기 위한 과정으로, 생략해도 상관없음

#### 2-3-1. github에서 repository 생성 후 로컬에서의 원하는 경로에 clone  
- [Github의 git repository과 로컬 연결하기](https://github.com/binigy97/How2uz-GitHub/blob/main/2_cmd_gitRepository/2_git_repository.md)

#### 2-3-2. 로컬에 git repository를 clone한 모습  
![2022-04-05-20-13-33](https://user-images.githubusercontent.com/75118895/161750637-864d78dd-57d8-40ab-9068-e617fc1e37d1.png)
</details>

<details>
<summary>2-4. Vue CLI로 Vue 프로젝트 생성 (자세히 보기)</summary>

#### 2-4-1. 생성하려는 vue 프로젝트는 원하는 경로로 이동한 다음, 프로젝트를 생성해야 됨
- cmd에서 진행할 경우
    ```
    D:
    cd D:\DevRoot\How2uz-vuejs
    ```
    *참고 : [cmd 명령어](https://github.com/binigy97/How2uz-GitHub/blob/main/2_cmd_gitRepository/cmdCommand.md)

- VScode에서 진행할 경우  

    ![2022-04-05-20-29-21](https://user-images.githubusercontent.com/75118895/161750687-7de1aba4-3a37-4cf6-933b-2f10b10389da.png)
    ![2022-04-05-20-31-06](https://user-images.githubusercontent.com/75118895/161750743-dedf9522-a839-4a75-88ac-0c5b9a133d99.png)

#### 2-4-2. vue 프로젝트 생성
vue 프로젝트는 vue cli의 create 명령어를 이용하여 생성할 수 있음
```
vue create [프로젝트 명]
```
여기선, 유튜브의 강의([코딩애플, Vue 1강 : Vue 3버전 설치랑 셋팅](https://www.youtube.com/watch?v=NONWar0jGLM))를 따라 vuedongsan이라는 이름으로 프로젝트 생성

- cmd에서 진행할 경우
    ```
    vue create vuedongsan
    ```
    아래와 같이 Vue CLI의 버전과 함께 preset 설정 선택지가 나오면 정상  

    ![2022-04-05-20-43-04](https://user-images.githubusercontent.com/75118895/161750903-6af735c8-42e9-4e79-a068-7dff82d98981.png)

    preset을 선택해주면 됨 (아래의 'VSCode 터미널에서 진행할 경우' '3)' 참고)

- VSCode 터미널에서 진행할 경우
    1) Ctrl + ` 또는 Terminal - New Terminal으로 터미널 열기  
    ![image](https://user-images.githubusercontent.com/75118895/161747075-0a8c5036-3379-4b0c-a600-625b76239eae.png)

    2) vue create
        ```
        vue.cmd create vuedongsan
        ```
        #### :question: vue 스크립트 실행 오류
        @vue/cli 설치에서 설명한 것과 같이, vue cli 4.x 이상 버전에서 cmd가 아닌 다른 cli 프로그램을 사용할 경우 vue.cmd 명령어 사용!

        <img src="https://user-images.githubusercontent.com/75118895/161754557-9a5ce6e2-50cb-48d3-bb78-bef68f516023.png" style="width: 600px">

    3) preset 선택
        #### :question: preset(사전 설정)이란?
        - Vue CLI 3.x 버전 이후부터 제공
        - 프로젝트의 기본적인 플러그인들의 구성을 프로젝트 생성 단계에서 선택 (;`vue create`를 사용해서 프로젝트를 생성할 때 어떤 플러그인을 추가할지 선택하면 그 플러그인들은 미리 설치됨)
        - `vue add`를 통해 프로젝트 생성 후에도 플러그인 추가 가능
        
        <img src="https://user-images.githubusercontent.com/75118895/161755129-226da2ff-9564-47bb-9974-1680f1234be1.png" style="width: 300px">

        위와 같이 디폴트(Vue 2 또는 Vue 3 버전의 기본 구성의 vue 프로젝트)로 설정할지 사용자가 수동으로 플러그인 구성을 선택할지 선택할 수 있음  
        이번 프로젝트는 vue 2버전의 기본 구성으로 진행

        <img src="https://user-images.githubusercontent.com/75118895/161755140-0ddfaaf2-e430-4dcd-8a7d-7cc1d6c715fa.png" style="width: 500px">

        프리셋 세팅 후, 성공적으로 프로젝트를 생성했다는 문구가 나오면 정상

        *참고 : 해당 문구 아래, 두 줄은 서버 실행 방법에 대해 나와있으니 잘 참고하기
</details>

<details>
<summary>2-5. Vue 프로젝트 실행 (자세히 보기)</summary>

#### 2-5-1. Vue 프로젝트로 이동
작업폴더의 하위 폴더로 다음과 같이 이동 (;File - Open Folder - 폴더 선택)

<img src="https://user-images.githubusercontent.com/75118895/161803074-42753643-e413-4f46-8ad5-1349ba95c2a3.png" style="width: 600px">

#### 2-5-2. 메인 페이지(App.vue) 작성
|이미지|설명|
|-----|----|
|<img src="https://user-images.githubusercontent.com/75118895/161815557-9334089d-7a7a-49d8-8695-d4c7962bf33f.png" style="width: 700px">|- template 태그 안에 HTML 코드 작성 <br> - script 태그 안에 JS 코드 작성 <br> - style 태그 안에 CSS 코드 작성|

*간단한 실습을 진행하고 싶다면, 'cdn으로 시작'의 맨 아래에 위치한 '자세히보기 (사진)'을 따라하면 됨

#### 2-5-3. 서버 실행
- 터미널에서 실행하려는 vue 프로젝트의 루트로 이동한 다음, `npm run serve` 입력
    
- 터미널에 뜬 localhost:8080을 클릭하거나 브라우저 주소창에 해당 주소 입력
    
    <img src="https://user-images.githubusercontent.com/75118895/161829737-7f760594-52ab-47b6-a783-638b32f5fe79.png" style="width: 500px">
    
- App.vue(메인 페이지)의 내용이 브라우저에 뜸
    |수정된 App.vue template 코드|브라우저|
    |---------------------------|-------|
    |![image](https://user-images.githubusercontent.com/75118895/161830635-7e197560-b3d8-47e4-a9a5-4ff8399489a6.png)|<img src="https://user-images.githubusercontent.com/75118895/161830401-98197062-d015-419a-b440-1c3eeec4573c.png" style="width: 600px">|
</details>

<br>
<details>
<summary>용어 설명 (펼치기)</summary>

|용어|설명|
|---|---|
|JavaScript| - 프로그래밍 언어의 일종 (이름에서 알 수 있듯 독립적인 언어가 아닌 스크립트 언어)<br> - 스크립트 언어는 특정한 프로그램 안에서 동작 (;JS는 **웹 브라우저 프로그램 안에서만** 동작)|
|Node.js| - JavaScript를 **서버에서도** 사용할 수 있도록 만든 프로그램(백엔드 프레임워크) <br> - Chrome V8 JavaScript 엔진으로 빌드 된 JavaScript 런타임 (;V8이라는 JavaScript 엔진 위에서 동작하는 자바스크립트 런타임(환경))<br> - 웹서버와 같이 확장성 있는 네트워크 어플리케이션 개발에 사용되는 소프트웨어 플랫폼<br> - 내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도 소프트웨어 없이 동작하는 것이 가능<br> *출처 : https://hanamon.kr/nodejs-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/<br> *참고 : [프론트엔드 개발에 Node.js가 필요한 이유](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)|
|LTS 버전| - Long Term Supported<br> - 서버환경에서 장기적으로 **안정적인 지원을 제공하는 버전** (;**서버운영에 적합**)|
|Stable 버전| - 추가적인 기능개발과 기존 API기능 개선을 위한 잦은 업데이트 진행 **(;개인 개발 및 테스트에 적합)**|
|npm| - Node Package Modules<br> - **Node.js에서 사용 가능한 모듈(;웹개발 라이브러리)들을 패키지화** 시켜 모아놓은 것<br> - JS 기반 프로젝트의 빌드 도구|
|CLI| - Command-line interface<br> - CLI는 넓은 의미로 CUI로 불림 (CUI 발전 -> GUI) |
|cmd| - (윈도우 계열의) cli 실행 프로그램 이름 |
|PowerShell| - (윈도우 계열의) cli 실행 프로그램 이름 (CMD의 고급 버전) <br>- CMD에서 액세스 할 수 없는 시스템 관리 작업의 자동화에 사용|
|터미널| - (리눅스 계열의) cli 실행 프로그램 이름<br> - 물리 하드웨어를 소프트웨어로 구현한 애플리케이션으로, 가상 터미널 혹은 터미널 에뮬레이터가 더 정확한 표현 |
</details>
