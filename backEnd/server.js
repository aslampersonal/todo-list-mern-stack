const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let todos = [
    {
        id: 1,
        text: "aaaa"
    },
    {
        id: 2,
        text: "bbbb"
    }
];

app.get('/api/todos', (req, res) => {
    console.log(todos);
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    console.log(req.body);
    const { text } = req.body;
    const newTodo = {id: todos.length+1, text};
    todos.push(newTodo);
    res.json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.json({ message: 'Todo removed' });
});

app.listen(PORT, () => {
    console.log('Server is running on Port 5000');
});