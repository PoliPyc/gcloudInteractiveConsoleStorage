// ==UserScript==
// @name         Interactive console storage
// @namespace    https://github.com/poliakustyczny/gcloudInteractiveConsoleStorage
// @updateURL    https://raw.githubusercontent.com/poliakustyczny/gcloudInteractiveConsoleStorage/master/script.js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://effictory-prep.appspot.com/admin/_ah/interactive
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const STORAGE_ITEM = 'interactive_console_code';

    let getContent = () => {
        return document.getElementById("code").value
    }

    let saveContent = () => {
        localStorage.setItem(STORAGE_ITEM, getContent());
    }

    let loadContent = () => {
        return localStorage.getItem(STORAGE_ITEM);
    }

    document.getElementById("code").addEventListener("keyup", saveContent);

    document.getElementById("code").innerHTML = loadContent();
})();
