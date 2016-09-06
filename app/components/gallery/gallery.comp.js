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
                name: "Template 1"
            },
            {
                name: "Template 2"
            },
            {
                name: "Template 3"
            }
        ];
        this.$onInit = function() { };
        this.$onChanges = function(changesObj) { };
        this.$onDestory = function() { };
    }
})();