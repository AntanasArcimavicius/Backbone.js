import Marionette from 'backbone.marionette';
import HomeView from './components/HomeView/HomeView';

export default Marionette.Application.extend({
    region: '#app',

    onStart() {
        this.showView(new HomeView());
    },
});
