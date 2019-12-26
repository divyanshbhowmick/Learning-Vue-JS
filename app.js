Vue.component("plan", {
  template: "#plan-template",
  // props: ["name"]
  props: {
    name: {
      type: String,
      default: 'Basic',
      required: true
    }
  }
});

new Vue({
  el: "#app",
  data: {
    plans: ["The Single", "The Couple", "The Rock"]
  }
});
