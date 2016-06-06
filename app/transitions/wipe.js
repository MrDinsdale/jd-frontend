import { stop, animate, Promise } from "liquid-fire";

export default function wipe() {
  stop(this.oldElement);
  if (this.oldElement) {
    this.oldElement.css({
      'overflow': 'hidden',
      'minHeight': '100vh',
      'height': '100vh',
      // 'boxShadow': '0 0 1em rgba(0,0,0,0.25)',
      'backgroundColor': '#ffffff',
      'zIndex': 1000
    });
  }
  if (this.newElement) {
    this.newElement.css({
      opacity: 1
    });
  }
  return Promise.all([
    animate(this.oldElement, {minHeight: '0', height: '0' }, {duration: 800}),
    animate(this.newElement, {opacity: [1, 1]}, {duration: 1}),
  ]);
}