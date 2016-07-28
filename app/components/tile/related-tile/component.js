import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  classNames: ['related-tile'],
  classNameBindings: ['typeClass'],
  assetPath: config.assetNamespace,

  typeModifier: Ember.on('didInsertElement', function() {
    this.set('typeClass', 'related-tile--' + this.get('type'));
  })
});
