'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Indecision App '
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var app = {
    title: 'Virotransport',
    subtitle: 'Le moyen de connaître votre trajet le plus rapide'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h4',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Direction'
        ),
        React.createElement(
            'li',
            null,
            'Point de d\xE9part'
        )
    )
);

var user = { name: 'Vincent Laforet',
    age: 40,
    location: '50 rue Rieussec, 78220 Viroflay'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
