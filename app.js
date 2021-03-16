let input = prompt('What would you like to do?');
const todos = ['Karate', 'Skateboard', 'Fix the Maxx', 'Finish Quad'];
while (!== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**_-_-_-_-_-**-_-_-_-_-_**')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**_-_-_-_-_-**-_-_-_-_-_**')
    } else if (input === 'new') {
        const newTodo = prompt('What should I add to your list?');
        todos.push(newToDo);
        console.log(`${newTodo} Added to the List`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, What index should I Delete?'));
        if (Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log('Ok, Deleted ${deleted[0]}');
        } else {
            console.log('Unknown Index')
        }
    }

    input = prompt('What would you like to do?')

    console.log('Goodbye for now!')