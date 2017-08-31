webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Login.prototype.login = function () {
        // Your app login API web service call triggers 
        var log = {
            username: this.username,
            password: this.password,
            mode: 0,
            admin: 0
        };
        this.viewCtrl.dismiss(log);
    };
    Login.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Iniciar Sesión</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n        <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input  [(ngModel)]="username" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n\n</ion-list>\n    <button ion-button block color="secondary" (click)="login()">Enviar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Signup.prototype.register = function () {
        var registro = {
            username: this.username,
            password: this.password,
            mode: 1,
            admin: 0
        };
        this.viewCtrl.dismiss(registro);
    };
    Signup.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrarse</ion-title>\n    <ion-buttons end>\n	<button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n\n       <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input  [(ngModel)]="username" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password"  [(ngModel)]="password"></ion-input>\n        </ion-item>\n\n\n    </ion-list>\n\n    <button ion-button block color="secondary" (click)="register()">Enviar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddReviewPage = (function () {
    function AddReviewPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.user = navParams.get('username');
    }
    AddReviewPage.prototype.save = function () {
        var review = {
            title: this.title,
            user: this.user,
            description: this.description,
            rating: this.rating,
            image: this.image,
            video: this.video
        };
        this.viewCtrl.dismiss(review);
    };
    AddReviewPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return AddReviewPage;
}());
AddReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'add-review-page',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/add-review/add-review.html"*/'<!--\n  Generated template for the AddReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Añadir review</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list no-lines>\n\n        <ion-item>\n            <ion-label floating>Titulo</ion-label>\n            <ion-input [(ngModel)]="title" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Critica</ion-label>\n            <ion-textarea [(ngModel)]="description"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n            <ion-range min="0" max="100" pin="true" [(ngModel)]="rating">\n                <ion-icon range-left name="sad"></ion-icon>\n                <ion-icon range-right name="happy"></ion-icon>\n            </ion-range>\n        </ion-item>\n	\n	<ion-item>\n            <ion-label floating>Imagen</ion-label>\n            <ion-input [(ngModel)]="image" type="text"></ion-input>\n        </ion-item>\n\n	<ion-item>\n            <ion-label floating>Video</ion-label>\n            <ion-input [(ngModel)]="video" type="text" value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></ion-input>\n        </ion-item>\n	\n    </ion-list>\n	\n    <button ion-button block color="secondary" (click)="save()">Save</button>\n	\n</ion-content>\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/add-review/add-review.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AddReviewPage);

//# sourceMappingURL=add-review.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModifyItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModifyItemPage = (function () {
    function ModifyItemPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.reviewToUpdate = navParams.get('review');
    }
    ModifyItemPage.prototype.save = function () {
        var review = {
            _id: this.reviewToUpdate._id,
            title: this.title,
            user: this.reviewToUpdate.user,
            description: this.description,
            rating: this.rating
        };
        this.viewCtrl.dismiss(review);
    };
    ModifyItemPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return ModifyItemPage;
}());
ModifyItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modify-item',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/modify-item/modify-item.html"*/'<!--\n  Generated template for the ModifyItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>Modificar Item</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list> \n\n        <ion-item>\n            <ion-label >Titulo</ion-label>\n            <ion-input [(ngModel)]="title" type="text" value={{reviewToUpdate.title}}></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label >Critica</ion-label>\n            <ion-textarea [(ngModel)]="description" value={{reviewToUpdate.description}}></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n            <ion-range min="0" max="100" pin="true" [(ngModel)]="rating">\n                <ion-icon range-left name="sad"></ion-icon>\n                <ion-icon range-right name="happy"></ion-icon>\n            </ion-range>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="secondary" (click)="save()">Save</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/modify-item/modify-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], ModifyItemPage);

