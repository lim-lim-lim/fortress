
'use strict';

define( [ 'createjs' ],function(){

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

    createjs.extend( Actor.prototype, createjs.DisplayObject );
    console.dir( Actor );
    return Actor;
});