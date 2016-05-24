import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content/post-hero', 'Integration | Component | content/post hero', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  const postStub = {
    'featured_image': 'test-url.png'
  };

  this.set('content', postStub);

  this.render(hbs`{{content/post-hero featuredImage=content.featured_image }}`);

  assert.equal(this.$('.post-hero__wrapper').attr('style'), 'background-image: url(test-url.png);', 'Post hero has correct Featured image');
});

