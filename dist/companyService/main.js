(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/companies/companies.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_create_company_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-create/company-create.component */ "./src/app/company-create/company-create.component.ts");
/* harmony import */ var _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-update/company-update.component */ "./src/app/company-update/company-update.component.ts");
/* harmony import */ var _company_add_owner_company_add_owner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-add-owner/company-add-owner.component */ "./src/app/company-add-owner/company-add-owner.component.ts");
/* harmony import */ var _beneficial_owners_beneficial_owners_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beneficial-owners/beneficial-owners.component */ "./src/app/beneficial-owners/beneficial-owners.component.ts");
/* harmony import */ var _beneficial_owner_create_beneficial_owner_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beneficial-owner-create/beneficial-owner-create.component */ "./src/app/beneficial-owner-create/beneficial-owner-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'companies', component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"] },
    { path: 'companies/:id', component: _company_company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"] },
    { path: 'companyCreate', component: _company_create_company_create_component__WEBPACK_IMPORTED_MODULE_5__["CompanyCreateComponent"] },
    { path: 'companyUpdate/:id', component: _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_6__["CompanyUpdateComponent"] },
    { path: 'companyAddOwner/:id', component: _company_add_owner_company_add_owner_component__WEBPACK_IMPORTED_MODULE_7__["CompanyAddOwnerComponent"] },
    { path: 'beneficialOwners', component: _beneficial_owners_beneficial_owners_component__WEBPACK_IMPORTED_MODULE_8__["BeneficialOwnersComponent"] },
    { path: 'beneficialOwnerCreate', component: _beneficial_owner_create_beneficial_owner_create_component__WEBPACK_IMPORTED_MODULE_9__["BeneficialOwnerCreateComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Company Service</h1>\r\n<a routerLink=\"/companies\">Companies</a> | <a routerLink=\"/beneficialOwners\">Beneficial Owners</a>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/companies/companies.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _company_create_company_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-create/company-create.component */ "./src/app/company-create/company-create.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _beneficial_owners_beneficial_owners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beneficial-owners/beneficial-owners.component */ "./src/app/beneficial-owners/beneficial-owners.component.ts");
/* harmony import */ var _beneficial_owner_create_beneficial_owner_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beneficial-owner-create/beneficial-owner-create.component */ "./src/app/beneficial-owner-create/beneficial-owner-create.component.ts");
/* harmony import */ var _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company-update/company-update.component */ "./src/app/company-update/company-update.component.ts");
/* harmony import */ var _company_add_owner_company_add_owner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company-add-owner/company-add-owner.component */ "./src/app/company-add-owner/company-add-owner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
                _company_create_company_create_component__WEBPACK_IMPORTED_MODULE_8__["CompanyCreateComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _beneficial_owners_beneficial_owners_component__WEBPACK_IMPORTED_MODULE_10__["BeneficialOwnersComponent"],
                _beneficial_owner_create_beneficial_owner_create_component__WEBPACK_IMPORTED_MODULE_11__["BeneficialOwnerCreateComponent"],
                _company_update_company_update_component__WEBPACK_IMPORTED_MODULE_12__["CompanyUpdateComponent"],
                _company_add_owner_company_add_owner_component__WEBPACK_IMPORTED_MODULE_13__["CompanyAddOwnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beneficial-owner-create/beneficial-owner-create.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/beneficial-owner-create/beneficial-owner-create.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/beneficial-owner-create/beneficial-owner-create.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/beneficial-owner-create/beneficial-owner-create.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create Beneficial Owner</h2>\n\n<div>\n    <label>First Name:</label>\n    <br>\n    <div *ngIf='errors.firstName'><span class='validationError'>{{errors.firstName}}</span></div>\n    <input [(ngModel)]=\"beneficialOwner.firstName\" /><br>\n\n    <label>Last Name:</label>\n    <br>\n    <div *ngIf='errors.lastName'><span class='validationError'>{{errors.lastName}}</span></div>\n    <input [(ngModel)]=\"beneficialOwner.lastName\" /><br>\n\n    <br>\n    \n    <button (click)=\"createBeneficialOwner();\">\n      Create\n    </button>\n  </div>"

/***/ }),

