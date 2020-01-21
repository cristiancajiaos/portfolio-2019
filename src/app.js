(function(){
    var app = angular.module('app', [
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ui.router'
    ]);

    app.config(function($stateProvider, $urlRouterProvider){
        var states = [
            {
                name: 'home',
                url: '/home',
                templateUrl: 'views/home/home.html',
                controller: 'homeCtrl as vm',
            },
            {
                name: 'about',
                url: '/about',
                templateUrl: 'views/about/about.html',
                controller: 'aboutCtrl as vm',
            },
            {
                name: 'portfolio',
                url: '/portfolio',
                templateUrl: 'views/portfolio/portfolio.html',
                controller: 'portfolioCtrl as vm',
            },
        ];

        states.forEach(function(state){
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/home');
    });
})();