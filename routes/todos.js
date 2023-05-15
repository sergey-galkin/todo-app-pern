const { Todo } = require("../db/request");

const todos = async (req, res) => {
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
}

module.exports = todos;