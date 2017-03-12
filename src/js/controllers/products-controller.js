app.controller('ProductsController', function($state, allInventories, $q, localStorageService) {

    this.tax = 0.0575; // 5.75 to sales tax percentage
    console.log('in');
    this.allItemsArray = [];
    this.minLength = 2;

    this.reverseSort = false;
    this.orderByField = 'totalPrice';

    this.newItem = {
      "id": '',
      "name": '',
      "price": '',
      "quantity": '',
      "color": '',
      "discount": ''
    };


    $q.when(allInventories.get('./src/js/data/inventory.json')).then((response) => {
        this.allItemsArray = response.data;
        this.allItemsArray = this.getProducts();
        console.log(this.allItemsArray);
    }).catch((error) => {
        console.log(error);
    });

    this.getPrice = function(price, discount) {
       let totalPrice = (price - discount);
       let adjustedPrice = totalPrice * this.tax;
       totalPrice += adjustedPrice;
       return totalPrice.toFixed(2);
    };

    this.getDiscount = function(discount) {
       if (discount > 0) {
           return true;
       } else {
           return false;
       }
    };

    this.addItems = function() {
        this.allItemsArray.push(this.newItem);
        this.setProducts(this.allItemsArray);
        this.allItemsArray = this.getProducts();
        console.log(this.newItem);
        $state.go('shopularHome.view');
       };



   this.setProducts = function(name, data) {
        localStorageService.set('localStorageProducts', this.allItemsArray);
       };

    this.getProducts = function() {
        return localStorageService.get('localStorageProducts') || [];
    };


});
