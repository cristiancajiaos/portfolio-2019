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
                component: 'homeComponent'
            },
            {
                name: 'about',
                url: '/about',
                component: 'aboutComponent'
            },
            {
                name: 'portfolio',
                url: '/portfolio',
                component: 'portfolioComponent'
            },
        ];

        states.forEach(function(state){
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/home');
    });
})();