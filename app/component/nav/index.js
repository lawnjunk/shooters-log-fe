'use strict';
require('./nav.scss');
const angular = require('angular');
const appShooter = angular.module('appShooter');

appShooter.component('appNav', {
  template: require('./nav.html'),
  controller: 'NavController',
  controllerAs: 'navCtrl'
});

appShooter.controller('NavController', ['$log', '$location', 'authService', NavController]);

function NavController($log, $location, authService){
  this.homeIcon = require('../../scss/lib/asset/home.svg');
  this.formIcon = require('../../scss/lib/asset/createForm.svg');

  this.logout = function(){
    $log.debug('navController.logout');
    authService.logout()
    .then(() => {
      $location.path('/signin');
    })
    .catch(err => {
      $log.error('No Signout:', err);
    });
  };
}
