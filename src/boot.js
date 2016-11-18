import 'jquery';
import 'lodash';

import 'bootstrap-webpack';

import 'angular';
import 'angular-cookies';
import 'angular-ui-router';

import 'restangular';

import 'styles/global.css';

import MainController from './controllers/MainController.js';
import LoginController from './controllers/LoginController.js';

import AuthService from './services/AuthService.js';

import ConfigFn from './config.js';
import RunFn from './run.js';


angular
    .module('blog', 
        ['ui.router', 'restangular']
    )

    .controller('MainController', MainController)
    .controller('LoginController', LoginController)

    .service('AuthService', AuthService)

    .config(ConfigFn)

    .run(RunFn);
