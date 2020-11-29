/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_customer_ctrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/customer-ctrl.js */ \"./js/customer-ctrl.js\");\n\n\n\n//# sourceURL=webpack://font-end-skills-test-1/./index.js?");

/***/ }),

/***/ "./js/customer-ctrl.js":
/*!*****************************!*\
  !*** ./js/customer-ctrl.js ***!
  \*****************************/
/*! namespace exports */
/*! export customers [provided] [no usage info] [missing usage info prevents renaming] */
/*! export txtAddress [provided] [no usage info] [missing usage info prevents renaming] */
/*! export txtId [provided] [no usage info] [missing usage info prevents renaming] */
/*! export txtName [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"txtId\": () => /* binding */ txtId,\n/* harmony export */   \"txtName\": () => /* binding */ txtName,\n/* harmony export */   \"txtAddress\": () => /* binding */ txtAddress,\n/* harmony export */   \"customers\": () => /* binding */ customers\n/* harmony export */ });\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.js */ \"./js/validation.js\");\n/*\n *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE\n *                     Version 2, December 2004\n *\n *  Copyright (C) 2020 IJSE. All Rights Reserved.\n *\n *  Everyone is permitted to copy and distribute verbatim or modified\n *  copies of this license document, and changing it is allowed as long\n *  as the name is changed.\n *\n *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE\n *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION\n *\n *   0. You just DO WHAT THE FUCK YOU WANT TO.\n */\n\n/**\n * @author : Ranjith Suranga <suranga@ijse.lk>\n * @since : 11/15/20\n **/\n\n \n\n/*===============================================================================\n * Global Variables\n *===============================================================================*/\n\nvar txtId;\nvar txtName;\nvar txtAddress;\nvar tblCustomers;\nvar customers = [];\nvar selectedCustomer = null;\nvar selectedRow = null;\nvar pageSize = -1;\nvar pageCount = 1;\nvar startPageIndex = 0;\nvar endPageIndex = -1;\nvar MAX_PAGES = 3;\n\n/*===============================================================================\n * Init\n *===============================================================================*/\n\ninit();\n\nfunction init() {\n    txtId = document.getElementById('txt-id');\n    txtName = document.getElementById('txt-name');\n    txtAddress = document.getElementById('txt-address');\n    tblCustomers = document.getElementById('tbl-customers');\n\n    txtId.focus();\n}\n\n/*===============================================================================\n * Event Handlers and Timers\n *===============================================================================*/\n\ndocument.getElementById('btn-save').addEventListener('click', handleSave);\ndocument.addEventListener('click', handleClickEventDelegation);\ntxtId.addEventListener('input', handleInput)\ntxtName.addEventListener('input', handleInput)\ntxtAddress.addEventListener('input', handleInput)\n\n/*===============================================================================\n * Functions\n *===============================================================================*/\n\nfunction handleClickEventDelegation(event) {\n    if (event.target) {\n        var activePage;\n        if (event.target.matches('#btn-backward *')) {\n            activePage = startPageIndex;\n            endPageIndex = startPageIndex - 1;\n            startPageIndex = endPageIndex - (MAX_PAGES - 1);\n            if (startPageIndex < 0) {\n                activePage = 1;\n                startPageIndex = 0;\n                endPageIndex = startPageIndex + (MAX_PAGES - 1);\n            }\n            initPagination();\n            renderPage(activePage);\n        } else if (event.target.matches(\"#btn-forward *\")) {\n            startPageIndex = startPageIndex + MAX_PAGES;\n            activePage = startPageIndex + 1;\n            endPageIndex = startPageIndex + (MAX_PAGES - 1);\n            if (startPageIndex > pageCount) {\n                endPageIndex = -1;\n                activePage = pageCount;\n            }\n            initPagination();\n            renderPage(activePage);\n        } else if (event.target.matches(\"li.page-item *\")) {\n            renderPage(+event.target.innerText);\n        }\n    }\n}\n\nfunction handleSave(event) {\n    if (!(0,_validation_js__WEBPACK_IMPORTED_MODULE_0__.validate)()) {\n        return;\n    }\n\n    /*\n     * What are Truthy in JavaScript?\n     * https://developer.mozilla.org/en-US/docs/Glossary/Truthy\n     *\n     * What are Falsy in JavaScript?\n     * https://developer.mozilla.org/en-US/docs/Glossary/Falsy\n     */\n\n    /* Let's check whether we want to save or update */\n    if (!selectedCustomer) {\n\n        /* There is no selected customer which means we need to save */\n        customers.push({\n            id: txtId.value,\n            name: txtName.value,\n            address: txtAddress.value\n        });\n\n        /* Let's initialize pagination */\n        initPagination();\n        renderPage(Math.ceil(customers.length / pageSize));\n        showOrHideTFoot();\n\n        /* Let's ready for next entry */\n        txtId.value = '';\n        txtName.value = '';\n        txtAddress.value = '';\n        txtId.focus();\n\n    } else {\n\n        /* There is a selected customer which means we need to update */\n        selectedCustomer.name = txtName.value;\n        selectedCustomer.address = txtAddress.value;\n        selectedRow.cells[1].innerText = txtName.value;\n        selectedRow.cells[2].innerText = txtAddress.value;\n    }\n\n}\n\nfunction initPagination() {\n\n    var paginationElm = document.querySelector(\"#pagination\");\n\n    /* Let's calculate the page size */\n    pageSize = -1;\n    clearTable();\n    if (customers.length > 0) {\n\n        /* First we need to check whether bootstrap has activated mobile styling  */\n        if ((innerWidth < 992) && pageSize === -1) {\n            pageSize = 6;\n        } else {\n\n            /* Let's add a temp row to the table so we can find out the row size */\n            addCustomersToTable(0, 1);\n\n            /* Let's get necessary coordinates and dimensions */\n            var topPos = tblCustomers.tBodies[0].rows[0].getBoundingClientRect().top;\n            var rowHeight = tblCustomers.tBodies[0].rows[0].clientHeight;\n            var paginationHeight = paginationElm.clientHeight;\n            var margin = 40;\n            var i = 1;\n\n            /* Let's find out the page size */\n            do {\n                var totalHeight = topPos + (rowHeight * i) + paginationHeight + margin;\n                i++;\n            } while (totalHeight < document.querySelector(\"footer\").getBoundingClientRect().top);\n\n            /* Since this do while loop, you gonna need to subtract two at the end */\n            pageSize = i - 2;\n\n            /* Let's remove the temp row that we added previously */\n            clearTable();\n        }\n    }\n\n    /* Let's calculate the page count */\n    if (pageSize === -1) {\n        pageCount = 1;\n    } else {\n        pageCount = Math.ceil(customers.length / pageSize);\n    }\n\n    /* Let's determine whether we display the pagination or not */\n    if (pageCount > 1) {\n        paginationElm.classList.remove(\"hidden\");\n    } else {\n        paginationElm.classList.add('hidden');\n    }\n\n    if (endPageIndex === -1) {\n        endPageIndex = pageCount;\n        startPageIndex = endPageIndex - ((endPageIndex % MAX_PAGES) == 0 ? MAX_PAGES : (endPageIndex % MAX_PAGES));\n    }\n\n    var html = '<li class=\"page-item\" id=\"btn-backward\">' +\n        '           <a class=\"page-link\" href=\"#\"><i class=\"fas fa-backward\"></i></a>' +\n        '       </li>';\n    for (var i = 0; i < pageCount; i++) {\n        if (i >= startPageIndex && i <= endPageIndex) {\n            html += '<li class=\"page-item\"><a class=\"page-link\" href=\"#\">' + (i + 1) + '</a></li>';\n        } else {\n            html += '<li class=\"page-item d-none\"><a class=\"page-link\" href=\"#\">' + (i + 1) + '</a></li>';\n        }\n    }\n    html += '<li class=\"page-item\" id=\"btn-forward\">' +\n        '          <a class=\"page-link\" href=\"#\"><i class=\"fas fa-forward\"></i></a>' +\n        '    </li>';\n    document.querySelector(\".pagination\").innerHTML = html;\n    endPageIndex = -1;\n}\n\nfunction renderPage(page) {\n\n    if (!page) {\n        return;\n    }\n\n    /* In case of invalid page, let's try to be nice */\n    if (page < 1) {\n        page = 1;\n    }\n    if (page > pageCount) {\n        page = pageCount;\n    }\n\n    /* Let's remove active status of the previous page */\n    var exActivePage = document.querySelector(\"#pagination .page-item.active\");\n    if (exActivePage !== null) {\n        exActivePage.classList.remove('active');\n    }\n\n    /* Let's set the active status to the current page\n     * The first li element of the pagination is the backward button = li:nth-child(1)\n     * Keep in mind nth-child start with 1 not with 0\n     * So if you want active the second page you need to add 1 more to the page\n     * <ul class=\"pagination\">\n     *      <li class=\"page-item\" id=\"btn-backward\"></li>   <--- li:first-child or li:nth-child(1)\n     *      <li class=\"page-item\">1</li>                    <--- li:nth-child(2)\n     *      <li class=\"page-item\">2</li>                    <--- li:nth-child(3)\n     *      <li class=\"page-item\" id=\"btn-forward\"></li>    <--- li:last-child or li:nth-child(4)\n     * </ul>\n     *  */\n\n    document.querySelector('.pagination li:nth-child(' + (page + 1) + ')').classList.add('active');\n\n    /* Let's check whether we want to disable backward button or forward button */\n    toggleBackwardForwardDisability(page);\n\n    /* Okay if the JVM here, it means we have already calculated the page size */\n    clearTable();\n\n    /* Let's take an example, if we want to render the page number 2 and the page size equals to 6\n     * Then we have to start from 6 = (2 - 1) * 6\n     * And we have to continue iterating until 12 = (2 * 12) */\n    addCustomersToTable((page - 1) * pageSize, page * pageSize);\n\n}\n\nfunction clearTable() {\n\n    /* So let's delete all the current rows in the table from bottom to up */\n    for (var i = tblCustomers.tBodies[0].rows.length - 1; i >= 0; i--) {\n        tblCustomers.tBodies[0].deleteRow(i);\n    }\n}\n\nfunction addCustomersToTable(startIndex, endIndex) {\n\n    /* If we are in the last page then there is a good chance we don't have enough customer records to\n    * full fill the whole page, so in such cases let's iterate until we hit the end of customer array */\n    if (endIndex > customers.length) {\n        endIndex = customers.length;\n    }\n\n    for (var i = startIndex; i < endIndex; i++) {\n\n        /* Let's append a new row */\n        var row = tblCustomers.tBodies.item(0).insertRow(-1);\n        row.onclick = handleSelection;\n\n        /* Let's add table data */\n        row.insertCell(0).innerText = customers[i].id;\n        row.insertCell(1).innerText = customers[i].name;\n        row.insertCell(2).innerText = customers[i].address;\n        row.insertCell(3).innerHTML = '<div class=\"trash\" onclick=\"handleDelete(event)\"></div>';\n    }\n}\n\nfunction toggleBackwardForwardDisability(page) {\n\n    /* If the page is the first most page then there is no point of having backward button */\n    if (page == 1) {\n        document.querySelector(\"#btn-backward\").classList.add(\"disabled\");\n    } else {\n        document.querySelector(\"#btn-backward\").classList.remove(\"disabled\");\n    }\n\n    /* If the page is the last most page then there is no point of having forward button */\n    if (page == pageCount) {\n        document.querySelector(\"#btn-forward\").classList.add(\"disabled\");\n    } else {\n        document.querySelector(\"#btn-forward\").classList.remove(\"disabled\");\n    }\n}\n\nfunction clearSelection() {\n    var rows = document.querySelectorAll(\"#tbl-customers tbody tr\");\n    for (var i = 0; i < rows.length; i++) {\n        rows[i].classList.remove('selected');\n    }\n    txtId.disabled = false;\n    selectedRow = null;\n    selectedCustomer = null;\n}\n\nfunction handleSelection(event) {\n    clearSelection();\n    selectedRow = event.target.parentElement;\n    selectedRow.classList.add('selected');\n    txtId.value = selectedRow.cells[0].innerText;\n    txtId.disabled = true;\n    txtName.value = selectedRow.cells[1].innerText;\n    txtAddress.value = selectedRow.cells[2].innerText;\n    selectedCustomer = customers.find(function (c) {\n        return c.id === selectedRow.cells[0].innerText;\n    });\n}\n\nfunction handleDelete(event) {\n\n    if (confirm(\"Are you sure whether you want to delete this customer?\")) {\n\n        /* Let's remove the customer from the array */\n        customers.splice(customers.findIndex(function (c) {\n            return c.id === event.target.parentElement.parentElement.cells[0].innerText;\n        }), 1);\n\n        var activePage = +document.querySelector(\".pagination .active\").innerText;\n        initPagination();\n        renderPage(activePage ? activePage : 1);\n        showOrHideTFoot();\n    }\n\n    event.stopPropagation();\n}\n\nfunction showOrHideTFoot() {\n    if (tblCustomers.tBodies.item(0).rows.length > 0) {\n        document.querySelector(\"#tbl-customers tfoot\").classList.add('d-none');\n    } else {\n        document.querySelector(\"#tbl-customers tfoot\").classList.remove('d-none');\n    }\n}\n\nfunction handleInput(event) {\n    this.classList.remove('is-invalid');\n}\n\n//# sourceURL=webpack://font-end-skills-test-1/./js/customer-ctrl.js?");

