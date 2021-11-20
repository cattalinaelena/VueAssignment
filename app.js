const app = Vue.create.App({
    data() {
        return {
            userInput:'',
            tasks: [],
            visibleList: true,
            buttonAction:''
        }
    },

    computed: {
        changeButtonText() {
            if (this.visibleList === true) {
                this.buttonAction = "Hide List"
            } else {
                this.buttonAction = "Show List"
            }
        }
    },


    methods: {
        addTask() {
            this.tasks.push(this.userInput);
        },
    

        toggleVisibility() {
            this.visibleList = !this.visibleList;
        }
    }

});
app.mount('#assignment')