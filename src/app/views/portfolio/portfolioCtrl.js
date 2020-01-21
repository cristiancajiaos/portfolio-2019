(function(){
    angular
        .module('app')
        .controller('portfolioCtrl', portfolioCtrl);

    portfolioCtrl.$inject = ['$scope', 'portfolioService'];

    function portfolioCtrl($scope, portfolioService){
        var vm = this;
        vm.title = 'Portafolio';

        vm.loadingPortfolio = false;
        vm.portfolio = [];

        vm.nameSearch = '';
        vm.order = 'title';

        vm.orderOptions = [
            {
                value:'title',
                name:"Título (ascendiente)"
            }, {
                value:"-title",
                name:"Título (descendiente)"
            }, {
                value:"dateYear",
                name:"Año (menos actual a menos actual)"
            }, {
                value: '-dateYear',
                name:'Año (más actual a menos actual)'
            }
        ];

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