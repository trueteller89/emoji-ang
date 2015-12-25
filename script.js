var app = angular.module("app", ['ngSanitize', 'emojiApp']);
emojiApp.controller('emojiController', ['$scope', function($scope) {
$scope.txt="👍😉✌";
console.log($scope.txt);
    $scope.emojiMessage={};
	$scope.trace=function(){console.log($scope.emojiMessage);
	$scope.emojiMessage.encodedtext=$scope.emojiMessage.messagetext;
	}
}
]);