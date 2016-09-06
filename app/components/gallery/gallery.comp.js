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
        this.items = [
            {
                name: "Template 1",
                price: "£100000",
                seller: "George"
            },
            {
                name: "Template 2",
                price: "£1000",
                seller: "Mike"
            },
            {
                name: "Template 1",
                price: "£100000",
                seller: "George"
            }];
        this.previews = [
            {
                name: "Template 1",
                price: "£100000",
                seller: "George"
            },
            {
                name: "Template 2",
                price: "£1000",
                seller: "Mike"
            },
            {
                name: "Template 1",
                price: "£100000",
                seller: "George"
            },
        ];
        this.$onInit = function() { };
        this.$onChanges = function(changesObj) { };
        this.$onDestory = function() { };
    }
})();