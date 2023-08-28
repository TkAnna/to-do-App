'use strict';

const inputBox = document.getElementById('input-box');
const btn = document.getElementById('btn');
const listContainer = document.getElementById('list-container');
const inputPlaceholder = inputBox.placeholder;

function addTask() {
    if(inputBox.value === '') {
        inputBox.classList.add('warning');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        if (inputBox.classList.contains('warning')) inputBox.classList.remove('warning');
    }
    saveData();
}

inputBox.addEventListener('keypress', function(e){
    if(e.key === 'Enter') {
        e.preventDefault();
        btn.click();
    }
});

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();