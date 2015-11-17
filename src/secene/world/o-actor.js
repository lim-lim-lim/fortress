
'use strict';

define( function(){

    function Actor(){}

    Actor.prototype = {

        x:function( value ){
            if( value === undefined ){
                return this._x;
            }else{
                this._x = arguments[ 0 ];
            }
        },

        render:function(){

        }
    }

    return Actor;
});