(function () {

    // // Model - Type
    // var Product = Backbone.Model.extend({
    //     name: ''
    // });

    // //View - Type
    // var ProductView = Backbone.View.extend({
    //     tagName: 'div',
    //     className: 'well',
    //     events: {
    //       click:'clickHandler'  
    //     },
    //     render: function () {
    //         this.$el.text(this.model.get('name'));
    //         return this;
    //     },
    //     clickHandler: function () {
    //         console.log('you clicked '+this.model.get('name'));
    //     }
    // });

    // // var product1 = new Product({ name: 'Laptop' }); 
    // // var productView = new ProductView({ model: product1 });
    // // $('div#productsBox').append(productView.render().el);

    // var products = [
    //     new Product({
    //         name: 'Laptop'
    //     }),
    //     new Product({
    //         name: 'Mobile'
    //     })
    // ];

    // _.each(products, function (product) {
    //     var view = new ProductView({
    //         model: product
    //     });
    //     $('div#productsBox').append(view.render().el);
    // });

})();

//---------------------------------------------------------------------

// Model  ==> data

//---------------------------------------------------------------------

// 1. defining Model Types

// var Product = Backbone.Model.extend({
//     // instance properties
//     name: 'Nil'
// }, {
//     // class properties    
//     showSummary: function () {
//         console.log('Product summary...');
//     }
// });


// // var p1 = new Product();
// // var p2 = new Product();

// // Product.showSummary();


// //---------------------------------------------------------------------

// // 2. instatiating Model types

// // // way-1: ( direct instance without Type)

// // var lapProduct = new Backbone.Model({
// //     name: 'Laptop',
// //     price: 198000
// // });

// // // way-2 ( instance from Type)

// // var Product = Backbone.Model.extend({
// //     name: '',
// //     price: 0,
// //     initialize: function () {
// //         console.log('Product created....');
// //     }
// // });
// // var mobProduct = new Product({name:'Mobile',price:1000});

// //---------------------------------------------------------------------

// // 3. Model Inheritence

// var Person = Backbone.Model.extend({
//     name: '',
//     initialize: function () {
//         console.log('Person created...');  
//     },
//     toString: function () {
//         return JSON.stringify(this.toJSON());
//     }
// });

// // var p = new Person({ name: 'Nag' });
// // console.log(p.toString());


// var Employee = Person.extend({
//     salary:0
// });

// var e = new Employee({ name: 'EMP', salary: 1000 });
// console.log(e.toString());

//---------------------------------------------------------------------

// 4. Model Attributes  ( set, get)


// var Person = Backbone.Model.extend({
//     name:''
// })

// var p1 = new Person({name:'Nag'});


// // to access model Attributes  use set & get

// p1.set('name', 'Ria');
// p1.set('age', 1);

//---------------------------------------------------------------------


// 5. Model - events

// var Person = Backbone.Model.extend({
//     name: '',
//     age:0
// })

// var p1 = new Person({ name: 'Nag',age:32 });

// p1.on('change', function () { 
//     console.log('p1 model instance modified....');
// });

// // p1.set('name', 'Ria');
// // p1.set('name', 'xyz');

// p1.on('change:age', function () { 
//     console.log('p1.age property changed....');
// });

// //p1.set('name', 'Ria');
// p1.set('age', 2);


// p1.on('some-event', function (data) { 
//     console.log('some-event happaned.....');
//     console.log(data);
// });

// p1.trigger('some-event', { prop: 'a' });
// p1.trigger('some-event', { prop: 'b' });
// p1.trigger('some-event', { prop: 'c' });




//---------------------------------------------------------------------

// 6.Model - default values

// var Person = Backbone.Model.extend({
//     defaults: {
//         name: 'Nil',
//         age: 0,
//         address:'Universe'
//     }
// });

// var p = new Person({ name: 'Nag' });

//---------------------------------------------------------------------

// 7. Model Validation

// var Person = Backbone.Model.extend({
//     initialize() {
//         console.log('Person instance created...');  
//     },
//     defaults: {
//         name: 'Nil',
//         age: 0,
//         address:'Universe'
//     },
//     validate: function (attrs) {
//         console.log(attrs.age);
//         if (attrs.age > 0 && attrs.age < 120) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// });

