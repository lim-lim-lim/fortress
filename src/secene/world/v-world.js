'use strict';

define( ['backbone', 'handlebars', 'jquery', 'world/c-world', 'text!world/t-world.html', 'world/o-actor' ], function( B, H, $, C, T, A ){

    var _tmpl = H.compile( T );
    console.log( A );
    return B.View.extend({
        el:'#game',
        initialize:function(){
        },
        render:function(){
        }
    });
});