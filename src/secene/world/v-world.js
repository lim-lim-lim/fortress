'use strict';

define( ['backbone', 'handlebars', 'jquery', 'world/c-world', 'text!world/t-world.html' ], function( B, H, $, C, T ){

    var _tmpl = H.compile( T );

    return B.View.extend({
        el:'#game',
        initialize:function(){
        },
        render:function(){
        }
    });
});