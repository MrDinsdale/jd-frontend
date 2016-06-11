import Ember from 'ember';

export default Ember.Component.extend({
  navigation: Ember.inject.service(),
  backTarget: Ember.computed.alias('navigation.backTarget'),
  classNames: ['back-button', 'back-button--header'],
  classNameBindings: ['showBackButton:back-button--show:back-button--hide'],


  updateShowBackButton: Ember.on('didInsertElement', Ember.observer('backTarget', function() {
    if (this.get('backTarget')) {
      this.set('showBackButton', true);
    } else {
      this.set('showBackButton', false);
    }
  }))
});
