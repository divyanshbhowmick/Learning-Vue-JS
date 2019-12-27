//Local component
let planComponent = {
  template: "#plan-template",
  // props: ["name"]
  props: {
    name: {
      type: String,
      default: "Basic",
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  methods: {
    changeState(plan) {
      this.$emit("select", this.name);
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
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
      ],
      selectedPlan: null
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    }
  }
});

new Vue({
  el: "#app"
});
