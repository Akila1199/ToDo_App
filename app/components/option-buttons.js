import Component from '@ember/component';

export default Component.extend({
    Loggedinfo : '',
    current_user : '',
    init(){
        this._super(...arguments);
        this.set('Loggedin',JSON.parse(localStorage.getItem('isLoggedIn')));
        this.set('current_user',localStorage.getItem('current_user'));
    },

    actions : {
        logout() {
            localStorage.setItem('isLoggedIn',JSON.stringify(false));
            localStorage.setItem('current_user','');
            this.set('Loggedin',JSON.parse(localStorage.getItem('isLoggedIn')));
        }
    }
});
