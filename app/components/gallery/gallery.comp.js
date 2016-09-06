(function() {
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

    GalleryController.$inject = [];
    function GalleryController() {
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
        this.$onInit = function() { };
        this.$onChanges = function(changesObj) { };
        this.$onDestory = function() { };
    }
})();
