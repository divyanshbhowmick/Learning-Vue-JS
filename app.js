Vue.component("click-counter", {
  template: '#click-counter-template',
  data() { // Data must be an function so that each instance can maintain an seperate copy of it!
    return {
      count: 0
    };
  }
});

new Vue({
  el: "#app"
});
