/**
 * Copyright (C) 2018, Alex Scheitlin. All rights reserved.
 *
 * This source code is licensed under the MIT license
 * found in the LICENSE file in the root directory of this project.
 */

var colors = [
    'orange-light',
    'orange-dark',
    'red',
    'purple',
    'blue-light',
    'blue',
    'blue-dark',
    'blue-green',
    'green',
];

var selectElement = document.getElementById("color");

colors.forEach(function (color) {
    var option = document.createElement("option");
    option.text = color;
    selectElement.add(option);
});

function changeTheme() {
    var body = document.getElementsByTagName("BODY")[0];

    body.className = selectElement.options[selectElement.selectedIndex].value;
}

changeTheme();