import $ from 'jquery';
import { countVowel } from './journal.js';
import { countConsonant } from './journal.js';
import { wordCounter } from './journal.js';
import {getTeaser} from './journal.js';
import './css/bootstrap.css';
import './css/styles.css';


$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const vowels = countVowel(passage);
    const consonant = countConsonant(passage);
    const tea = getTeaser(passage);
    
    $("#total-count").html(wordCount);
    $("#teaser").text(tea);
    $("#vowel").html(vowels);
    $("#consonant").html(consonant);
    $("#title").html(word);

    $("#button1").click(function(){
      $("#div2").show();
    });
  });
});


// import $ from 'jquery';
// import Journal from './journal.js';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// $('#journal-form').submit(function (event) {
//   event.preventDefault();
//   let title = $('#title').val();
//   let body = $('#body').val();
//   let newJournal = new Journal(title, body);
//   $('#wordCounter').text(newJournal.wordCounter());
//   $('#vowelCounter').text(newJournal.charCounter()[0]);
//   $('#consonantCounter').text(newJournal.charCounter()[1]);
// });


