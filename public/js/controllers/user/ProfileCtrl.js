'use strict';

myApp.controller('ProfileCtrl', function($rootScope, $scope, $window, profileService, $location, toaster) {

	var Id=$rootScope.AuthenticatedUser.id;
	var b=profileService.showInfo().get({
    	id:Id
    }, function(){
    	console.log(b);
        $scope.data = b;
    });
        
        $scope.editProfile = function(){
        
        profileService.editInfo().save({
                "id":Id,
                "firstName":$scope.data.firstName,
                "lastName":$scope.data.lastName,
                "age":$scope.data.age,
                "tel":$scope.data.tel
            }, function(){
                toaster.success("success", "Information edited");
            }, function(e){
                toaster.error("error", e);
            });
    }; 
    
     
    
    $scope.editProfile2 = function(){
        
        profileService.editInfo2().save({
                "id":Id,
                "facebook":$scope.data.facebook,
                "google":$scope.data.google
            }, function(){
                toaster.success("success", "Information edited");
            }, function(e){
                toaster.error("error", e);
            });
    }; 
    
    $scope.editProfile3 = function(){
        
        profileService.editInfoAdresse().save({
                "id":Id,
                "gouvernera":$scope.data.gouvernera,
                "delegation":$scope.data.delegation,
                "adresse":$scope.data.adresse,
                "codePostale":$scope.data.codePostale
            }, function(){
                toaster.success("success", "Information edited");
            }, function(e){
                toaster.error("error", e);
            });
    }; 
        
});	