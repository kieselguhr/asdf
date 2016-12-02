/**
 * Created by Aldi on 11/16/2016.
 */
$(document).ready(function(){
    $.get('/api/v1/listbeacon', function(data){
        console.log(data);
    });
});