// var p = new Person({ name: 'Ria', age: 1 });
// // console.log(p.isValid());
// // p.set('age',1000);
// // console.log(p.isValid());

// console.log(p.has('age'));



//---------------------------------------------------------------------

// Backbone : Views

//---------------------------------------------------------------------


// 1. defining View-Class with Model


// var welcomeModel = new Backbone.Model({
//     message:'Welcome'
// });

// var View = Backbone.View.extend({
//     // Properties
//     tagName: 'div',
//     className: 'well',
//     render: function () {
//         console.log('rendering....');
//         this.setContent();
//         return this;
//     },
//     attributes: {
//         attr1: '1',
//         attr2: '2'
//     },
//     setContent: function () {
//         this.$el.html(this.model.get('message'));
//     }
// });


// var v = new View({model:welcomeModel});

// // $('body').prepend(v.el);
// $('body').append(v.render().el);


//---------------------------------------------------------------------

// 2. working with existing View

// var V = Backbone.View.extend({
//     events: {
//         'click .btn-danger': 'hideHandler',
//         'click .btn-primary': 'showHandler',
//     },
//     hideHandler: function (e) {
//         console.log('hide box....');
//         this.$el.children('.jumbotron').hide();
//     },
//     showHandler: function (e) {
//         console.log('show box....');
//         this.$el.children('.jumbotron').show();
//     }
// });

// var v = new V({
//     el: '#box'
// });

// setTimeout(function () { 
//     v.$el.html('Welcome to Backbone Again');
// }, 2000);

// setTimeout(function () { 
//     v.remove()
// },5000);

//---------------------------------------------------------------------

// Template based Views

// var model = new Backbone.Model({
//     name:'Nag'
// });

// var View = Backbone.View.extend({
//     tagName: 'div',
//     className: 'well',
//     template: _.template($('#myTemplate').html()),
//     render: function () {
//         var data = { name: this.model.get('name') };
//         this.$el.html(this.template(data));
//         return this;
//     }
// });

// var view = new View({ model: model });

// $('body').append(view.render().el);


//---------------------------------------------------------------------

// sample-app

// Model

// var Product = Backbone.Model.extend({
//     defaults: {
//         name: 'Nil',
//         price: 0,
//         description:''
//     }
// });

// //View
// var ProductView = Backbone.View.extend({
//     template: _.template($('#product-template').html()),
//     render: function () {
//         this.$el.html(this.template(this.model.attributes))
//         return this;
//     }
// });

// var products = [
//     new Product({ name: 'Laptop', price: 1000, description: 'New mac model' }),
//     new Product({ name: 'Mobile', price: 5000, description: 'New mac model' })
// ];


// _.each(products, function (product) { 
//     $('#productsBox').append(new ProductView({model:product}).render().el);
// })



//---------------------------------------------------------------------


// Backbone - collections ( group of models )


var Product = Backbone.Model.extend({
    defaults: {
        name: 'Nil',
        price: 0,
        description:''
    }
});

// Collection class for Product Model
var Products =  Backbone.Collection.extend({
    model: Product,
    comparator: function (product1,product2) { 
        if (product1.get('price') > product2.get('price')) {
            return -1;
        } else {
            return 1;
        }
    }
});

var products = new Products([
    { name: 'Laptop', description: 'New Model',price:2000 },
    { name: 'Mobile', description: 'New Model', price: 1000 },
    { name: 'Other', description: 'New Model',price:5000 }
]);  // colln instance


// console.log(JSON.stringify(products));
// console.log(products.at(0).toJSON());


products.sort();


// products.add({ name: 'NewProduct' });
// console.log(JSON.stringify(products));
// products.remove(products.at(0));
// console.log(JSON.stringify(products));

// products.on('add', function () { 
//     console.log('New Product added....');
// })
// products.on('remove', function () { 
//     console.log('New Product removed....');
// })


// products.add({ name: 'NewProduct' });
// products.remove(products.at(0));