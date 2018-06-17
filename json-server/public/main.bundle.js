webpackJsonp([1,4],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leader_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = (function () {
    function AboutComponent(leaderService) {
        this.leaderService = leaderService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders().subscribe(function (leaders) { return _this.leaders = leaders; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(399),
        styles: [__webpack_require__(382)],
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_feedback__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.contactType = __WEBPACK_IMPORTED_MODULE_2__shared_feedback__["a" /* ContactType */];
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            },
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(25)]],
            telnum: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(401),
        styles: [__webpack_require__(384)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dish_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_app_animation__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var DishdetailComponent = (function () {
    function DishdetailComponent(dishService, location, route, fb, BaseURL) {
        this.dishService = dishService;
        this.location = location;
        this.route = route;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.dishcopy = null;
        this.visibility = 'shown';
        this.formErrors = {
            'author': '',
            'comment': '',
            'rating': ''
        };
        this.validationMessages = {
            'author': {
                'required': 'Author Name is required.',
                'minlength': 'Author Name must be at least 2 characters long.',
                'maxlength': 'Author cannot be more than 25 characters long.'
            },
            'Comment': {
                'required': 'Comment is required.',
            },
        };
        this.createForm();
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; });
        this.route.params
            .switchMap(function (params) { _this.visibility = 'hidden'; return _this.dishService.getDish(+params['id']); })
            .subscribe(function (dish) { _this.dish = dish; _this.dishcopy = dish; _this.setPrevNext(dish.id); _this.visibility = 'shown'; }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            author: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(25)]],
            comment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            rating: ['']
        });
        this.commentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    DishdetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.comment = this.commentForm.value;
        console.log(this.comment.author);
        this.comment.date = new Date().toISOString();
        console.log(this.comment);
        this.dishcopy.comments.push(this.comment);
        this.dishcopy.save()
            .subscribe(function (dish) { _this.dish = dish; console.log(_this.dish); });
        this.commentForm.reset({
            aurhor: '',
            rating: '5',
            comment: ''
        });
    };
    return DishdetailComponent;
}());
DishdetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dishdetail',
        template: __webpack_require__(402),
        styles: [__webpack_require__(385)],
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_app_animation__["c" /* visibility */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _d || Object, Object])
], DishdetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dishdetail.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_leader_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_app_animation__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HomeComponent = (function () {
    function HomeComponent(dishService, promotionService, leaderService, BaseURL) {
        var _this = this;
        this.dishService = dishService;
        this.promotionService = promotionService;
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
        this.dishService.getFeaturedDish().subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionService.getFeaturedPromotion().subscribe(function (promotion) { return _this.promotion = promotion; });
        this.leaderService.getFeaturedLeader().subscribe(function (leader) { return _this.leader = leader; });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(405),
        styles: [__webpack_require__(388)],
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */]) === "function" && _c || Object, Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log("User:", this.user);
        this.dialogRef.close();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(406),
        styles: [__webpack_require__(389)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MenuComponent = (function () {
    function MenuComponent(dishService, BaseURL) {
        this.dishService = dishService;
        this.BaseURL = BaseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes().subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(407),
        styles: [__webpack_require__(390)],
        host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHTTPMsgService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessHTTPMsgService = (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ProcessHTTPMsgService;
}());
ProcessHTTPMsgService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProcessHTTPMsgService);

//# sourceMappingURL=process-httpmsg.service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Promotions__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromotionService = (function () {
    function PromotionService() {
    }
    PromotionService.prototype.getPromotions = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_1__shared_Promotions__["a" /* PROMOTIONS */]).delay(2000);
    };
    PromotionService.prototype.getPromotion = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_1__shared_Promotions__["a" /* PROMOTIONS */].filter(function (promo) { return (promo.id === id); })[0]).delay(2000);
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_1__shared_Promotions__["a" /* PROMOTIONS */].filter(function (promo) { return (promo.featured); })[0]).delay(2000);
    };
    return PromotionService;
}());
PromotionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PromotionService);

