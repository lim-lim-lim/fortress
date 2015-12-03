
'use strict';

define( [ 'createjs', 'world/o-collision-sensor' ],function( C, CS ){

    function Actor( map ){
        this.Container_constructor();
        this.map = map;
        this.w = 20;
        this.h = 20;
        this.sensorSize = 1;
        this.rotation = 0;
        this.body = new createjs.Shape();
        this.addChild( this.body );
        this.regX = this.w/2;
        this.regY = this.h;
        this.isLanding = false;
        this.sensors = [];
        _initSensors.call( this );
    }

    var actor = createjs.extend( Actor, createjs.Container );

    actor.update = function(){
        if( _checkLanding.call( this ) != -1 ){
            this.sensorC.isLanding = true;
        }else{
            this.y++;
        }
        _updateSensors.call( this );
        _checkIcnlination.call( this );
        this.body.graphics.clear()
            .beginFill( '#CCC' ).beginStroke( '#AAA' ).drawRect( 0, 0, this.w, this.h).endFill()
            .beginFill( '#F00' ).drawRect( this.sensorL.x-this.x, this.sensorL.y-this.y+this.h-this.sensorSize, this.sensorL.w, this.sensorL.h )
            .beginFill( '#0F0' ).drawRect( this.sensorC.x-this.x, this.sensorC.y-this.y+this.h-this.sensorSize,  this.sensorC.w, this.sensorC.h )
            .beginFill( '#00F' ).drawRect( this.sensorR.x-this.x, this.sensorR.y-this.y+this.h-this.sensorSize, this.sensorR.w, this.sensorR.h ).endFill();
    }

    function _initSensors(){
        this.sensors = new Array(3);
        for( var i= 0, count=this.sensors.length ; i<count ; i+=1 ){
            this.sensors[ i ] = new CS( 0, 0, this.sensorSize, this.sensorSize );
        }

        this.sensorL = this.sensors[ 0 ];
        this.sensorC = this.sensors[ 1 ];
        this.sensorR = this.sensors[ 2 ];
    }

    function _updateSensors(){
        var gap = 1;
        var totalWidth = ( this.sensorSize + gap ) * this.sensors.length;
        var startX  = this.x + ( this.w - totalWidth ) / 2;

        for( var i=0, count=this.sensors.length ; i<count ; i+=1 ){
            var sensor = this.sensors[ i];
            sensor.x = startX;
            startX += this.sensorSize + gap;
            if( sensor.isLanding == false ){
                sensor.y++;
            }
        }
    }

    function _checkLanding(){
        if( _checkHitTestSensor.call( this, this.sensorL, this.map, 0 ) != -1 ){
            this.sensorL.isLanding = true;
        }

        if( _checkHitTestSensor.call( this, this.sensorR, this.map, 0 ) != -1 ){
            this.sensorR.isLanding = true;
        }
        return _checkHitTestSensor.call( this, this.sensorC, this.map, 0 );
    }

    function _checkHitTestSensor( sensor, target, offset ){
        var sx = sensor.x;
        var sy = sensor.y + offset;
        /*
        for( var i=0 ; i<this.sensorSize ; i+=1 ){
            if( target.hitTest( sx+i, sy ) ){
                return sy;
            }
        }
        */

        if( target.hitTest( sensor.x, sensor.y ) ){
            //console.log( sensor.x, sensor.y )
            return sy;
        }
        return -1;
    }

    function _checkIcnlination(){

        this.rotation = (Math.atan2( this.sensorR.y - this.sensorL.y, (this.x+this.sensorR.x) - (this.x+this.sensorL.x) ))*180/Math.PI;
        this.isLanding = true;
    }

    return createjs.promote(Actor, 'Container');
});