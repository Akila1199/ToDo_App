import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),
    update_task_id : '',
    showAlert : false,
    isSaved : false,
    taskInValid : false,
    dateInValid : false,
    User : localStorage.getItem('current_user'),

    ResetAlert() {
        this.set('showAlert',false);
        this.set('isSaved', false);
        this.set('taskInvalid',false);
        this.set('dateInValid',false);
    },

    actions: {
        deleteTask(curr_task) {
            this.store.findRecord('task',curr_task.id).then(function(task) {
                task.destroyRecord();
            });
        },
        completedTask(curr_task) {
            this.store.findRecord('task',curr_task.id).then(function(task) {
                task.set('isCompleted',true);
                task.save();
            });
        },
        editTask(curr_task){
            document.querySelector('#editModal .task-name').value=curr_task.taskName;
            document.querySelector('#editModal .task-due-date').value=curr_task.taskDate;
            this.set('update_task_id',curr_task.id);
        },
        saveUpdatedTask() {
            const taskDetails=document.querySelector('#editModal .task-name').value;
            const taskdate = document.querySelector('#editModal .task-due-date').value;
            const curr_date = new Date(taskdate);
            const today_date = new Date();
            const date_limit = new Date();
            date_limit.setFullYear(date_limit.getFullYear()+100);
            
            this.ResetAlert();

            if(!taskDetails){
                this.set('showAlert',true);
                this.set('taskInvalid',true);
            }
            else if(curr_date <= today_date || curr_date > date_limit || curr_date == "Invalid Date") {
                this.set('showAlert',true);
                this.set('dateInValid',true);
            }
            else{
                this.store.findRecord('task',this.update_task_id).then(function(task) {
                    task.set('taskName',taskDetails);
                    task.set('taskDate',taskdate);
                    task.save();
                });
                this.set('showAlert',true);
                this.set('isSaved',true);
            }
        },
         closeAlert() {
            this.ResetAlert();
        }
    }
});
