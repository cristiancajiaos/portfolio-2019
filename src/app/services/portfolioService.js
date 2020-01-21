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

        portfolioObj.getRandomPortfolioItem = function(){
            var foo;

            $http.get('/data/portfolioData.json').then(function(response){
                console.log('response');
                foo = response;
                console.log(foo);
            }, function(error){
                console.log('error');
            }).finally(function(){
                console.log('finally');
                return foo;
            });
        };
        
        return portfolioObj;
    }

})();