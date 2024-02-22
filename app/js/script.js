
const endpoint = 'http://localhost/boolean/php-todo-list-json/api/tasks';

// Attivo Vue
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        tasks: [],
        newTask: ''
    }),
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data;
        })
    }
});
app.mount('#root');