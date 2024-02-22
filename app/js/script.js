
const endpoint = 'http://localhost/boolean/php-todo-list-json/api/tasks';

// Attivo Vue
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        tasks: [],
        newTask: ''
    }),
    methods: {
        addNewTask() {
            const data = { task: this.newTask };
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };

            axios.post(endpoint, data, config).then(res => {
                this.tasks = res.data;
            })
        }
    },
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data;
        })
    }
});
app.mount('#root');