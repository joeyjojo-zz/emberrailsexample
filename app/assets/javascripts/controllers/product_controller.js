App.ProductController = Em.ObjectController.extend({
  isEditing: false,
  needs: ['productEdit'],

  startEditing: function() {
    var productEditController = this.get('controllers.productEdit');
    productEditController.set('content', this.get('content'));
    productEditController.startEditing();
    this.set('isEditing', true);
  },

  stopEditing: function() {
    var productEditController = this.get('controllers.productEdit');
    productEditController.stopEditing();
    this.set('isEditing', false);
  },

  destroyRecord: function() {
    if (window.confirm("Are you sure you want to delete this product?")) {
      this.get('content').deleteRecord();
      this.get('store').commit();

      // return to the main contacts listing page
      this.get('target.router').transitionTo('products.index');
    }
  }
});
