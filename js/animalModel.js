import Backbone from 'backbone';

let animalModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/people',

  idAttribute: 'objectId'

});


export default animalModel;