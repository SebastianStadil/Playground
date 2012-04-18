/* Author: Sebastian Stadil
   All Rights Reserved (as if you would copy this...)
*/

// Activates Firebase
var firebase = new Firebase('http://gamma.firebase.com/sebastianstadil');
firebase.set('This is cool shit!');
firebase.child('char').set('Ulrik');

// This is the *viewmodel* - JavaScript that defines the data and behavior of the UI
function AppViewModel() {
    this.firstName = ko.observable("Herp");
    this.lastName = ko.observable("Derp");
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
    this.capitalizeLastName = function() {
        this.lastName(this.lastName().toUpperCase());
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

// Turn things on
$("a[rel=popover]").popover();
$('#navbar').scrollspy();
$('.dropdown-toggle').dropdown();
$('.carousel').carousel();


