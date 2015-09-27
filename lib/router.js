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
})