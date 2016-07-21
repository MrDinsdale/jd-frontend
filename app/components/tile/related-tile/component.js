import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['related-tile'],
  classNameBindings: ['typeClass'],

  typeModifier: Ember.on('didInsertElement', function() {
    this.set('typeClass', 'related-tile--' + this.get('type'));
  })
});
