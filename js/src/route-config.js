Router
.add({
  home: {
    url: '',
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  },
  about: {
    url: 'about',
    templateUrl: 'templates/about.html',
    controller: 'AboutController'
  },
  documentation: {
    url: 'documentation',
    templateUrl: 'templates/documentation.html',
    controller: 'DocumentationController'
  }
});
