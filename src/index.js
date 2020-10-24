import './styles/App.css';
import '../public/index.html';
import 'webpack-hot-middleware/client';


var arrowFunction = async (args) => {
    await console.log('Hello world from Patrik Duch', a,b);

    const {a,b} = args;
    console.log("Hello again");
}

console.log(arrowFunction({a: 1, b:2}));