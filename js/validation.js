/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE. All Rights Reserved.
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

 import {txtId,txtAddress,txtName,customers} from './customer-ctrl';
/*===============================================================================
 * Functions
 *===============================================================================*/

export function validate() {
    /* Object Literal {}, Array Literal [], RegExp Literal /expression/ */
    /* new Object(), new Array(), new RegExp() */

    var regExp = null;
    var validated = true;

    txtId.classList.remove('is-invalid');
    txtName.classList.remove('is-invalid');
    txtAddress.classList.remove('is-invalid');

    if (txtAddress.value.trim().length < 3) {
        txtAddress.classList.add('is-invalid');
        txtAddress.select();
        validated = false;
    }

    regExp = /^[A-Za-z][A-Za-z .]{3,}$/;
    if (!regExp.test(txtName.value)) {
        txtName.classList.add('is-invalid');
        txtName.select();
        validated = false;
    }

    regExp = /^C\d{3}$/;
    if (!regExp.test(txtId.value)) {
        txtId.classList.add('is-invalid');
        document.getElementById('helper-txt-id').classList.remove('text-muted');
        document.getElementById('helper-txt-id').classList.add('invalid-feedback');
        txtId.select();
        validated = false;
    }

    /* Let's find whether duplicate ids are there */
    if (customers.findIndex(function (c) {
        return c.id === txtId.value
    }) !== -1) {
        alert("Duplicate Customer IDs are not allowed");
        txtId.classList.add('is-invalid');
        document.getElementById('helper-txt-id').classList.remove('text-muted');
        document.getElementById('helper-txt-id').classList.add('invalid-feedback');
        txtId.select();
        validated = false;
    }

    return validated;
}
