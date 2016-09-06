(function () {
    'use strict';

    angular
        .module('app')
        .component('gallery', {
            templateUrl: 'components/gallery/gallery.html',
            controller: GalleryController,
            controllerAs: "vm",
            bindings: {
            },
        });

    GalleryController.$inject = ["$window", "$mdToast"];
    function GalleryController($window, $mdToast) {
        this.items = [];
        this.previews = [
            {
                name: "Lands End Panorama",
                price: "$74.99",
                seller: "George Smith"
                img: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=&url=http%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F440941961349201920%2FWZKquS-P.jpeg&psig=AFQjCNFF0ihTpDQut-hJgGJIzNSzB9_7mQ&ust=1473288381708933&cad=rjt"
            },
            {
                name: "Golden Gate Sunny Shot",
                price: "$99.99",
                seller: "Michael Gump"
                img: "http://maiden-voyage-travel.com/wp-content/uploads/2013/01/Golden-Gate-Bridge-San-Fran.jpg"
            },
            {
                name: "Pier 39 Long Exposure",
                price: "$54.99",
                seller: "Frank Daniels"
                img: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=&url=http%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F440941961349201920%2FWZKquS-P.jpeg&psig=AFQjCNFF0ihTpDQut-hJgGJIzNSzB9_7mQ&ust=1473288381708933&cad=rjt"
            },
        ];

        var stripeHandler = $window.StripeCheckout.configure({
            key: "pk_test_tE36CdGxRaB0wywdMHlhzBkU",
            // billingAddress: true,
            // zipCode: true,
            allowRememberMe: false,
            token: function (token) {
                var toast = $mdToast.simple()
                    .textContent('Successfully purchased')

                $mdToast.show(toast);

                //Send http request to lambda
            }
        });

        this.purchase = function(name, price) {
            stripeHandler.open({
                name: name,
                amount: price
            });
        };


        this.$onInit = function () { };
        this.$onChanges = function (changesObj) { };
        this.$onDestory = function () { };
    }
})();
