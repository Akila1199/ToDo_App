import Model from '@ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend({
    taskName: DS.attr('string'),
    // taskDate: DS.attr('date')
    taskDate: DS.attr('string'),
    isCompleted : DS.attr('boolean'),
    user : DS.attr('string')
});
