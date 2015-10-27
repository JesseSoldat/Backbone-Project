import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment'; 

const APP_ID = 'aJPRQ7llN0TTK30rxbaJQn7feBmVlNzRap4dPf0Q';
const API_KEY = 'rQz2EidDueMXGFT74GV1MsTxKDNLQnBMflcDWBuZ';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import animalCollection from './animalCollection';
import animalTemplate from './animalTemplate';

let animals = new animalCollection();
console.log(animals);


function renderAnimal() {
  // Creating an empty dom node
  let $ul = $('<ul></ul>');
  
  // iterate each of the models
  animals.each(function(animal){
    
    // animals is an instance of animalModel

    // grab raw data from animalModel
    let data = animal.toJSON();
    console.log('data', data);
   
    
    // pass the data to our template
    let templateString = animalTemplate(data);
    console.log('templateString', templateString);

    // use templateString to create an li dom node
    let $li = $(templateString);

    // append li to the ul
    $ul.append($li);
  });

  // set ul to the body
  $('body').html($ul);
}

// call for all the data on the Parse Database and .then give it to the renderAnimal function
animals.fetch().then(renderAnimal);




