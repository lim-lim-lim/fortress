
'use strict';

( function(){

    var _base = 'src/lib';
    var _secene =  '../secene';
    var _root =  '../';

    require.config({
        baseUrl:_base,
        paths:{
            intro   :_secene+'/intro',
            lobby   :_secene+'/lobby',
            room    :_secene+'/room',
            world   :_secene+'/world'
        }
    });

    require( [ 'backbone', '../router'],function( Bb, Rt ){
        new Rt();
        Bb.history.start();
    } );

}())

