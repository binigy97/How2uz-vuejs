import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // App.vue 연결 : 내부적으로 createElement(App) 반환
}).$mount('#app') // index.html의 #app과 App 컴포넌트 mounting
