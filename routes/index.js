const { Todo } = require("../db/request");

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
    // console.log(req.query);
    const { limit, skip, orderColumn, orderDirection } = req.query;
    let todos, amount;
    try {
      amount = await Todo.count();
      todos = await Todo.findMany({
        take: Number(limit),
        orderBy: {
          [orderColumn]: orderDirection,
        },
        skip: Number(skip),
      })
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
    res.send({amount, todos});
  });

  app.post('/api/todo', async (req, res) => {
    const todo = req.body;
    // console.log(todo);
    const checks = validate(todo);
    const status = Object.values(checks).reduce((res, v) => res ? v : res, true);
    // console.log(status);
    
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
}