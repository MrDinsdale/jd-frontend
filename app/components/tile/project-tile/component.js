import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  classNames: ['project-tile'],
  assetPath: config.assetNamespace
});
