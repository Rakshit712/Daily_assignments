const express = require('express');


const {writeData,getData} = require('./crude.js');



const app =  express();
app.use(express.json());

const port = 8000;


app.get('/users', (req, res) => {
    const users= getData();
    return res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const users = getData();
    console.log(users);
    const user = users.find((user) => user.id === id);
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
    writeData(users);
    return res.json(newUser);
});

app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const users = getData();
    const body = req.body;
    console.log(req.body);
    const index = users.findIndex((user) => user.id === id);
    const user=users[index];
    console.log(user);
    if (body.id !== undefined) { user.id = body.id; }
    if (user === undefined) { return res.status(400).json("The User is not found") }
    if (body.first_name !== undefined) { user.first_name = body.first_name };
    if (body.last_name !== undefined) { user.last_name = body.last_name };
    // if (isNaN(body.age)) { return res.status(400).json(`Invalid age`) } else { user.age = body.age };
    if (body.email !== undefined) { user.email = body.email; }
    if (body.gender !== undefined) { user.gender = body.gender; }
    users[index]=user;
    writeData(users);
    return res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const users = getData();
    const index = users.findIndex((user) =>  user.id === id );
    if (index < 0) {
        return res.status(400).json("ID Not Found");
    }
    users.splice(index, 1);
    writeData(users);
    res.json("user deleted");

});

 


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


