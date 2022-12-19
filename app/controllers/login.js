import Controller from '@ember/controller';
import user from '../models/user';

export default Controller.extend({
    current_user : '',

    actions : {
        validateUser() {
            const user_name = this.get('username');
            const pass_word = this.get('password');
            // console.log(/[a-z]/i.test(user_name));
            if(!(/[a-z]/i.test(user_name))){
                alert("Username should contain atleat one alphabet");
            }
            else if(!localStorage.getItem(user_name)){
                const user_details = {
                    userName : user_name,
                    passWord : pass_word
                }
                localStorage.setItem(user_name,JSON.stringify(user_details));
                localStorage.setItem('current_user',user_name);
                localStorage.setItem('isLoggedIn',JSON.stringify(true));
                this.transitionToRoute('home');
            }
            else {
                const user_password = JSON.parse(localStorage.getItem(user_name)).passWord;
                if(pass_word==user_password) {
                    localStorage.setItem('current_user',user_name);
                    localStorage.setItem('isLoggedIn',true);
                    this.transitionToRoute('home');
                }
                else{
                    alert("Invalid Username or Password");
                }
            }
        }
    }
                
});
