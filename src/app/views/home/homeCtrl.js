(function () {
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'basicData', 'portfolioService', '$interval', '$state'];

    function homeCtrl($scope, basicData, portfolioService, $interval, $state) {
        var vm = this;
        vm.title = 'Home';

        vm.slides = [];
        vm.returnedItem = {};

        vm.loadingSlides = false;

        var promise;

        vm.getData = function () {
            vm.loadingSlides = true;

            portfolioService.getPortfolio().then(function(response){
                vm.slides = response.data;
                vm.returnedItem = vm.slides[Math.floor(Math.random() * vm.slides.length)];
            }, function(error){
                console.log(error);
            }).finally(function(){
                vm.loadingSlides = false;
            });
        };

        vm.getData();
    }
})();