//# sourceMappingURL=promotion.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(63);
/* harmony export (immutable) */ __webpack_exports__["c"] = visibility;
/* harmony export (immutable) */ __webpack_exports__["a"] = flyInOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expand;

function visibility() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('visibility', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('shown', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out'))
    ]);
}
function flyInOut() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyInOut', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('expand', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-50%)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=app.animation.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 291;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(327);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dishdetail_dishdetail_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'dishdetail/:id', component: __WEBPACK_IMPORTED_MODULE_2__dishdetail_dishdetail_component__["a" /* DishdetailComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(400),
        styles: [__webpack_require__(383)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_restConfig__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_baseurl__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dishdetail_dishdetail_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_dish_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_process_httpmsg_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_promotion_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_leader_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_routing_app_routing_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_hghlight_directive__ = __webpack_require__(320);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dishdetail_dishdetail_component__["a" /* DishdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__directives_hghlight_directive__["a" /* HghlightDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_23__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_restangular__["RestangularModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__shared_restConfig__["a" /* RestangularConfigFactory */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_dish_service__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_21__services_promotion_service__["a" /* PromotionService */],
            __WEBPACK_IMPORTED_MODULE_22__services_leader_service__["a" /* LeaderService */], __WEBPACK_IMPORTED_MODULE_20__services_process_httpmsg_service__["a" /* ProcessHTTPMsgService */], { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_10__shared_baseurl__["a" /* baseURL */] }],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HghlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HghlightDirective = (function () {
    function HghlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HghlightDirective.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HghlightDirective.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    return HghlightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HghlightDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HghlightDirective.prototype, "onMouseLeave", null);
HghlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appHghlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], HghlightDirective);

var _a, _b;
//# sourceMappingURL=hghlight.directive.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(403),
        styles: [__webpack_require__(386)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dailog) {
        this.dailog = dailog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dailog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], { width: '500px', height: '450px' });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(404),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEADERS; });
var LEADERS = [
    {
        id: 0,
        name: 'Peter Pan',
        image: '/assets/images/alberto.png',
        designation: 'Chief Epicurious Officer',
        abbr: 'CEO',
        featured: false,
        description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
    },
    {
        id: 1,
        name: 'Dhanasekaran Witherspoon',
        image: '/assets/images/alberto.png',
        designation: 'Chief Food Officer',
        abbr: 'CFO',
        featured: false,
        description: 'Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!'
    },
    {
        id: 2,
        name: 'Agumbe Tang',
        image: '/assets/images/alberto.png',
        designation: 'Chief Taste Officer',
        abbr: 'CTO',
        featured: false,
        description: 'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.'
    },
    {
        id: 3,
        name: 'Alberto Somayya',
        image: '/assets/images/alberto.png',
        designation: 'Executive Chef',
        abbr: 'EC',
        featured: true,
        description: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!'
    }
];
//# sourceMappingURL=LEADERS.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROMOTIONS; });
var PROMOTIONS = [
    {
        id: 0,
        name: 'Weekend Grand Buffet',
        image: '/assets/images/buffet.png',
        label: 'New',
        price: '19.99',
        featured: true,
        description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
    }
];
//# sourceMappingURL=Promotions.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Feedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactType; });
var Feedback = (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];
//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseurl__ = __webpack_require__(155);
/* harmony export (immutable) */ __webpack_exports__["a"] = RestangularConfigFactory;

