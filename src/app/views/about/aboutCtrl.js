(function(){
    angular
        .module('app')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$scope', 'basicData'];

    function aboutCtrl($scope, basicData){
        var vm = this;
        vm.title = 'Acerca de';
    }
})();