let githubUserCardComponent = {
  template: "#github-user-card-template",
  props: {
    username: {
      type: String,
      default: "Sin nombre",
      required: true
    }
  },
  data() {
    return {
      user: {}
    };
  },
  created() {
    let name = this.username;
    /*eslint-disable no-undef */
    axios.get(`https://api.github.com/users/${name}`).then((resp) => {
      this.user = resp.data;
      this.user["created_at"] = new Date(
        this.user["created_at"]
      ).toDateString();
    });
  }
};

Vue.component("github-user-card", githubUserCardComponent);

/*global Vue*/
new Vue({
  el: "#app",
  data() {
    return {
      users: ["rivalcoba", "twpayne"]
    };
  }
});
