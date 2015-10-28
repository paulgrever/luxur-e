Router.configure({
  layoutTemplate: 'layout'
});
Router.route("/", {
  path: '/',
  name: 'main',
  template: 'main'
});

Router.route("/schedule", {
  name: "schedule", 
  template: "schedule"
});

Router.route("/services", {
  name: "services",
  template: "services"
});

Router.route("/about", {
  name: "about",
  template: "about"
});