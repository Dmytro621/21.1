'use strict';

var userInput = document.getElementById('value');
var userInputButton = document.getElementById('button');
var myForm = document.querySelector('form').action;

userInputButton.addEventListener('click', function starWars(event) {
    event.preventDefault();

    var userInputText = userInput.value.trim();

    if (userInputText == '') {
        return document.getElementById('text').textContent = 'Введите текст';
    }

    document.getElementById('text').textContent = 'Загрузка...';

    fetch('' + myForm + userInputText).then(function (response) {
        if (!response.ok) {
            document.getElementById('text').textContent = 'Error';
            throw new Error('Сетевой ответ не в порядке');
        }return response.json();
    }).then(function (data) {
        if (data.status === 'success') {
            // document.getElementById('text').textContent = `Id: ${data.id}, Controller: ${data.controller}`;
            document.getElementById('text').textContent = JSON.stringify(data, null, 2);
        } else {
            document.getElementById('text').textContent = 'Error';
        }
    }).catch(function (error) {
        return console.error('Error:', error);
    });
});