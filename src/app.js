console.log('App.js is running!');

// JSX - JavaScript XML

var template = (
<div>
    <h1> Indecision App </h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var app ={
    title:'Virotransport',
    subtitle: 'Le moyen de connaître votre trajet le plus rapide'
}

var template =(
    <div>
        <h1>{app.title}</h1>
        <h4>{app.subtitle}</h4>
        <ol>
            <li>Direction</li>
            <li>Point de départ</li>
        </ol>
    </div>
)

var user = {name: 'Vincent Laforet',
age: 40,
location: '50 rue Rieussec, 78220 Viroflay'
}

var templateTwo= (
    <div>
    <h1>{user.name}</h1>
    <p>Age : {user.age}</p>
    <p>Location: {user.location}</p>
    </div>
)
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
