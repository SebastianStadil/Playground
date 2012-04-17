/* Author: Sebastian Stadil
   All Rights Reserved (as if you would copy this...)
*/

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
    this.capitalizeLastName = function() {
        this.lastName() = this.lastName().toUpperCase()
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

$("a[rel=popover]").popover();
$('#navbar').scrollspy();
$('.dropdown-toggle').dropdown();
$('.carousel').carousel();


