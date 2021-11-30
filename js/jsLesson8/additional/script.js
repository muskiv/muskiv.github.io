// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let array =[];
let reCall = (elem) => {
    for(let elements of elem.children){
        reCall(elements);
        if (elements.className != '') {
            var classList = elements.className.split(/\s+/);
            for (var i = 0; i < classList.length; i++) {
    	    	array.push(classList[i]);
		    };
        };
    };
};

reCall(document.body);
console.log(array)