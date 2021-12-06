import { Marionette } from '../../vendor/vendor';
import template from '../templates/item.html';

export default Marionette.View.extend({
    template: template,

    templateContext() {
        return {
            underscore: 'This is underscore variable',
            ifstatement: true,
        };
    },
});
