App.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.resource('contact', {path: ':contact_id'});
  });
  this.resource('products', function() {
      this.route('new');
      this.resource('product', {path: ':product_id'});
  });
  this.resource('store', function(){
  });
});
