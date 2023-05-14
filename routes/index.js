const { Todo } = require("../db/request");

const todos = [
  {name: 'John', email: 'John@mail.ru', task: 'qwertyu', completed: false, edited: false},
  {name: 'Marry', email: 'Marry@mail.ru', task: 'asdfgh', completed: false, edited: false},
  {name: 'Robert', email: 'Robert@mail.ru', task: 'zxcgvbnm', completed: false, edited: false},
  {name: 'Paul', email: 'Paul@mail.ru', task: 'poiuygth', completed: false, edited: false},
];

const validation = {
  name: (name) => name.trim().length > 0,
  task: (task) => task.trim().length > 0,
  email: (email) => {
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return validRegex.test(email);
  },
};

const validate = (todo) => {
  const result = {};
  for (const key in validation) {
    if (Object.hasOwnProperty.call(validation, key)) {
      const value = todo[key];
      result[key] = typeof value === 'string' && validation[key](value);
    }
  }
  return result;
}

module.exports = function(app) {
  app.get('/api/todos', async (req, res) => {
    let todos;
    try {
      todos = await Todo.findMany({
        take: 3,
        // orderedBy: {
        //   name: 'asc' || 'desc',
        //   email: 'asc' || 'desc',
        //   completed: 'asc' || 'desc',
        // },
        // skip: 'number',
      })
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
    res.send(todos);
  });

  app.post('/api/todo', async (req, res) => {
    const todo = req.body;
    console.log(todo);
    const checks = validate(todo);
    const status = Object.values(checks).reduce((res, v) => res ? v : res, true);
    console.log(status);
    
    if (status) {
      let savedTodo;
      try {
        savedTodo = await Todo.create({
          data: {
            ...todo,
            completed: false,
            edited: false
          }
        });
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
    }
    
    res.send({status, checks});
  });

  // app.get('/api/todos', (req, res) => {
  //   setTimeout(() => {
  //     console.log('123454321345');
  //     res.send(todos);
  //   }, 1000)
  // });

  // app.post('/api/todo', (req, res) => {
  //   setTimeout(() => {
  //     console.log(req.body);
  //     const data = validate(req.body);
  //     const status = Object.values(data).reduce((res, v) => res ? v : res, true);
  //     console.log(status);
  //     if (status) todos.push(req.body);
  //     res.send({status, data});
  //   }, 1000)
  // });
}