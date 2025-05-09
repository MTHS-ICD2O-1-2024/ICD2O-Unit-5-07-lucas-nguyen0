// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

'use strict'

function enterClicked() {
  let inputNumber = parseFloat(document.getElementById('input-number-one').value)
  let answer = 0
  for (let counter = 0; counter <= inputNumber; counter++) {
    answer = answer + counter
  } 
  document.getElementById("answer").innerHTML =
    'The answer is: ' + answer + '.'
}
