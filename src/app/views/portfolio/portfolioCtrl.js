(function(){
    angular
        .module('app')
        .controller('portfolioCtrl', portfolioCtrl);

    portfolioCtrl.$inject = [
        '$scope',
        'basicData',
        'portfolioService'
    ];

    function portfolioCtrl($scope, basicData, portfolioService){
        var vm = this;
        vm.title = 'Portafolio';

        vm.active = 0;
        vm.noWrapSlides = false;

        vm.loadingPortfolio = false;
        vm.portfolio = [];

        vm.tooltipPlacement = 'bottom';

        vm.getData = function(){
            vm.loadingPortfolio = true;

            portfolioService.getPortfolio().then(function(response){
                vm.portfolio = response.data;
            }, function(error){
                console.log(error);
            }).finally(function(){
                vm.loadingPortfolio = false;
            });
        };

        vm.getData();
    }
})();