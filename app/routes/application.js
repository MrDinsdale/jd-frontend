import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    return 'Joe Dinsdale' + ' | ' + tokens.join();
  },

  headTags: function() {
    let description = 'I am a frontend web developer based in the Leeds area who loves HTML, Sass, Ember and React.';
    return [{
      type: 'meta',
      tagId: 'meta-description-tag',
      attrs: {
        name: 'description',
        content: description
      }
    },
    {
      type: 'meta',
      tagId: 'twitter-description-tag',
      attrs: {
        name: 'twitter:description',
        content: description
      }
    },
    {
      type: 'meta',
      tagId: 'og-description-tag',
      attrs: {
        name: 'og:description',
        content: description
      }
    },
    {
      type: 'meta',
      tagId: 'schema-description-tag',
      attrs: {
        itemprop: 'description',
        content: description
      }
    }];
  }
});
