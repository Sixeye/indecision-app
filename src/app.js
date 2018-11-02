console.log('App.js is running!');

// JSX - JavaScript XML


const app ={
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

let template =(
    <div>
        <h1>{app.title}</h1>
        
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

let user = { name: 'John Doe',
age: 21,
}

function getLocation(location) {
    if (location){
        return <p>Location: {location}</p>;
    } 
}

let templateTwo= (
    <div>
    <h1>{user.name ? user.name : 'Unknown user'}</h1>
    {
        (user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
)
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
