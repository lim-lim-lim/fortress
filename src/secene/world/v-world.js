'use strict';

define( ['backbone', 'handlebars', 'createjs', 'jquery', 'world/c-world', 'text!world/t-world.html', 'world/o-actor', 'world/o-map', 'util' ], function( B, H, C, $, Cn, T, A, M, U ){

    var _tmpl = H.compile( T );

    return B.View.extend({
        el:'#game',
        actor:null,
        world:null,
        map:null,
        ticker:null,
        initialize:function(){
            this.$el.append( _tmpl( { width:300, height:100 } ) );
            this.world = new createjs.Stage( 'world-canvas' );
            this.map = new M( 300, 100, 30 );
            this.actor = new A( this.map );
            this.actor.x = U.random( 50, 100 );
            this.world.addChild( this.map );
            this.world.addChild( this.actor );
            var self = this;
            createjs.Ticker.setFPS( 40 );
            //createjs.Ticker.addEventListener( 'tick', this.world);
            /*
            createjs.Ticker.addEventListener( 'tick', function( event ){
                var x = event.delta/1000*20
                self.actor.x += x;
                self.world.update();
            } );
            */

            createjs.Ticker.addEventListener( 'tick', function( event ){
                self.actor.update();
                self.world.update();
            } );
        }
    });
});