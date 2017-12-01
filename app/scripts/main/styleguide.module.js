/**
 * Created by moustafabaiou on 3/16/17.
 */

import angular from 'angular';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import ngTouch from 'angular-touch';
// import uibootstrap from 'angular-ui-bootstrap';
import ngFileUpload from 'ng-file-upload';
import styles from '../../styles/main.scss';

let app = angular.module('vbr-style-guide',
    [
        ngAria,
        ngMessages,
        ngTouch,
        // uibootstrap,
        ngFileUpload
    ]);

export default app;