//# sourceMappingURL=modify-item.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reviews_reviews__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdminControlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AdminControlPage = (function () {
    function AdminControlPage(navCtrl, navParams, reviewService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reviewService = reviewService;
    }
    AdminControlPage.prototype.csvJSON = function (csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result; //JavaScript object
        //return JSON.stringify(result); //JSON
    };
    AdminControlPage.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                var text = reader_1.result;
                console.log('CSVVVV: ', text.substring(0, 100) + '...');
                var json = _this.csvJSON(text);
                console.log('JSON: ', json);
                for (var i = 0; i < json.length; i++) {
                    console.log(json[i]);
                    _this.reviewService.createReview(json[i]).subscribe(function (data) {
                        console.log('INSERTADO: ', data);
                    });
                }
            };
            reader_1.readAsText(file);
            /* let formData:FormData = new FormData();
                    formData.append('uploadFile', file, file.name);
                    let headers = new Headers();
                    headers.append('Content-Type', 'multipart/form-data');
                    headers.append('Accept', 'application/json');
                    let options = new RequestOptions({ headers: headers });
                    this.http.post(`${this.apiEndPoint}`, formData, options)
                        .map(res => res.json())
                        .catch(error => Observable.throw(error))
                        .subscribe(
                            data => console.log('success'),
                            error => console.log(error)
                        )*/
        }
    };
    return AdminControlPage;
}());
AdminControlPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-admin-control',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/admin-control/admin-control.html"*/'<!--\n  Generated template for the AdminControlPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ADMINISTRADOR</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n		<input type="file" (change)="fileChange($event)" id=\'fileInput\' placeholder="Upload file" accept=".csv,.xls">\n	</ion-item>\n	<ion-item>\n                <input type="file" (change)="fileChange($event)" id=\'fileInput\' placeholder="Upload file" accept=".csv,.xls">\n        </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/admin-control/admin-control.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_reviews_reviews__["a" /* Reviews */]])
], AdminControlPage);

