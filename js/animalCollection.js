import Backbone from 'backbone';  // use backbone in our project
import animalModel from './animalModel'; // use the urlRoot: and idAttribute: 'objectId'

let animalCollection = Backbone.Collection.extend({ // use backbone Collection constructor
  
  url: 'https://api.parse.com/1/classes/Animals', //url has to end with the name of the app

  model: animalModel, 

  parse: function(data) {
    return data.results;
  } 

});

export default animalCollection;