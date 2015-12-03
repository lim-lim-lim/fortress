
'use strict';

define( function(){

    function CollisionSensor( x, y, w, h ){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.isLanding = false;
    }

    return CollisionSensor;
});