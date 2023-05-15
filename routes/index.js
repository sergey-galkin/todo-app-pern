module.exports = function(app) {
  app.get('/api/identification', require("./identification"));
  app.post('/api/authentication', require("./authentication"));
  app.post('/api/logout', require("./logout"));
  app.get('/api/todos', require("./todos"));
  app.post('/api/todo', require("./todo"));
  app.post('/api/updateTodo', require("./updateTodo"));
}