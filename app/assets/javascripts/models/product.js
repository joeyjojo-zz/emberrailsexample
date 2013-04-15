Sampleapp.Product = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    image_url: DS.attr('string'),
    price: DS.attr('number')
});


Sampleapp.Product.FIXTURES = [
    {
        id: 1,
        title:"Sample product",
        description:"This is a test description",
        image_url:"sample.jpg",
        price:1.99
    }
];