import Marionette from 'backbone.marionette';
import OtherView from '../OtherViews/OtherView';
import template from './home.html';

export default Marionette.View.extend({
    template: template,

    templateContext: function() {
        return {
            underscore: "This how it works",
        };
    },

    regions: {
        otherViewRegion: '#other-view',
    },

    onRender() {
        this.showChildView('otherViewRegion', new OtherView());
    },
});
