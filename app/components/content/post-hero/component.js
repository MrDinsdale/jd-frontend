import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  classNames: ['post-hero'],
  assetPath: config.assetNamespace
});
