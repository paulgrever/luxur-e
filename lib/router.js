Router.configure({
  layoutTemplate: 'layout'
});

Router.route("/", {
  name: "main", 
  template: "main"
});

Router.route("/schedule", {
  name: "schedule", 
  template: "schedule"
});

Router.route("/services", {
  name: "services",
  template: "services"
})