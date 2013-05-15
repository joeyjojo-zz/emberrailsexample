App.Product  = DS.Model.extend({
  title:           DS.attr('string'),
  description:     DS.attr('string'),
  image_url:       DS.attr('string'),
  price:           DS.attr('string'),

  full_image_url: function(){
      return './assets/' + this.get('image_url');
  }.property('image_url')
});
