angular.module("directives",[])
.directive("menu",function(){
    return {
        restrict:"A",
        templateUrl:"demo.html",
        transclude:true,
        link:function($scope,b,c){
            $scope.data = [
                {
                    name:"111",
                    son:[
                        {name:"1-1"},
                        {name:"1-1"},
                        {name:"1-1"},
                        {name:"1-1"},
                    ]
                },
                {
                    name:"222",
                    son:[
                        {name:"2-1"},
                        {name:"2-1"},
                        {name:"2-1"},
                        {name:"2-1"},
                    ]
                },
                {
                    name:"333",
                    son:[
                        {name:"3-1"},
                        {name:"3-1"},
                        {name:"3-1"},
                        {name:"3-1"},
                    ]
                },
            ];
            $scope.a=0;
            $scope.change = function(id){
                $scope.a = id;
            }
        }
    }
}).directive("abc",function(){
    return {
        restrict:"A",
        template:"<div>dkjfodf</div>"
    }
})