/***/ "./src/app/beneficial-owner-create/beneficial-owner-create.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/beneficial-owner-create/beneficial-owner-create.component.ts ***!
  \******************************************************************************/
/*! exports provided: BeneficialOwnerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficialOwnerCreateComponent", function() { return BeneficialOwnerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_beneficialOwner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/beneficialOwner */ "./src/app/domain/beneficialOwner.ts");
/* harmony import */ var _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beneficial-owner.service */ "./src/app/beneficial-owner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeneficialOwnerCreateComponent = /** @class */ (function () {
    function BeneficialOwnerCreateComponent(beneficialOwnerService, router) {
        this.beneficialOwnerService = beneficialOwnerService;
        this.router = router;
    }
    BeneficialOwnerCreateComponent.prototype.ngOnInit = function () {
        this.errors = {};
        this.beneficialOwner = new _domain_beneficialOwner__WEBPACK_IMPORTED_MODULE_1__["BeneficialOwner"]();
    };
    BeneficialOwnerCreateComponent.prototype.createBeneficialOwner = function () {
        var _this = this;
        this.beneficialOwnerService.createBeneficialOwner(this.beneficialOwner)
            .subscribe(function (owner) { return _this.router.navigate(['/beneficialOwners']); }, function (error) { return _this.errors = error.error.response; });
    };
    BeneficialOwnerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficial-owner-create',
            template: __webpack_require__(/*! ./beneficial-owner-create.component.html */ "./src/app/beneficial-owner-create/beneficial-owner-create.component.html"),
            styles: [__webpack_require__(/*! ./beneficial-owner-create.component.css */ "./src/app/beneficial-owner-create/beneficial-owner-create.component.css")]
        }),
        __metadata("design:paramtypes", [_beneficial_owner_service__WEBPACK_IMPORTED_MODULE_2__["BeneficialOwnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BeneficialOwnerCreateComponent);
    return BeneficialOwnerCreateComponent;
}());



/***/ }),

/***/ "./src/app/beneficial-owner.service.ts":
/*!*********************************************!*\
  !*** ./src/app/beneficial-owner.service.ts ***!
  \*********************************************/
/*! exports provided: BeneficialOwnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficialOwnerService", function() { return BeneficialOwnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeneficialOwnerService = /** @class */ (function () {
    function BeneficialOwnerService(http) {
        this.http = http;
        this.ownersUrl = 'https://mighty-caverns-62961.herokuapp.com/beneficialOwners';
    }
    BeneficialOwnerService.prototype.getBeneficialOwners = function () {
        return this.http.get(this.ownersUrl);
    };
    BeneficialOwnerService.prototype.createBeneficialOwner = function (owner) {
        return this.http.post(this.ownersUrl, owner);
    };
    BeneficialOwnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeneficialOwnerService);
    return BeneficialOwnerService;
}());



/***/ }),

/***/ "./src/app/beneficial-owners/beneficial-owners.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/beneficial-owners/beneficial-owners.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/beneficial-owners/beneficial-owners.component.html":
/*!********************************************************************!*\
  !*** ./src/app/beneficial-owners/beneficial-owners.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Beneficial Owners</h2>\r\n\r\n<button routerLink=\"/beneficialOwnerCreate\">Create</button>\r\n\r\n<ul>\r\n  <li *ngFor=\"let owner of beneficialOwners\">\r\n    {{owner.firstName}} {{owner.lastName}}\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/beneficial-owners/beneficial-owners.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/beneficial-owners/beneficial-owners.component.ts ***!
  \******************************************************************/
