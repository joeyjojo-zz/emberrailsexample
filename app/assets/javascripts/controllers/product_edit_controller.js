App.ProductEditController = Em.ObjectController.extend({
  needs: ['product'],

  startEditing: function() {
    // add the product
    var product = this.get('content');
    var transaction = product.get('store').transaction();
    transaction.add(product);
    this.transaction = transaction;
  },

  stopEditing: function() {
    // rollback the local transaction if it hasn't already been cleared
    var transaction = this.transaction;
    if (transaction) {
      transaction.rollback();
      this.transaction = undefined;
    }
  },

  save: function() {
    this.transaction.commit();
    this.transaction = undefined;
    this.get('controllers.product').stopEditing();
  },

  cancel: function() {
    this.get('controllers.product').stopEditing();
  }
});
