var app = angular.module('app', []);
app.directive('adjustableColumn', function($window, $compile, $document) {
  return {
    restrict: 'EA',
    link: function(scope, element) {
      var table = element[0];
      var columns = element.find('th');
      var tableWidth = table.clientWidth;
      var handle;
      var handleHTML;
      var startX;
      var colsWidthPercents = [];

      for (var i = 0; i < columns.length; i++) {
        //Explicility declare percentage widths on columns for manipulation later;
        columns[i].style.width = (columns[i].clientWidth / tableWidth * 100) + '%';
        
        //Add handles to column headers (all except the last)
        if (columns.length - 1 > i) {  
          handle = '<div class="handle" ng-mousedown="resizeCol($event, '+ i +')"></div>';
          handleHTML = $compile(handle)(scope);
          angular.element(columns[i]).append(handleHTML);
        }
      }

      scope.resizeCol = function(event, _colIndex){
        startX = event.pageX;
        colIndex = _colIndex;
        for(var i = 0; i < columns.length; i++){
          colsWidthPercents.push(parseFloat(columns[i].style.width))
        }
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      }
      function mousemove(event){
        deltaPercent = (event.pageX - startX)/tableWidth*100;
        columns[colIndex].style.width = colsWidthPercents[colIndex] + deltaPercent + '%';
        var colsRight = columns.length - (colIndex + 1);
        var colsRightDeltaPercent = -1 * (deltaPercent / colsRight);
        for (var i = colIndex + 1; i < columns.length; i++){
          columns[i].style.width = colsWidthPercents[i] + colsRightDeltaPercent + '%';
        }
      }
      function mouseup(event){
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
        colsWidthPercents = [];
        for(var i = 0; i < columns.length; i++){
          colsWidthPercents.push(parseFloat(columns[i].style.width));
        }
      }
    }
  }
});