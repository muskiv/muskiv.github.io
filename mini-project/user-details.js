let x = localStorage.getItem('favorites');
let parse = JSON.parse(x);
for (let iterator of parse) { 
    let div = document.createElement('div');
    // div.append(Object.values(iterator));
    for (const key in iterator) {
        if (Object.hasOwnProperty.call(iterator, key)) {
            const element = iterator[key];
            div.append(element)
        }
    }
        document.body.append(div);

    };