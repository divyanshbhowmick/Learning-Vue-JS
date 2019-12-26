//Local component
let planComponent = {
  template: "#plan-template",
  // props: ["name"]
  props: {
    name: {
      type: String,
      default: "Basic",
      required: true
    }
  }
};

//Global Component //If the root component doesnt have the parent to be registered as global component then define it in root instance
Vue.component("plan-picker", {
  template: "#plan-picker-template",
  components: {
    plan: planComponent
  },
  data() {
    return {
      plans: [
        {
          key: 1,
          title: "The Rock"
        },
        {
          key: 2,
          title: "The Single"
        },
        {
          key: 3,
          title: "The Couple"
        }
      ]
    };
  }
});

new Vue({
  el: "#app"
});
