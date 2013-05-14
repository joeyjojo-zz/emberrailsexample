App.StoreRoute = Ember.Route.extend({
    model: function() {
        return App.Product.find()
    }
});
