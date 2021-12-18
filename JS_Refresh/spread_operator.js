const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};

//newObject would then be...
// {
//     name: 'Max',
//     age: 28
// }