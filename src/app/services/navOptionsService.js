(function(){
    angular
        .module('app')
        .service('navOptionsService', navOptionsService);

    navOptionsService.$inject = ['$http'];

    function navOptionsService($http){
        var navOptionsObj = {};

        navOptionsObj.getOptions = function(){
            return $http.get('data/navOptions.json');
        };

        return navOptionsObj;
    }
})();