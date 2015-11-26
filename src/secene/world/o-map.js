
'use strict';

define( [ 'createjs', 'util' ],function( C, U ){
    function Map( w, h, r, e ){
        this._w = w;
        this._h = h;
        this._r = r || 30;
        this._e = e || 7;
        this.Shape_constructor();
        _create( this.graphics, this._w, this._h, this._r, this._e );
    }

    function _create( g, w, h, r, e ){
        var x = 0;
        var rh = h - (h / 100 * r);
        var startY = rh + U.random( -e, e );
        var y = startY;
        var step = U.random( 5, 20 );
        var stepSize = w / step;
        g.beginFill( '#CCC').beginStroke( '#AAA').moveTo( x,y );
        for( var i= 0 ; i<=step ; i+=1 ){
            var x = i*stepSize;
            var y = rh + U.random( -e, e );

            g.lineTo( x, y );
        }
        g.lineTo( x, h ).lineTo( 0, h ).lineTo( 0, startY).endFill();
    }

    var map = createjs.extend( Map, createjs.Shape );
    return createjs.promote(Map, 'Shape');
});