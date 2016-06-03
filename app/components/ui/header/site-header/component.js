import Ember from 'ember';

export default Ember.Component.extend({
  page: Ember.inject.service(),
  classNames: ['site-header'],
  classNameBindings: ['page.scrolled:page-scrolled:not-scrolled'],
  playAnimation: false,
  scrolledTimeline: [],

  scrolledStateMap: {
    0: 'notScrolled',
    1: 'isScrolled'
  },

  notScrolled: function() {
    this.set('playAnimation', false);
  },

  isScrolled: function() {
    this.set('playAnimation', true);
  },

  scrolledStateChanged: (function() {
    return this[this.get('scrolledStateMap')[this.get('page.scrolled')]]();
  }).observes('page.scrolled')
});
