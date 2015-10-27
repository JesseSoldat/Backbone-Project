import Backbone from 'backbone'; // use backbone in our project

let animalModel = Backbone.Model.extend({  // use backbone Model constructor

  urlRoot: 'https://api.parse.com/1/classes/people',

  idAttribute: 'objectId'

});


export default animalModel;  // allows us to use this model in other files