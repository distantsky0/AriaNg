(function () {
    'use strict';

    angular.module('ariaNg').directive('ngPieceMap', ['aria2TaskService', function (aria2TaskService) {
        return {
            restrict: 'E',
            template: '<div class="piece-map"></div>',
            replace: true,
            scope: {
                bitField: '=',
                pieceCount: '='
            },
            link: function (scope, element) {
                var redraw = function () {
                    var pieces = aria2TaskService.getPieceStatus(scope.bitField, scope.pieceCount);
                    element.empty();

                    for (var i = 0; i < pieces.length; i++) {
                        element.append('<div class="piece' + (pieces[i] ? ' piece-completed' : '') + '"></div>');
                    }
                };

                scope.$watch('bitField', function () {
                    redraw();
                });

                scope.$watch('pieceNumber', function () {
                    redraw();
                });
            }
        };
    }]);
})();
