import Ember from 'ember';

export default Ember.Controller.extend({
    showAlert : false,
    isSaved : false,
    taskInValid : false,
    dateInValid : false,
    userNotLoggedIn : false,

    ResetAlert() {
        this.set('showAlert',false);
        this.set('isSaved', false);
        this.set('taskInvalid',false);
        this.set('dateInValid',false);
        this.set('userNotLoggedIn',false);
    },

    actions : {
        createNewTask() {
            const taskDetails=this.get('task-detail');
            const taskdate = this.get('task-date');
            const curr_date = new Date(taskdate);
            const today_date = new Date();
            const date_limit = new Date();
            date_limit.setFullYear(date_limit.getFullYear()+100);
           
            // console.log(date_limit,curr_date);
            this.ResetAlert();

            if(localStorage.getItem('isLoggedIn')=='false' || !localStorage.getItem('isLoggedIn')){
                this.set('showAlert',true);
                this.set('userNotLoggedIn',true);
            }
            else if(!taskDetails){
                this.set('showAlert',true);
                this.set('taskInvalid',true);
            }
            else if(curr_date <= today_date || curr_date > date_limit || curr_date == "Invalid Date") {
                this.set('showAlert',true);
                this.set('dateInValid',true);
            }
            else {
            const newTask = this.store.createRecord('task', {
                taskName : taskDetails,
                taskDate : taskdate,
                isCompleted : false,
                user : localStorage.getItem('current_user')
            });
            newTask.save();
            this.set('showAlert',true);
            this.set('isSaved',true);
            }
         },
        closeAlert() {
            this.ResetAlert();
        }
    }
});
