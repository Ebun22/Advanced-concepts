console.log("before I get all Products")
function getProducts(){
    return new Promise(function (resolve, reject){

    }) 
}
console.log("After I made the promise")
const promise = getProducts()


promise.then(onSuccess, onFailure)