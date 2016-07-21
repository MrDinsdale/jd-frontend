import Ember from 'ember';

export default Ember.Component.extend({
  page: Ember.inject.service(),
  navigation: Ember.inject.service(),

  pageScrolled: Ember.computed.alias('page.scrolled'),
  currentPath: Ember.computed.alias('page.currentPath'),
  navState: Ember.computed.alias('navigation.navState'),

  classNames: ['site-header'],
  classNameBindings: ['pageScrolled:page-scrolled:not-scrolled', 'navState:nav-open:nav-closed'],
  playAnimation: false,

  uiStateCheck: (function() {
    let navState = this.get('navState'),
        pageScrolled = this.get('pageScrolled'),
        currentPath = this.get('currentPath');

    if (navState === 0 && pageScrolled === 0 && currentPath === 'index') {
      this.set('playAnimation', false);
    } else {
      this.set('playAnimation', true);
    }
  }).observes('pageScrolled', 'navState', 'currentPath').on('didInsertElement'),
});
