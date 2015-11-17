'use strict';

define( ['backbone', 'world/v-world'], function( B, V_W ){
    return B.Router.extend( {
        routes:{
            ''      : 'goWorld',
            'intro' : 'goIntro',
            'lobby' : 'goLobby',
            'room'  : 'goRoom',
            'world' : 'goWorld'
        },

        initialize:function(){
            this.navigate( 'intro', { trigger:true } );
        },

        goIntro:function(){
            console.log( 'goIntro' );
        },

        goLobby:function(){
            console.log( 'goLobby' );
        },

        goRoom:function(){
            console.log( 'goRoom' );
        },

        goWorld:function(){
            new V_W();
        }
    });
});