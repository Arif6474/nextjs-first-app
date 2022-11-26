import { todos } from "../../../todos";

export default function handler (req, res) {
  const {todoId} = req.query;
  if (req.method === "GET") {
    const todo = todos.find(todo => todo.id == parseInt(todoId));
  res.status(200).json(todo)
  } else if (req.method === "DELETE"){
    const deleteTodo = todos.find(todo => todo.id == parseInt(todoId));
    const index = todos.findIndex(todo => todo.id == parseInt(todoId));
    todos.splice(index, 1);
  res.status(200).json(deleteTodo);
  }
}