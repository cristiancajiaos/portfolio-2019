(function () {
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'portfolioService'];

    function homeCtrl($scope, portfolioService) {
        var vm = this;
        vm.title = 'Home';

        vm.active = 0;
        vm.myInterval = 5000;
        vm.noWrapSlides = false;

        vm.slides = [];

        vm.loadingSlides = false;

        vm.getData = function () {
            vm.loadingSlides = true;

            portfolioService.getPortfolio().then(function(response){
                vm.slides = response.data;
            }, function(error){
                console.log(error);
            }).finally(function(){
                vm.loadingSlides = false;
            });
        };

        vm.getData();
    }
})();