/*! exports provided: BeneficialOwnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficialOwnersComponent", function() { return BeneficialOwnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beneficial-owner.service */ "./src/app/beneficial-owner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeneficialOwnersComponent = /** @class */ (function () {
    function BeneficialOwnersComponent(beneficialOwnerService) {
        this.beneficialOwnerService = beneficialOwnerService;
    }
    BeneficialOwnersComponent.prototype.ngOnInit = function () {
        this.getBeneficialOwners();
    };
    BeneficialOwnersComponent.prototype.getBeneficialOwners = function () {
        var _this = this;
        this.beneficialOwnerService.getBeneficialOwners()
            .subscribe(function (beneficialOwners) { return _this.beneficialOwners = beneficialOwners; });
    };
    BeneficialOwnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beneficial-owners',
            template: __webpack_require__(/*! ./beneficial-owners.component.html */ "./src/app/beneficial-owners/beneficial-owners.component.html"),
            styles: [__webpack_require__(/*! ./beneficial-owners.component.css */ "./src/app/beneficial-owners/beneficial-owners.component.css")]
        }),
        __metadata("design:paramtypes", [_beneficial_owner_service__WEBPACK_IMPORTED_MODULE_1__["BeneficialOwnerService"]])
    ], BeneficialOwnersComponent);
    return BeneficialOwnersComponent;
}());



/***/ }),

/***/ "./src/app/companies/companies.component.css":
/*!***************************************************!*\
  !*** ./src/app/companies/companies.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/companies/companies.component.html":
/*!****************************************************!*\
  !*** ./src/app/companies/companies.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Companies</h2>\r\n\r\n<button routerLink=\"/companyCreate\">Create</button>\r\n\r\n<ul>\r\n  <li *ngFor=\"let company of companies\">\r\n    <a routerLink=\"/companies/{{company.id}}\">{{company.name}}</a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/companies/companies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/companies/companies.component.ts ***!
  \**************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(companyService) {
        this.companyService = companyService;
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; });
    };
    CompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__(/*! ./companies.component.html */ "./src/app/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.css */ "./src/app/companies/companies.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/company-add-owner/company-add-owner.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/company-add-owner/company-add-owner.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-add-owner/company-add-owner.component.html":
/*!********************************************************************!*\
  !*** ./src/app/company-add-owner/company-add-owner.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add Owner to {{company.name}}</h2>\r\n\r\n<label>Beneficial Owners:</label>\r\n<br>\r\n<div *ngIf='errors.beneficialOwners'><span class='validationError'>{{errors.beneficialOwners}}</span></div>\r\n<select [(ngModel)]=\"selectedOwner\">\r\n  <option></option>\r\n  <option *ngFor=\"let owner of beneficialOwners\" [ngValue]=\"owner\">{{owner.firstName}} {{owner.lastName}}</option>\r\n</select>\r\n<br>\r\n<br>\r\n<button (click)=\"addOwner();\">\r\n  Add\r\n</button>"

/***/ }),

/***/ "./src/app/company-add-owner/company-add-owner.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/company-add-owner/company-add-owner.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyAddOwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddOwnerComponent", function() { return CompanyAddOwnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var _domain_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/company */ "./src/app/domain/company.ts");
/* harmony import */ var _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../beneficial-owner.service */ "./src/app/beneficial-owner.service.ts");
/* harmony import */ var _domain_beneficialOwner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/beneficialOwner */ "./src/app/domain/beneficialOwner.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompanyAddOwnerComponent = /** @class */ (function () {
    function CompanyAddOwnerComponent(route, companyService, beneficialOwnerService, router) {
        this.route = route;
        this.companyService = companyService;
        this.beneficialOwnerService = beneficialOwnerService;
        this.router = router;
    }
    CompanyAddOwnerComponent.prototype.ngOnInit = function () {
        this.errors = {};
        this.company = new _domain_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
        this.getCompany();
        this.getBeneficialOwners();
        this.selectedOwner = new _domain_beneficialOwner__WEBPACK_IMPORTED_MODULE_5__["BeneficialOwner"]();
    };
    CompanyAddOwnerComponent.prototype.getCompany = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.companyService.getCompany(id)
            .subscribe(function (company) { return _this.company = company; });
    };
    CompanyAddOwnerComponent.prototype.getBeneficialOwners = function () {
        var _this = this;
        this.beneficialOwnerService.getBeneficialOwners()
            .subscribe(function (beneficialOwners) { return _this.beneficialOwners = beneficialOwners; });
    };
    CompanyAddOwnerComponent.prototype.addOwner = function () {
        var _this = this;
        if (!this.selectedOwner.id) {
            this.errors = { beneficialOwners: "You must select an owner" };
            return;
        }
        this.companyService.addOwnersToCompany(this.company, { "beneficialOwnerIds": [this.selectedOwner.id] })
            .subscribe(function (company) { return _this.router.navigate(['/companies/' + _this.company.id]); }, function (error) { return _this.errors = error.error.response; });
    };
    CompanyAddOwnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-add-owner',
            template: __webpack_require__(/*! ./company-add-owner.component.html */ "./src/app/company-add-owner/company-add-owner.component.html"),
            styles: [__webpack_require__(/*! ./company-add-owner.component.css */ "./src/app/company-add-owner/company-add-owner.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_4__["BeneficialOwnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CompanyAddOwnerComponent);
    return CompanyAddOwnerComponent;
}());



