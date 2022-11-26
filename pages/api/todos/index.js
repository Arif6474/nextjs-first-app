import { todos } from "../../../todos";

export default function handler(req, res) {
    res.status(200).json(todos)
  }