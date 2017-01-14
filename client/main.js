import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

function get() {
  $.ajax('/', {
    success() { console.log('GET /: succeeded'); },
    error()   { console.log('GET /: failed'); }
  });
}

Template.bg.events({
  'click #get'() {
    get();
  },
});

function onPause() {
  console.log('entered background');
  get();
}

Meteor.startup(function () {
  document.addEventListener("pause", onPause, false);
});
