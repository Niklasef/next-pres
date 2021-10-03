const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const items = [
  {
    id: 1,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet',
    color: '400'
  }, {
    id: 2,
    title: 'Consectetur',
    description: 'Consectetur adipiscing elit',
    color: '040'
  }, {
    id: 3,
    title: 'Sed do eiusmod',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    color: '004'
  }, {
    id: 4,
    title: 'Ut enim',
    description: 'Ut enim ad minim veniam',
    color: '440'
  }, {
    id: 5,
    title: 'Quis nostrud',
    description: 'Quis nostrud exercitation ullamco laboris',
    color: '404'
  }, {
    id: 6,
    title: 'Nisi ut aliquip',
    description: 'Nisi ut aliquip ex ea commodo consequat',
    color: '044'
  }, {
    id: 7,
    title: 'Duis aute',
    description: 'Duis aute irure dolor in reprehenderit in',
    color: '444'
  }, {
    id: 8,
    title: 'Voluptate velit',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    color: '000'
  }, {
    id: 9,
    title: 'Excepteur',
    description: 'Excepteur sint occaecat cupidatat non proident',
    color: 'fff'
  }, {
    id: 10,
    title: 'Sunt in',
    description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum',
    color: '440'
  },
];


app.get('/api/items', (_, res) => {
  res.send(
    items
  );
});

app.get('/api/item/:id', (req, res) => {
  res.send(items.find(i => i.id === parseInt(req.params['id'])));
});

app.get('/api/feature-items', (_, res) => {
  res.send(
    [{
      id: 4,
      title: 'Ut enim',
      description: 'Ut enim ad minim veniam',
      color: '440'
    }, {
      id: 5,
      title: 'Quis nostrud',
      description: 'Quis nostrud exercitation ullamco laboris',
      color: '404'
    }, {
      id: 6,
      title: 'Nisi ut aliquip',
      description: 'Nisi ut aliquip ex ea commodo consequat',
      color: '044'
    }]
  );
});

app.get('/api/featured-item', (_, res) => {
  res.send(
    {
      id: 5,
      title: 'Quis nostrud',
      description: 'Quis nostrud exercitation ullamco laboris',
      color: '404'
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));