/***/ }),

/***/ "./js/validation.js":
/*!**************************!*\
  !*** ./js/validation.js ***!
  \**************************/
/*! namespace exports */
/*! export validate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validate\": () => /* binding */ validate\n/* harmony export */ });\n/* harmony import */ var _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-ctrl */ \"./js/customer-ctrl.js\");\n/*\n *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE\n *                     Version 2, December 2004\n *\n *  Copyright (C) 2020 IJSE. All Rights Reserved.\n *\n *  Everyone is permitted to copy and distribute verbatim or modified\n *  copies of this license document, and changing it is allowed as long\n *  as the name is changed.\n *\n *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE\n *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION\n *\n *   0. You just DO WHAT THE FUCK YOU WANT TO.\n */\n\n/**\n * @author : Ranjith Suranga <suranga@ijse.lk>\n * @since : 11/15/20\n **/\n\n \n/*===============================================================================\n * Functions\n *===============================================================================*/\n\nfunction validate() {\n    /* Object Literal {}, Array Literal [], RegExp Literal /expression/ */\n    /* new Object(), new Array(), new RegExp() */\n\n    var regExp = null;\n    var validated = true;\n\n    _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtId.classList.remove('is-invalid');\n    _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtName.classList.remove('is-invalid');\n    _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtAddress.classList.remove('is-invalid');\n\n    if (_customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtAddress.value.trim().length < 3) {\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtAddress.classList.add('is-invalid');\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtAddress.select();\n        validated = false;\n    }\n\n    regExp = /^[A-Za-z][A-Za-z .]{3,}$/;\n    if (!regExp.test(_customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtName.value)) {\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtName.classList.add('is-invalid');\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtName.select();\n        validated = false;\n    }\n\n    regExp = /^C\\d{3}$/;\n    if (!regExp.test(_customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtId.value)) {\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtId.classList.add('is-invalid');\n        document.getElementById('helper-txt-id').classList.remove('text-muted');\n        document.getElementById('helper-txt-id').classList.add('invalid-feedback');\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtId.select();\n        validated = false;\n    }\n\n    /* Let's find whether duplicate ids are there */\n    if (_customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.customers.findIndex(function (c) {\n        return c.id === _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtId.value\n    }) !== -1) {\n        alert(\"Duplicate Customer IDs are not allowed\");\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtId.classList.add('is-invalid');\n        document.getElementById('helper-txt-id').classList.remove('text-muted');\n        document.getElementById('helper-txt-id').classList.add('invalid-feedback');\n        _customer_ctrl__WEBPACK_IMPORTED_MODULE_0__.txtId.select();\n        validated = false;\n    }\n\n    return validated;\n}\n\n\n//# sourceURL=webpack://font-end-skills-test-1/./js/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;