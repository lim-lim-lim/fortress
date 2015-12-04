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
            var stageWidth = 300;
            var stageHeight = 150;
            this.$el.append( _tmpl( { width:stageWidth, height:stageHeight } ) );
            this.world = new createjs.Stage( 'world-canvas' );
            this.sky = new createjs.Shape();
            this.map = new M( stageWidth, stageHeight );
            this.actor = new A( this.map );
            this.actor.x = U.random( this.actor.w, stageWidth - this.actor.w );
            this.sky.width = 300;
            this.sky.height = 100;
            this.sky.graphics.beginFill( '#EEEEFF').drawRect( 0,0, stageWidth, stageHeight );
            this.world.addChild( this.sky );
            this.world.addChild( this.actor );
            this.world.addChild( this.map );
            var self = this;
            createjs.Ticker.setFPS( 60 );


            createjs.Ticker.addEventListener( 'tick', function( event ){
                self.actor.update();
                self.world.update();
            } );

            this.sky.on( 'click', function( event ){
                self.actor.reset();
                self.actor.x = event.rawX;
                self.actor.y = 0;
            })
        }
    });
});