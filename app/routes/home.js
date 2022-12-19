import Route from '@ember/routing/route';

export default Route.extend({
    
    model() {
       let User = localStorage.getItem('current_user');
        return this.store.query('task', {
            filter : {
            user : User
            }
        });
    }
});
