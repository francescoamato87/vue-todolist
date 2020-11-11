// TODO LIST
const app = new Vue({
  el:'#app',
  data:{
    title: 'MY TODO LIST',
    newTodo:'',
    todos: []
  },
  methods:{
    addTodo(){
      if(this.newTodo.trim() !== '' )
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo= ''; // <-- stringa vuota per cancellare l'elemento
    },
    removeTodo(todo){
        const todoIndex = this.todos.indexOf(todo); // <--  indexOf lo utilizzo per cercare uno specifico elemento nell'Array e indicarne la posizione.
        this.todos.splice(todoIndex, 1);
          // MDN Il metodo splice() modifica il contenuto di un array rimuovendo o sostituendo elementi esistenti e/o aggiungendo nuovi elementi in place.
      },
      allDone(){
        this.todos.forEach(todo =>{
          todo.done= true;
        });
    }
  }

});
