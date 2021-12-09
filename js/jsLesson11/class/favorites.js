let x = localStorage.getItem('favorites');
let parse = JSON.parse(x);
for (let iterator of parse) { 
    let div = document.createElement('div');
    div.append(Object.values(iterator));
    document.body.append(div);
};