//# sourceMappingURL=admin-control.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_control_admin_control__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(alertCtrl, navCtrl, navParams, modalCtrl, userService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
    }
    Welcome.prototype.alertFail = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'El usuario ya existe.',
            buttons: ['Ok']
        });
        alert.present();
    };
    Welcome.prototype.alertSuccess = function () {
        var alert = this.alertCtrl.create({
            title: 'Enhorabuena!',
            subTitle: 'Tu usuario ha sido creado correctamente',
            buttons: ['Ok']
        });
        alert.present();
    };
    Welcome.prototype.alertFailLogin = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Usuario o password erroneos',
            buttons: ['Ok']
        });
        alert.present();
    };
    Welcome.prototype.alertSuccessLogin = function () {
        var alert = this.alertCtrl.create({
            title: 'Enhorabuena!',
            subTitle: 'Has iniciado sesión correctamente',
            buttons: ['Ok']
        });
        alert.present();
    };
    Welcome.prototype.login = function () {
        var _this = this;
        /*this.navCtrl.push(HomePage);*/
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
        modal.onDidDismiss(function (user) {
            if (user) {
                _this.userService.loginUser(user).subscribe(function (data) {
                    _this.users = data;
                    if (_this.users.status == -1) {
                        _this.alertFailLogin();
                    }
                    if (_this.users.status == 0) {
                        _this.alertSuccessLogin();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], { username: user.username });
                        //this.navCtrl.push(AdminControlPage);
                    }
                    if (_this.users.status == 1) {
                        _this.alertSuccessLogin();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_control_admin_control__["a" /* AdminControlPage */]);
                    }
                });
            }
        });
        modal.present();
    };
    Welcome.prototype.signup = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */]);
        modal.onDidDismiss(function (user) {
            if (user) {
                /*	this.users.push(user);*/
                _this.userService.createUser(user).subscribe(function (data) {
                    _this.users = data;
                    if (_this.users.status == -1) {
                        _this.alertFail();
                    }
                    else {
                        _this.alertSuccess();
                    }
                });
            }
        });
        modal.present();
    };
    Welcome.prototype.admin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_control_admin_control__["a" /* AdminControlPage */]);
    };
    return Welcome;
}());
Welcome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding id="welcome">\n  <ion-grid>\n    <ion-row text-center>\n      <ion-col>\n        <h1>Bienvenido</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid >\n    <ion-row>\n      <ion-col center text-center>\n        <button ion-button color="buttons" (click)="signup()">Regístrarse</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col center text-center>\n        <button ion-button color="buttons" (click)="login()">Iniciar Sesión</button>\n      </ion-col>\n    </ion-row>\n   <!-- <ion-row>\n      <ion-col center text-center>\n        <button ion-button color="bar" (click)="admin()">ADMINISTRADOR</button>\n      </ion-col>\n    </ion-row>-->\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_users_users__["a" /* Users */]])
], Welcome);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-review/add-review.module": [
		273,
		14
	],
	"../pages/admin-control/admin-control.module": [
		275,
		13
	],
	"../pages/login/login.module": [
		271,
		12
	],
	"../pages/modify-item/modify-item.module": [
		274,
		11
	],
	"../pages/review/review.module": [
		277,
		8
	],
	"../pages/signup/signup.module": [
		272,
		10
	],
	"../pages/welcome/welcome.module": [
		276,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var Users = (function () {
    function Users(http) {
        this.http = http;
        this.data = null;
    }
    Users.prototype.getUsers = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://adminReviews:adminReviews@52.51.10.229:15015/api/users')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    Users.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://52.51.10.229:15015/api/users', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    Users.prototype.createUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://52.51.10.229:15015/api/users', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return Users;
}());
Users = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Users);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_review_add_review__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reviews_reviews__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_item_modify_item__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(nav, reviewService, modalCtrl, navParams) {
        this.nav = nav;
        this.reviewService = reviewService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.user = navParams.get('username');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.reviewService.getReviews(this.user).then(function (data) {
            // console.log(data);
            _this.reviews = data;
        });
    };
    HomePage.prototype.addReview = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_review_add_review__["a" /* AddReviewPage */], { username: this.user });
        modal.onDidDismiss(function (review) {
            if (review) {
                _this.reviews.push(review);
                _this.reviewService.createReview(review).subscribe(function (data) {
                    //console.log(data);
                    _this.reviews = data;
                });
            }
        });
        modal.present();
    };
    HomePage.prototype.updateReview = function (review) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modify_item_modify_item__["a" /* ModifyItemPage */], { review: review });
        modal.onDidDismiss(function (review) {
            if (review) {
                console.log(review);
                _this.reviews.push(review);
                _this.reviewService.updateReview(review).subscribe(function (data) {
                    //console.log(data);
                    _this.reviews = data;
                });
            }
        });
        modal.present();
    };
    HomePage.prototype.showReview = function (review) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__review_review__["a" /* ReviewPage */], { review: review });
        modal.onDidDismiss(function (review) {
            if (review) {
                console.log(review);
                _this.reviews.push(review);
                _this.reviews = review;
            }
        });
        modal.present();
    };
    HomePage.prototype.deleteReview = function (review) {
        //Remove locally
        var index = this.reviews.indexOf(review);
        //console.log(review);
        if (index > -1) {
            this.reviews.splice(index, 1);
        }
        //Remove from database
        this.reviewService.deleteReview(review._id).subscribe(function (data) {
            console.log(data);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'home-page',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color= "bar">\n        <ion-title>\n           <h1> Tus reviews</h1>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addReview()"><ion-icon name="add"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list >\n\n        <ion-item-sliding *ngFor="let review of reviews">\n		\n            <ion-item *ngIf="review.user == this.user" (click)="showReview(review)" style="padding-left: 0px;padding-right: 16px;">\n		<h2>{{review.title}}</h2>\n                <p>{{review.description}}</p>\n\n                <ion-icon *ngIf="review.rating < 50" color=\'danger\' name="sad"></ion-icon>\n                <ion-icon *ngIf="review.rating >= 50" color= \'verde\' name="happy"></ion-icon>\n                {{review.rating}}\n		<ion-icon item-end name="ios-arrow-back"></ion-icon>\n\n            </ion-item>\n	    \n\n            <ion-item-options style="padding-right: 10px;">\n        	<button ion-button color="secondary" (click)="updateReview(review)">\n	          <ion-icon name="create"></ion-icon>\n          	  Modify\n        	</button>\n            	\n		<button ion-button color="danger" (click)="deleteReview(review)">\n                  <ion-icon name="trash"></ion-icon>\n                  Delete\n                </button>\n\n	    </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_reviews_reviews__["a" /* Reviews */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_reviews_reviews__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_review_add_review__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_users_users__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modify_item_modify_item__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_control_admin_control__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_review_review__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_review_add_review__["a" /* AddReviewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modify_item_modify_item__["a" /* ModifyItemPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_admin_control_admin_control__["a" /* AdminControlPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_review_review__["a" /* ReviewPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-review/add-review.module#AddReviewPageModule', name: 'AddReviewPage', segment: 'add-review', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modify-item/modify-item.module#ModifyItemPageModule', name: 'ModifyItemPage', segment: 'modify-item', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin-control/admin-control.module#AdminControlPageModule', name: 'AdminControlPage', segment: 'admin-control', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_review_add_review__["a" /* AddReviewPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modify_item_modify_item__["a" /* ModifyItemPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_admin_control_admin_control__["a" /* AdminControlPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_review_review__["a" /* ReviewPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_reviews_reviews__["a" /* Reviews */],
            __WEBPACK_IMPORTED_MODULE_13__providers_users_users__["a" /* Users */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReviewPage = (function () {
    function ReviewPage(navCtrl, navParams, viewCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.sanitizer = sanitizer;
        this.reviewToUpdate = navParams.get('review');
        this.url = this.reviewToUpdate.video;
    }
    ReviewPage.prototype.transform = function (url) {
        console.log(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ReviewPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log(this.reviewToUpdate);
        console.log(this.url);
        console.log('ionViewDidLoad ReviewPage');
    };
    return ReviewPage;
}());
ReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-review',template:/*ion-inline-start:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title>Review</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n            <ion-label >Titulo</ion-label>\n	    <ion-input [(ngModel)]="input" value={{reviewToUpdate.title}}></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label >Critica</ion-label>\n            <ion-input [(ngModel)]="description" value={{reviewToUpdate.description}}></ion-input>\n	</ion-item>\n\n        <ion-item>\n     	    <ion-label>Rating</ion-label>\n            <ion-input [(ngModel)]="rating" value={{reviewToUpdate.rating}}></ion-input>\n	</ion-item>\n\n	<ion-item>\n            <ion-label>Imagen</ion-label>\n            <ion-input [(ngModel)]="image" value={{reviewToUpdate.image}}></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Video</ion-label>\n<!--            <iframe width="auto" height="auto" [src]="url | safe"  allowfullscreen></iframe>\n-->		\n            <ion-input [(ngModel)]="video" value={{url}}></ion-input>\n	    <iframe width="auto" height="auto" src={{url}}  allowfullscreen></iframe>\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="secondary" (click)="close()">Ok</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/bitnami/proyects/app1/reviewking/review-king/src/pages/review/review.html"*/,
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], ReviewPage);

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reviews; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var Reviews = (function () {
    function Reviews(http) {
        this.http = http;
        this.data = null;
    }
    Reviews.prototype.getReviews = function (username) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('user', username);
        return new Promise(function (resolve) {
            _this.http.get('http://adminReviews:adminReviews@52.51.10.229:15015/api/reviews', { search: params })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    Reviews.prototype.createReview = function (review) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://52.51.10.229:15015/api/reviews', JSON.stringify(review), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    Reviews.prototype.updateReview = function (review) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://52.51.10.229:15015/api/reviews/' + review._id, JSON.stringify(review), { headers: headers }).map(function (res) { return res.json(); });
    };
    Reviews.prototype.deleteReview = function (id) {
        return this.http.delete('http://52.51.10.229:15015/api/reviews/' + id).map(function (res) { return res.json(); });
    };
    return Reviews;
}());
Reviews = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Reviews);

//# sourceMappingURL=reviews.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map