(function(){
    angular
        .module('app')
        .service('dateService', dateService);

    dateService.$inject = ['$http'];

    function dateService($http){
        var dateObj = {};

        dateObj.getYear = function(){
            var date = new Date();
            return (date.getFullYear());
        };

        return dateObj;
    }
})();