import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tile/post-tile', 'Integration | Component | tile/post tile', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(4);

  const postStub = {
    'title': 'Test title',
    'tagline': 'Test tagline',
    'featured_image': 'test-url.png',
    'published_at': '2 days ago',
    'target': 'posts.show'
  };

  this.set('content', postStub);

  this.render(hbs`{{tile/post-tile title=content.title tagline=content.tagline featuredImage=content.featured_image publishedAt=content.published_at}}`);

  assert.equal(this.$('.post-tile__title').text(), 'Test title', 'Post tile has correct Title');
  assert.equal(this.$('.post-tile__tagline').text(), 'Test tagline', 'Post tile has correct Excerpt');
  assert.equal(this.$('.post-tile__date').text(), '2 days ago', 'Post tile has correct Date');
  assert.equal(this.$('.post-tile__wrapper').attr('style'), 'background-image: url(test-url.png);', 'Post tile has correct Featured image');
});
