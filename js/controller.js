var  myControllerModule=angular.module("myControllerModule",[]);



//定义的 aboutCtrl
myControllerModule.controller("aboutCtrl",["$scope",function($scope){
       $scope.pageClass = 'page-about';
}]);
//定义的 productCtrl
myControllerModule.controller("productCtrl",["$scope",function($scope){
      $scope.pageClass = 'page-product';



}]);

//定义购物车  carCtrl
myControllerModule.controller("carCtrl",["$scope",function($scope){

     $scope.pageClass = 'page-cart';


}]);

