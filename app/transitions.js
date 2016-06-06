export default function() {
  this.transition(
    this.hasClass('outlet--main'),
    this.use('wipe')
  );
}
