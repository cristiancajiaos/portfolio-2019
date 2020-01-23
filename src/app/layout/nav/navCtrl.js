(function(){
    angular
        .module('app')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = [
        '$scope',
        'basicData',
        'navOptionsService',
        'socialService',
        'dateService'
    ];

    function navCtrl($scope, basicData, navOptionsService, socialService, dateService) {
        var vm = this;
        vm.uiSrefActive = 'active';

        vm.navOptions = [];
        vm.socialNetworks = [];

        vm.name = '';
        vm.title = '';
        vm.email = '';
        vm.year = '';

        vm.getData = function(){
            navOptionsService.getOptions().then(function(response){
                vm.navOptions = response.data;
            }, function(error){
                console.log(error);
            });

            socialService.getSocial().then(function(response){
                vm.socialNetworks = response.data;
            }, function(error){
                console.log(error);
            });
        };

        vm.toggleCollapse = function(){
            $('#collapseNav').collapse('toggle');
        };

        vm.name = basicData.name;
        vm.title = basicData.title;
        vm.email = basicData.email;
        vm.year = dateService.getYear();
        vm.getData();
    }
})();