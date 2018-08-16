$(function(){
    $("#slider").slider({
        range: true,
        min:6,
        max:23,
        values:[6,23],
        step:0.5,
        slide: function(event, ui){
            var leftRange = $("#leftRange");
            var rightRange = $("#rightRange"); 
            var leftStr,rightStr; 
            
            var leftNum = ui.values[0];
            var floorLeftNum = Math.floor(leftNum);
            
            var rightNum = ui.values[1];
            var floorRightNum = Math.floor(rightNum); 
            
            leftNum % floorLeftNum == 0.5 ? leftStr = floorLeftNum + ":30" : leftStr = floorLeftNum + ":00";
            rightNum % floorRightNum == 0.5 ? rightStr = floorRightNum + ":30" : rightStr = floorRightNum + ":00"; 
            
            leftRange.html(leftStr); 
            rightRange.html(rightStr); 
        }
    }); 
});