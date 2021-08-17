import Marionette from 'backbone.marionette';
import RootView from './views/RootView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new RootView());
  }
});
