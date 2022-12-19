import Model from '@ember-data/model';
import DS from 'ember-data'

export default DS.Model.extend({
    userName : DS.attr('string'),
    passWord : DS.attr('string'),
    tasks : DS.hasMany('task')
});
