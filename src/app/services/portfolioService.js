(function(){
    angular
        .module('app')
        .service('portfolioService', portfolioService);

    portfolioService.$inject = ['$http'];

    function portfolioService($http){
        var portfolioObj = {};

        portfolioObj.getPortfolio = function(){
            return $http.get('data/portfolioData.json');
        };
        
        return portfolioObj;
    }

})();