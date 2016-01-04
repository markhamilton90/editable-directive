
var app = angular.module('myDirective', []);

app.directive('makeEditable', function() {
	return {
		restrict: 'A',
		templateUrl: 'template.html',
		transclude: true,
		scope: true,
	}
});
