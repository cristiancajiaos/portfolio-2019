(function(){
    angular
        .module('app')
        .service('socialService', socialService);

    socialService.$inject = ['$http'];

    function socialService($http){
        var socialObj = {};

        socialObj.getSocial = function(){
            return $http.get('data/socialNetworks.json');
        };

        return socialObj;
    }
})();