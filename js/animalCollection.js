import Backbone from 'backbone';
import animalModel from './animalModel';

let animalCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/Animals',

  model: animalModel,

  parse: function(data) {
    return data.results;
  } 

});

export default animalCollection;