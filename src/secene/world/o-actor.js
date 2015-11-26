
'use strict';

define( [ 'createjs', 'world/o-collision-sensor' ],function( C, CS ){

    function Actor( map ){
        this.Container_constructor();
        this.map = map;
        this.w = 14;
        this.h = 10;
        this.sensorSize = 3;
        this.rotation = 0;
        this.body = new createjs.Shape();
        this.addChild( this.body );
        this.sensorL = new CS( 0, this.h-1, this.sensorSize, 1 );
        this.sensorC = new CS( (this.w-this.sensorSize)/2, this.h-1, this.sensorSize, 1 );
        this.sensorR = new CS( this.w-this.sensorSize, this.h-1, this.sensorSize, 1);
        this.body.graphics
            .beginFill( '#CCC' ).beginStroke( '#AAA' ).drawRect( 0, 0, this.w, this.h).endFill()
            .beginFill( '#F00' ).drawRect( this.sensorL.x, this.sensorL.y, this.sensorL.w, this.sensorL.h )
                                .drawRect( this.sensorC.x, this.sensorC.y, this.sensorC.w, this.sensorC.h )
                                .drawRect( this.sensorR.x, this.sensorR.y, this.sensorR.w, this.sensorR.h ).endFill();
    }

    var actor = createjs.extend( Actor, createjs.Container );

    actor.update = function(){
        if( _checkLanding.call( this ) != -1 ){
            _checkIcnlination.call( this );
        }else{
            this.y++;
        }
    }

    function _checkLanding(){
        return _checkHitTestSensor.call( this, this.sensorC, this.map, 1 );
    }

    function _checkHitTestSensor( sensor, target, offset ){
        var ax = this.x;
        var ay = this.y+offset;
        var sx = sensor.x;
        var sy = ay + sensor.y;
        for( var i=0 ; i<this.sensorSize ; i+=1 ){
            if( target.hitTest( ax+sx+i, sy ) ){
                return sy;
            }
        }
        return -1;
    }

    function _checkIcnlination(){
        var l = _checkHitTestSensor.call( this, this.sensorL, this.map, 0 );
        var r = _checkHitTestSensor.call( this, this.sensorR, this.map, 0 );

        if( l != -1 ){
            //while( ( l = _checkHitTestSensor.call( this, this.sensorL, this.map, -1 ) ) == -1 ){}
        }else{
            //while( ( l = _checkHitTestSensor.call( this, this.sensorL, this.map, 1 ) ) == -1 ){}

        }

        return;
        if( r != -1 ){
            while( (r = _checkHitTestSensor.call( this, this.sensorR, this.map, -1 ) ) == -1 ){}

        }else{
            while( (r = _checkHitTestSensor.call( this, this.sensorR, this.map, 1 ) ) == -1 ){}
        }

        console.log( l, r );
    }

    return createjs.promote(Actor, 'Container');
});