/*

    in .js , we can invoke function 2 ways

    --> sync
    --> async


*/

// sync func invocation

// function a() {}

// function b() {
//     a(); // 
//     //..........
// }

// async func invocation

// function x() {
    
//     // event..
//     setTimeout(function () {

//      },0);

//     console.log('...');
//     return 100;
// }

// var r = x();
// //.....

//-----------------------------------------

var hotel = {
    getFood: function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () { 
                //resolve('Biryani');
                reject('Sorry');
            },5000);
         });
        return promise;
    }
};

var trainer = {
    doTeach: function () {
        console.log('tnr teaching....');
        console.log('hungry...requesting food');
        var promise=hotel.getFood(); // // async func call , block current execution-contex
        console.log('got promise...deffering actions to future with callbacks');
        promise.then(function (resp) { 
            console.log('yummy '+resp);
        }, function (error) { 
            console.log('ooops '+error);
        });
        
        console.log('continue further teaching.. end');
        
    }
};

trainer.doTeach();

