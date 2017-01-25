//-----------------------------------------------------

// // Model
// var Product = Backbone.Model.extend({});

// // View
// var ProductView = Backbone.View.extend({
//     tagName: 'div',
//     events: {
//         'click':'clickHandler'
//     },
//     className:'well',
//     render: function () {
//         this.setName();
//         return this;
//     },
//     setName: function () {
//         this.$el.text(this.model.get('name'));
//     },
//     clickHandler: function () {
//         console.log("you clicked "+this.model.get('name'));
//     }
// });



// //var product = new Product({ name: 'Laptop' });
// //var productView = new ProductView({ model: product });
// //$('div#container').html(productView.render().el);


// var products = [
//     new Product({ name: 'Laptop' }),
//     new Product({ name: 'Mobile' })
// ];

// _(products).each(function (model) { 
//     $('div#container').append(new ProductView({model:model}).render().el);
// });



//-----------------------------------------------------

// a. defining Model Type

// Model

// var Vehicle = Backbone.Model.extend({
//     name: 'Nil'
// }, {
//     summary: function () {
//         console.log('Vehicle-summary');
//     }
// });

// var v1 = new Vehicle();
// var v2 = new Vehicle();

// Vehicle.summary();


//-----------------------------------------------------

// b. Instantiating Model Type


// var person = new Backbone.Model({name:'Nag'});

// var Person = Backbone.Model.extend({
//     name: 'Unknown',
//     initialize: function () {
//         console.log('person created...');
//     }
// });

// var person = new Person({
//     name: 'Ria'
// });

//-----------------------------------------------------

// c. Model Inheritence

// var Person = Backbone.Model.extend({
//     initialize: function () {
//         console.log('Person Initialize');
//     },
//     asString: function () {
//         return JSON.stringify(this.toJSON());
//     }
// });

// // var person = new Person({ name: 'Nag' });
// // console.log(person.asString());

// var Employee = Person.extend({
//     initialize: function () {
//         console.log('Employee Initialize');
//     },
//     defaults: {
//         bonus: 100
//     },
//     validate: function (attrs) {
//         if (attrs.name === 'Nag') {
//             return "Valid Employee";
//         } else {
//             return "Wrong Emp"
//         }
//     }
// });

// var emp = new Employee({
//     name: 'Nag',
//     salary: 1000
// });
// console.log(emp.asString());

// // console.log(emp instanceof Employee);
// // console.log(emp instanceof Person);

// //-----------------------------------------------------

// // attribute change

// emp.set('location', 'BLR');
// console.log(emp.get('location'));
// console.log(emp.has('location'));

// //-----------------------------------------------------

// // events


// emp.on('change', function () {
//     console.log('emp changed..');
// });


// emp.on('change:location', function () {
//     console.log('emp location changed..');
// });

// emp.set('name', 'Ria');
// emp.set('location', 'CHN');


// emp.on('some-event', function (data) {
//     console.log('some event handled....');
//     console.log(data);
// });

// emp.trigger('some-event', {
//     msg: 'hello'
// });
// emp.trigger('some-event', {
//     msg: 'hi'
// });

// //-----------------------------------------------------

// console.log(emp.cid);
// console.log(emp.isNew());

// //-----------------------------------------------------


// // default values


// console.log(emp.get('bonus'));


// //-----------------------------------------------------


// // validation


// emp.on('error', function (model, error) { 
//     console.log(error);
// });

// emp.set('name','Nag');

// emp.validate();

// // console.log(emp.isValid());

//-----------------------------------------------------

// var V = Backbone.View.extend({
//     tagName: 'div',
//     className: 'well',
//     attributes: {
//         'data-value':'hello'
//     }
// });

// var v = new V();
// $('#container').prepend(v.el);



var V = Backbone.View.extend({});
var v = new V({ el: '#myBox' });

v.$el.text('Welcome to BackboneJS');