/***/ }),

/***/ "./src/app/company-create/company-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company-create/company-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-create/company-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/company-create/company-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create Company</h2>\r\n\r\n<div>\r\n    <label>Name:</label>\r\n    <br>\r\n    <div *ngIf='errors.name'><span class='validationError'>{{errors.name}}</span></div>\r\n    <input [(ngModel)]=\"company.name\" /><br>\r\n\r\n    <label>Address:</label>\r\n    <br>\r\n    <div *ngIf='errors.address'><span class='validationError'>{{errors.address}}</span></div>\r\n    <input [(ngModel)]=\"company.address\" /><br>\r\n    \r\n    <label>City:</label>\r\n    <br>\r\n    <div *ngIf='errors.city'><span class='validationError'>{{errors.city}}</span></div>\r\n    <input [(ngModel)]=\"company.city\" /><br>\r\n    \r\n    <label>Country:</label>\r\n    <br>\r\n    <div *ngIf='errors.country'><span class='validationError'>{{errors.country}}</span></div>\r\n    <input [(ngModel)]=\"company.country\" /><br>\r\n    \r\n    <label>Email:</label>\r\n    <br>\r\n    <div *ngIf='errors.email'><span class='validationError'>{{errors.email}}</span></div>\r\n    <input [(ngModel)]=\"company.email\" /><br>\r\n    \r\n    <label>Phone:</label>\r\n    <br>\r\n    <div *ngIf='errors.phone'><span class='validationError'>{{errors.phone}}</span></div>\r\n    <input [(ngModel)]=\"company.phone\" /><br>\r\n    \r\n    <label>Beneficial Owners:</label>\r\n    <br>\r\n    <div *ngIf='errors.beneficialOwners'><span class='validationError'>{{errors.beneficialOwners}}</span></div>\r\n    <select multiple [(ngModel)]=\"company.beneficialOwners\">\r\n      <option *ngFor=\"let owner of beneficialOwners\" [ngValue]=\"owner\">{{owner.firstName}} {{owner.lastName}}</option>\r\n    </select>\r\n    <br>\r\n\r\n    <br>\r\n    \r\n    <button (click)=\"createCompany();\">\r\n      Create\r\n    </button>\r\n  </div>"

/***/ }),

/***/ "./src/app/company-create/company-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company-create/company-create.component.ts ***!
  \************************************************************/
