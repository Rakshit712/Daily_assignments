const express = require('express');


const {writeData,getData} = require('./crude.js');



const app =  express();

const port = 8000;

const users = require('./MOCK_DATA.json');

app.get('/users', (req, res) => {
    return res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const users = getData();
    console.log(users);
    const user = users.filter((user) => user.id === id);
    if (!user) {
        return res.status(404).json('Not  Found');
    } else {
        return res.json(user)
    };

})

app.post(' /users ', (req, res) => {
    const newUser = req.body;
    const users = getData();

    if (!newUser.id || !newUser.name) {
        return res.status(400).json({ error: 'Missing Data' });
    };

    users.push({
        ...newUser, id: users.length + 1
    })
    writeData(data);
    return res.json(newUser);
});

app.patch(' /users/:id', (req, res) => {
    const id = Number(req.params.id);
    const users = getData();
    const body = req.body;
    const user = users.find((user) => user.id == id);
    if (user === undefined) { return res.status(400).json("The User is not found") }
    if (body.name !== undefined) { user.name = body.name };
    if (body.email !== undefined) { user.email = body.email; }
    if (isNaN(body.age)) { return res.status(400).json(`Invalid age`) } else { user.age = body.age };
    writeData(user);
    return res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const users = getData();
    const index = users.findIndex((user) => { user.id == id });
    if (index < 0) {
        return res.status(400).json("ID Not Found");
    }
    users.splice(index, 1);
    writeData(user);
    res.json(users);

});

 


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


