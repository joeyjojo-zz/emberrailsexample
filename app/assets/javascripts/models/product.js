Sampleapp.Product = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    image_url: DS.attr('string'),
    price: DS.attr('number')
});