/*! exports provided: CompanyCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCreateComponent", function() { return CompanyCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/company */ "./src/app/domain/company.ts");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../beneficial-owner.service */ "./src/app/beneficial-owner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyCreateComponent = /** @class */ (function () {
    function CompanyCreateComponent(companyService, beneficialOwnerService, router) {
        this.companyService = companyService;
        this.beneficialOwnerService = beneficialOwnerService;
        this.router = router;
    }
    CompanyCreateComponent.prototype.ngOnInit = function () {
        this.errors = {};
        this.company = new _domain_company__WEBPACK_IMPORTED_MODULE_1__["Company"]();
        this.getBeneficialOwners();
    };
    CompanyCreateComponent.prototype.getBeneficialOwners = function () {
        var _this = this;
        this.beneficialOwnerService.getBeneficialOwners()
            .subscribe(function (owners) { return _this.beneficialOwners = owners; });
    };
    CompanyCreateComponent.prototype.createCompany = function () {
        var _this = this;
        this.companyService.createCompany(this.company)
            .subscribe(function (company) { return _this.router.navigate(['/companies']); }, function (error) { return _this.errors = error.error.response; });
    };
    CompanyCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-create',
            template: __webpack_require__(/*! ./company-create.component.html */ "./src/app/company-create/company-create.component.html"),
            styles: [__webpack_require__(/*! ./company-create.component.css */ "./src/app/company-create/company-create.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_3__["BeneficialOwnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CompanyCreateComponent);
    return CompanyCreateComponent;
}());



/***/ }),

/***/ "./src/app/company-update/company-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company-update/company-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-update/company-update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/company-update/company-update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Update Company [{{company.name}}]</h2>\r\n\r\n<div>\r\n  <label>Name:</label>\r\n  <br>\r\n  <div *ngIf='errors.name'><span class='validationError'>{{errors.name}}</span></div>\r\n  <input [(ngModel)]=\"company.name\" /><br>\r\n\r\n  <label>Address:</label>\r\n  <br>\r\n  <div *ngIf='errors.address'><span class='validationError'>{{errors.address}}</span></div>\r\n  <input [(ngModel)]=\"company.address\" /><br>\r\n  \r\n  <label>City:</label>\r\n  <br>\r\n  <div *ngIf='errors.city'><span class='validationError'>{{errors.city}}</span></div>\r\n  <input [(ngModel)]=\"company.city\" /><br>\r\n  \r\n  <label>Country:</label>\r\n  <br>\r\n  <div *ngIf='errors.country'><span class='validationError'>{{errors.country}}</span></div>\r\n  <input [(ngModel)]=\"company.country\" /><br>\r\n  \r\n  <label>Email:</label>\r\n  <br>\r\n  <div *ngIf='errors.email'><span class='validationError'>{{errors.email}}</span></div>\r\n  <input [(ngModel)]=\"company.email\" /><br>\r\n  \r\n  <label>Phone:</label>\r\n  <br>\r\n  <div *ngIf='errors.phone'><span class='validationError'>{{errors.phone}}</span></div>\r\n  <input [(ngModel)]=\"company.phone\" /><br>\r\n  \r\n  <label>Beneficial Owners:</label>\r\n  <br>\r\n  <div *ngIf='errors.beneficialOwners'><span class='validationError'>{{errors.beneficialOwners}}</span></div>\r\n  <select multiple [(ngModel)]=\"company.beneficialOwners\" [compareWith]=\"compareOwners\">\r\n    <option *ngFor=\"let owner of beneficialOwners\" [ngValue]=\"owner\">{{owner.firstName}} {{owner.lastName}}</option>\r\n  </select>\r\n  <br>\r\n\r\n  <br>\r\n  \r\n  <button (click)=\"updateCompany();\">\r\n    Update\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./src/app/company-update/company-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company-update/company-update.component.ts ***!
  \************************************************************/