// Function for settting the default restangular configuration
function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_0__baseurl__["a" /* baseURL */]);
}
//# sourceMappingURL=restConfig.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background: #4527A0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n\n     <div fxFlex>\n            <div>\n               <h3>About Us</h3>\n               <hr>\n            </div>\n     </div>\n\n      <div fxFlex>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n          <div fxFlex=\"70\">\n              <h2>Our History</h2>\n              <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n              <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n          </div>\n          <div fxFlex=\"30\">\n              <md-card>\n                <md-card-header>\n                  <md-card-title>\n                  <h2>Facts At a Glance</h2>\n                  </md-card-title>\n                </md-card-header>\n                <md-card-content>\n                        <dl>\n                            <dt>Started</dt>\n                            <dd>3 Feb. 2013</dd>\n                            <dt>Major Stake Holder</dt>\n                            <dd>HK Fine Foods Inc.</dd>\n                            <dt>Last Year's Turnover</dt>\n                            <dd>$1,250,375</dd>\n                            <dt>Employees</dt>\n                            <dd>40</dd>\n                       </dl>\n                </md-card-content>\n              </md-card>\n          </div>\n        </div>\n      </div>\n      \n      <div fxFlex>\n                <md-card>\n                    <blockquote>\n                        <h3>You better cut the pizza in four pieces because\n                            I'm not hungry enough to eat six.</h3>\n                        <footer>-- Yogi Berra,\n                          <cite>The Wit and Wisdom of Yogi Berra,\n                            P. Pepe, Diversion Books, 2014</cite>\n                        </footer>\n                    </blockquote>\n                </md-card>\n      </div>\n\n\n        <div fxFlex>\n          <md-list  *ngFor=\"let leader of leaders\" [@expand]>\n            \n            <img md-list-avatar src=\"{{leader.image}}\" alt=\"leader.name\">\n            <md-list-item>{{leader.name}} </md-list-item>\n            <md-list-item>{{leader.designation}}</md-list-item>\n            <md-list-item>{{leader.description}}</md-list-item>\n           </md-list>\n       </div>\n\n       <div [hidden]=\"leaders\">\n          <md-spinner></md-spinner><h4>Loading..... Please Wait</h4>\n        </div>\n</div>\n"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n\n     <div fxFlex>\n            <div>\n               <h3>Contact Us</h3>\n               <hr>\n            </div>\n     </div>\n\n    <div fxFlex>\n      <h3>Location Information</h3> \n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n          <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n                <h4>Our Address</h4>\n                <address>\n\t\t              121, Clear Water Bay Road<br>\n\t\t              Clear Water Bay, Kowloon<br>\n\t\t              HONG KONG<br>\n\t\t              <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n\t\t              <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n\t\t              <i class=\"fa fa-envelope\"></i>: \n                        <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n\t\t           </address>\n               <p></p>\n                <div>\n                    <a md-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n                    <a md-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n                    <a md-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n                </div>\n            </div>\n          <div fxFlex=\"40\">\n                <h4>Map of our Location</h4>\n          </div>\n        </div>\n      </div>\n      <form novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\">\n          <p>\n            <md-input-container class=\"half-width\"\n             dividerColor=\"{{(formErrors.firstname) ? 'warn' : 'primary'}}\">\n              <input mdInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n              <md-hint>\n                <span [hidden]=\"!(formErrors.firstname)\">\n                  {{formErrors.firstname}}</span>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"half-width\"\n             dividerColor=\"{{(formErrors.lastname) ? 'warn' : 'primary'}}\">\n              <input mdInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n              <md-hint>\n                <span [hidden]=\"!(formErrors.lastname)\">\n                  {{formErrors.lastname}}</span>\n              </md-hint>\n            </md-input-container>\n          </p>\n          <p>\n            <md-input-container class=\"half-width\"\n             dividerColor=\"{{(formErrors.telnum) ? 'warn' : 'primary'}}\">\n              <input mdInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n              <md-hint>\n                <span [hidden]=\"!(formErrors.telnum)\">\n                  {{formErrors.telnum}}</span>\n              </md-hint>\n            </md-input-container>\n            <md-input-container class=\"half-width\"\n             dividerColor=\"{{(formErrors.email) ? 'warn' : 'primary'}}\">\n              <input mdInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n              <md-hint>\n                <span [hidden]=\"!(formErrors.email)\">\n                  {{formErrors.email}}</span>\n              </md-hint>\n            </md-input-container>\n          </p>\n          <table class=\"form-size\">\n            <td>\n            <md-slide-toggle formControlName=\"agree\">May we contact you?</md-slide-toggle>\n            </td>\n            <td>\n            <md-select placeholder=\"How?\" formControlName=\"contacttype\">\n              <md-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n                {{ ctype }}\n              </md-option>\n            </md-select>\n            </td>\n            </table>\n          <p>\n            <md-input-container class=\"full-width\">\n              <textarea mdInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n            </md-input-container>\n          </p>\n          <button type=\"submit\" md-button class=\"background-primary text-floral-white\" [disabled]=\"feedbackForm.invalid\">Submit</button>\n        </form>\n</div>\n"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\"\n    fxLayoutGap=\"10px\" \n    fxLayoutGap.xs=\"0\">\n\n  <div fxFlex=\"40\" *ngIf=\"dish\"  [@visibility]=\"visibility\" [@expand]>\n    <div fxFlex >\n      <md-card>\n        <md-card-header>\n          <md-card-title>\n            <h3>{{dish.name | uppercase}}</h3>\n          </md-card-title>\n        </md-card-header>\n        <img md-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n        <md-card-content>\n          <p>{{dish.description}}\n          </p>\n        </md-card-content>\n        <md-card-actions>\n            <button md-button [routerLink]=\"['/dishdetail', prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\n            <button md-button (click)=\"goBack()\">Go Back</button>\n          <button md-button>LIKE</button>\n          <button md-button>SHARE</button>\n          <span class=\"flex-spacer\"></span>\n          <button md-button [routerLink]=\"['/dishdetail', next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </div>\n\n\n\n  <div fxFlex=\"40\" *ngIf=\"dish\"  [@visibility]=\"visibility\" [@expand]>\n    <md-list fxFlex>\n      <h3>Comments</h3>\n      <md-list-item *ngFor=\"let comment of dish.comments\">\n        <h1 md-line>{{ comment.comment }}</h1>\n        <p md-line>{{ comment.rating }} Stars</p>\n        <p md-line>-- {{ comment.author }} {{ comment.date | date }}</p>\n      </md-list-item>\n      </md-list>\n\n   \n      \n    \n  </div>\n\n  \n\n\n    <form novalidate [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\n      <p>\n        <md-input-container class=\"half-width\"\n        dividerColor=\"{{(formErrors.author) ? 'warn' : 'primary'}}\">\n          <input mdInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" required> \n          <md-hint>\n            <span [hidden] = \"!(formErrors.author)\">{{formErrors.author}}</span>\n          </md-hint>\n        </md-input-container>\n      </p>\n      \n      <p>\n        \n       \n        \n        <md-slider step=\"1\" min=\"1\" max=\"5\" thumbLabel tickInterval= \"1\" value=\"5\" formControlName=\"rating\"></md-slider>\n      \n      \n      </p>\n  \n      <p>\n        <md-input-container class=\"full-width\"  dividerColor=\"{{(formErrors.comment) ? 'warn' : 'primary'}}\">\n          <textarea mdInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=12></textarea>\n          <md-hint>\n            <span [hidden]=\"!(formErrors.rating)\">\n              {{formErrors.comment}}</span>\n          </md-hint>\n        </md-input-container>\n      </p>\n      <button type=\"submit\" md-button class=\"background-primary text-floral-white\" [disabled]=\"commentForm.invalid\">Submit</button>\n    </form>\n    \n\n    \n    <!-- <div [hidden]=\"dishes || errMess\">\n      <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n    </div>\n    <div *ngIf=\"errMess\">\n      <h2>Error</h2>\n      <h4>{{errMess}}</h4>\n    </div> -->\n\n\n</div>\n\n\n\n\n  "

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\" \n    fxLayout=\"row\" \n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\" \n    fxLayoutAlign.sm=\"start center\"\n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutWrap \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n        <h4>Links</h4>\n        <md-list>\n          <md-list-item><a md-button  routerLink=\"/home\" routerLinkActive=\"active\">Home</a></md-list-item>\n          <md-list-item><a md-button  routerLink=\"/about\" routerLinkActive=\"active\">About</a></md-list-item>\n          <md-list-item><a md-button  routerLink=\"/menu\" routerLinkActive=\"active\">Menu</a></md-list-item>\n          <md-list-item><a md-button  routerLink=\"/contactus\" routerLinkActive=\"active\">Contact</a></md-list-item>\n        </md-list>\n      </div>\n      <div fxFlex=\"50\">\n        <h4>Our Address</h4>\n        <address style=\"text-size: 80%\">\n          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"45%\">\n    <div style=\"text-align:center\">\n      <a md-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n      <a md-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n      <a md-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n      <a md-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n      <a md-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\n      <a md-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlexAlign=\"center center\">\n    <div style=\"text-align:center;\">\n      <p>© Copyright 2015 Ristorante Con Fusion</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n  <a md-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a md-button routerLink=\"/about\" routerLinkActive=\"active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a md-button  routerLink=\"/menu\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n  <a md-button  routerLink=\"/contactus\" routerLinkActive=\"active\"><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  <span class=\"flex-spacer\"></span>\n  <a md-button (click) = \"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span>Login</a>\n</md-toolbar>\n\n<div class=\"container jumbotron\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\"\n    fxLayoutAlign.sm=\"start center\" \n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Ristorante Con Fusion</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>\n"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"row\"\n     fxLayout.sm=\"column\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign.gt-md=\"space-around center\"\n     fxLayoutGap=\"10px\">\n\n<md-card *ngIf=\"dish\" fxFlex>\n  <md-card-header>\n    <div md-card-avatar></div>\n    <md-card-title>\n      <h3>{{dish.name | uppercase}}</h3>\n    </md-card-title>\n  </md-card-header>\n  <img md-card-image src={{dish.image}} alt={{dish.name}}>\n  <md-card-content>\n    <p>{{dish.description}}\n    </p>\n  </md-card-content>\n</md-card>\n<div [hidden]=\"dish ||  dishErrMess\">\n  <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n</div>\n<div *ngIf=\" dishErrMess\">\n  <h2>Error</h2>\n  <h4>{{errMess}}</h4>\n</div>\n\n\n<md-card *ngIf=\"promotion\" fxFlex>\n  <md-card-header>\n    <div md-card-avatar></div>\n    <md-card-title>\n      <h3>{{promotion.name | uppercase}}</h3>\n    </md-card-title>\n  </md-card-header>\n  <img md-card-image src={{promotion.image}} alt={{promotion.name}}>\n  <md-card-content>\n    <p>{{promotion.description}}\n    </p>\n  </md-card-content>\n</md-card>\n<div [hidden]=\"promotion\">\n    <md-spinner></md-spinner><h4>Loading..... Please Wait</h4>\n  </div>\n\n<md-card *ngIf=\"leader\" fxFlex>\n    <md-card-header>\n      <div md-card-avatar></div>\n      <md-card-title>\n        <h3>{{leader.name | uppercase}}</h3>\n      </md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"{{BaseURL + leader.image}}\" alt={{leader.name}}>\n    <md-card-content>\n      <p>{{leader.description}}\n      </p>\n    </md-card-content>\n  </md-card>\n  <div [hidden]=\"leader\">\n      <md-spinner></md-spinner><h4>Loading..... Please Wait</h4>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<md-toolbar md-dialog-title color=\"primary\">\n  Login\n  <span class=\"flex-spacer\"></span>\n  <button md-button md-dialog-close>&times;</button>\n\n</md-toolbar>\n<p>{{ user | json }}</p>\n\n<form novalidate (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n\n  <md-dialog-content>\n    <p>\n      <md-input-container dividerColor=\"{{username.invalid && !username.pristine ? 'warn':'primary'}}\">\n        <input mdInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\"\n        required>\n        <md-hint>\n          <span [hidden]=\"username.pristine\"></span>\n          <span [hidden]=\"username.errors?.required\">Username is required</span>\n        </md-hint>\n      </md-input-container>\n      <md-input-container dividerColor=\"{{password.invalid && !password.pristine ? 'warn':'primary'}}\">\n        <input mdInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\n        <md-hint>\n            <span [hidden]=\"password.pristine\"></span>\n            <span [hidden]=\"password.errors?.required\">Password is required</span>\n          </md-hint>\n      </md-input-container>\n      <md-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</md-checkbox>\n    </p>\n  </md-dialog-content>\n  <md-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button md-button md-dialog-close>Cancel</button>\n    <button type=\"submit\" md-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n  </md-dialog-actions>\n</form>\n"

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n     <div fxFlex>\n       <div>\n         <h3>Menu</h3>\n         <hr>\n       </div>\n    </div>\n<div fxFle *ngIf=\"dishes\" [@expand]>\n<md-grid-list cols=\"2\" rowHeight=\"200px\">\n  <md-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail/',dish.id]\" appHghlight>\n    <img height=\"200px\" src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n    <md-grid-tile-footer>\n    <h1 md-line> {{dish.name | uppercase}} </h1>\n    \n  </md-grid-tile-footer>\n  </md-grid-tile>\n</md-grid-list>\n</div>\n<div [hidden]=\"dishes || errMess\">\n  <md-spinner></md-spinner><h4>Loading . . . Please Wait</h4>\n</div>\n<div *ngIf=\"errMess\">\n  <h2>Error</h2>\n  <h4>{{errMess}}</h4>\n</div>\n</div>\n"

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DishService = (function () {
    function DishService(restangular, processHTTPMsgService) {
        this.restangular = restangular;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishService.prototype.getDishes = function () {
        return this.restangular.all('dishes').getList();
    };
    DishService.prototype.getDish = function (id) {
        return this.restangular.one('dishes', id).get();
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.restangular.all('dishes').getList({ featured: true })
            .map(function (dishes) { return dishes[0]; });
    };
    // getDishIds(): Observable<number[]> {
    //   return this.getDishes()
    //     .map(dishes => { return dishes.map(dish => dish.id) })
    //     .catch(error => { return this.processHTTPMsgService.handleError(error); });
    // }
    DishService.prototype.getDishIds = function () {
        return this.getDishes()
            .map(function (dishes) { return dishes.map(function (dish) { return dish.id; }); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(error); }); // solution
    };
    return DishService;
}());
DishService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_restangular__["Restangular"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_service__["a" /* ProcessHTTPMsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__process_httpmsg_service__["a" /* ProcessHTTPMsgService */]) === "function" && _b || Object])
], DishService);

var _a, _b;
//# sourceMappingURL=dish.service.js.map

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(292);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_LEADERS__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaderService = (function () {
    function LeaderService() {
    }
    LeaderService.prototype.getLeaders = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_1__shared_LEADERS__["a" /* LEADERS */]).delay(2000);
    };
    LeaderService.prototype.getLeader = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_1__shared_LEADERS__["a" /* LEADERS */].filter(function (leader) { return (leader.id === id); })[0]).delay(2000);
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_1__shared_LEADERS__["a" /* LEADERS */].filter(function (led) { return (led.featured); })[0]).delay(2000);
    };
    return LeaderService;
}());
LeaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LeaderService);

//# sourceMappingURL=leader.service.js.map

/***/ })

},[676]);
//# sourceMappingURL=main.bundle.js.map