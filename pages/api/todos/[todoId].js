import { todos } from "../../../todos";

export default function handler (req, res) {
  const {todoId} = req.query;
  const todo = todos.find(todo => todo.id == parseInt(todoId));
  res.status(200).json(todo);
}