/*! exports provided: CompanyUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyUpdateComponent", function() { return CompanyUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../beneficial-owner.service */ "./src/app/beneficial-owner.service.ts");
/* harmony import */ var _domain_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/company */ "./src/app/domain/company.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyUpdateComponent = /** @class */ (function () {
    function CompanyUpdateComponent(route, companyService, beneficialOwnerService, router) {
        this.route = route;
        this.companyService = companyService;
        this.beneficialOwnerService = beneficialOwnerService;
        this.router = router;
    }
    CompanyUpdateComponent.prototype.ngOnInit = function () {
        this.errors = {};
        this.company = new _domain_company__WEBPACK_IMPORTED_MODULE_4__["Company"]();
        this.getCompany();
        this.getBeneficialOwners();
    };
    CompanyUpdateComponent.prototype.getCompany = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.companyService.getCompany(id)
            .subscribe(function (company) { return _this.company = company; });
    };
    CompanyUpdateComponent.prototype.getBeneficialOwners = function () {
        var _this = this;
        this.beneficialOwnerService.getBeneficialOwners()
            .subscribe(function (owners) { return _this.beneficialOwners = owners; });
    };
    CompanyUpdateComponent.prototype.updateCompany = function () {
        var _this = this;
        this.companyService.updateCompany(this.company)
            .subscribe(function (company) { return _this.router.navigate(['/companies/' + _this.company.id]); }, function (error) { return _this.errors = error.error.response; });
    };
    CompanyUpdateComponent.prototype.compareOwners = function (o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    };
    CompanyUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-update',
            template: __webpack_require__(/*! ./company-update.component.html */ "./src/app/company-update/company-update.component.html"),
            styles: [__webpack_require__(/*! ./company-update.component.css */ "./src/app/company-update/company-update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _beneficial_owner_service__WEBPACK_IMPORTED_MODULE_3__["BeneficialOwnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CompanyUpdateComponent);
    return CompanyUpdateComponent;
}());



/***/ }),

/***/ "./src/app/company.service.ts":
/*!************************************!*\
  !*** ./src/app/company.service.ts ***!
  \************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.companiesUrl = 'https://mighty-caverns-62961.herokuapp.com/companies';
    }
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.companiesUrl);
    };
    CompanyService.prototype.getCompany = function (id) {
        var url = this.companiesUrl + "/" + id;
        return this.http.get(url);
    };
    CompanyService.prototype.createCompany = function (company) {
        return this.http.post(this.companiesUrl, company);
    };
    CompanyService.prototype.updateCompany = function (company) {
        return this.http.put(this.companiesUrl + "/" + company.id, company);
    };
    CompanyService.prototype.addOwnersToCompany = function (company, owners) {
        return this.http.post(this.companiesUrl + "/" + company.id + "/beneficialOwners", owners);
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{company.name}}</h2>\r\n\r\n<button routerLink=\"/companyUpdate/{{company.id}}\">Update</button> | \r\n<button routerLink=\"/companyAddOwner/{{company.id}}\">Add Owner</button>\r\n\r\n<p></p>\r\n\r\n<table>\r\n  <tbody>\r\n    <tr><td>id:</td><td>{{company.id}}</td></tr>\r\n    <tr><td>name:</td><td>{{company.name}}</td></tr>\r\n    <tr><td>address:</td><td>{{company.address}}</td></tr>\r\n    <tr><td>city:</td><td>{{company.city}}</td></tr>\r\n    <tr><td>country:</td><td>{{company.country}}</td></tr>\r\n    <tr><td>email:</td><td>{{company.email}}</td></tr>\r\n    <tr><td>phone:</td><td>{{company.phone}}</td></tr>\r\n    <tr>\r\n      <td>beneficial owners:</td>\r\n      <td>\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <td *ngFor=\"let owner of company.beneficialOwners\">\r\n                  {{owner.firstName}} {{owner.lastName}} |\r\n                </td>\r\n              </tr>\r\n            </thead>\r\n          </table>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(route, companyService, location) {
        this.route = route;
        this.companyService = companyService;
        this.location = location;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.company = { id: undefined, name: undefined, address: undefined, city: undefined, country: undefined, email: undefined, phone: undefined, beneficialOwners: undefined };
        this.getCompany();
    };
    CompanyComponent.prototype.getCompany = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.companyService.getCompany(id)
            .subscribe(function (company) { return _this.company = company; });
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Welcome to the Companies Service!\r\n</p>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/domain/beneficialOwner.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/beneficialOwner.ts ***!
  \*******************************************/
/*! exports provided: BeneficialOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficialOwner", function() { return BeneficialOwner; });
var BeneficialOwner = /** @class */ (function () {
    function BeneficialOwner() {
    }
    return BeneficialOwner;
}());



/***/ }),

/***/ "./src/app/domain/company.ts":
/*!***********************************!*\
  !*** ./src/app/domain/company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\git\CompanyServiceFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map