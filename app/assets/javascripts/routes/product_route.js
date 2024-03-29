App.ProductRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    // reset editing state
    // note: this is necessary here because `deactivate` won't be called when transitioning
    //       from one ContactRoute directly into another
    if (controller.get('isEditing')) {
      controller.stopEditing();
    }

    // highlight this contact as active
    this.controllerFor('products').set('activeProductId', model.get('id'));
  },

  deactivate: function() {
    var controller = this.controllerFor('contact');

    // reset editing state
    if (controller.get('isEditing')) {
      controller.stopEditing();
    }

    // un-highlight the active contact (perhaps temporarily)
    this.controllerFor('products').set('activeProductId', null);
  }
});
