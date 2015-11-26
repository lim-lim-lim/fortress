
'use strict';

define( function(){

    return {
        random:function( min, max ){
            return Math.floor( Math.random() * ( max-min-0.00001) ) + min + 1;
        }
    }
});