//  TODO HW
// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function wakeUp(beUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (beUp) {
                console.log('Нарешті я прокинувся');
                resolve('Наступна дія');
            } else {
                reject('вставай, час вчитись');
            }
        }, 300);
    });
};

function toilet(urination) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (urination) {
                console.log('Ого! Ти сьогодні снайпер)');
                resolve('Наступна дія');
            } else {
                reject('Мимо, тепер санітарне прибирання(((');
            }
        }, 400);
    });
};

function teeth(brushedHisTeeth) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (brushedHisTeeth) {
                console.log('Супер, я почистив зуби');
                resolve('Наступна дія');
            } else {
                reject('Жуйка не допоможе');
            }
        }, 100);
    });
};

function clothing(putOnClothes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (putOnClothes) {
                console.log('Молодець, що не в трусах кодиш)');
                resolve('Наступна дія');
            } else {
                reject('Дурачок чи шо? Голий підеш?');
            }
        }, 500);
    });
};

function water(drink) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (drink) {
                console.log('Воду випив, баланс відновлено');
                resolve('Наступна дія');
            } else {
                reject('Сушняк буде...');
            }
        }, 250);
    });
};

function eat(hungry) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hungry) {
                console.log('Яєшня в тобі, значить ти ситий)');
                resolve('Наступна дія');
            } else {
                reject('Голодний');
            }
        }, 300);
    });
};

function wentToStudy(study) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (study) {
                console.log('Буде з тебе програміст)');
                resolve('Наступна дія');
            } else {
                reject('Тобі руки поламати? БІГОМ ВЧИТИСЬ!');
            }
        }, 1000);
    });
};

function turnOnTheComputer(сomputer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (сomputer) {
                console.log('Включити ноут, підготувати всі проги)');
                resolve('Наступна дія');
            } else {
                reject('Ой, а де зярядка для ноута');
            }
        }, 100);
    });
};

function cats(spendTimeWithCats) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (spendTimeWithCats) {
                console.log('Коти люблять ласку, бавитись, їсти, все решта без тебе)');
                resolve('Наступна дія');
            } else {
                reject('Спить?');
            }
        }, 300);
    });
};

function wife(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                console.log('Жінка, майже як кіт, тільки більше участі в житті)');
                resolve('Наступна дія');
            } else {
                reject('Ой не то сказав їй');
            }
        }, 200);
    });
};

function sleep(bed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bed) {
                console.log('Молодець, гарний був день');
                resolve('Наступна дія');
            } else {
                reject('Глянути серіал');
            }
        }, 500);
    });
};

function work(workDone, callback) {
    return new Promise((resolve) => {
        let dolar = 0;
        if (workDone) {
            console.log('О ланадосікі');
            dolar += 5000;
            callback(dolar);
            resolve();
        } else {
            console.log('Кинули на бабло');
            callback(dolar);
            resolve();
        };
    });
};

function wentSkiing(cash) {
    return new Promise((resolve, reject) => {
        if (cash > 0) {
            console.log('Гори кличуть))))');
            resolve();
        } else {
            reject('Братан, не можу поїхати, бабла нема(');
        };
    });
};

async function day() {
    try {
        let q = await wakeUp(true);
        let w = await toilet(true);
        let e = await teeth(true);
        let r = await water(true);
        let t = await eat(true);
        let y = await clothing(true);
        let u = await turnOnTheComputer(true);
        let i = await wentToStudy(true);
        let o = await cats(true);
        let p = await wife(true);
        let a = await sleep(true);
        let s = await work(true, wentSkiing);
    } catch (e) {
        console.error(e);
    };
};

day();