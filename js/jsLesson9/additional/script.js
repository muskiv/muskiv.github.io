// - Є масив :
// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
//         logo: '',
//         price: 0,
//         rating: 5,
//         avgResult: 99
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.998,
//         avgResult: 97
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'python core',
//             'python advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.812,
//         avgResult: 98
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
//         logo: '',
//         price: 0,
//         rating: 4.65,
//         avgResult: 97
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java'],
//         logo: '',
//         price: 0,
//         rating: 4.772,
//         avgResult: 100
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
//         logo: '',
//         price: 0,
//         rating: 4.53,
//         avgResult: 90
//     }
// ];


// Створити під кожен елемент коремий блок. В цьому блоці, під кожну властивість, створити окремий блок. Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)

// for (const iterator of courses) {
//                 let title = document.createElement('div');
//                 title.append(iterator.title);
        
//                 let monthDuration = document.createElement('div');
//                 monthDuration.append(iterator.monthDuration);
                
//                 let hourDuration = document.createElement('div');
//                 hourDuration.append(iterator.hourDuration);
        
//                 let modules = document.createElement('div');
//                 modules.append(iterator.modules);
    
//                 let logo = document.createElement('div');
//                 logo.append(iterator.logo);

//                 let price = document.createElement('div');
//                 price.append(iterator.price);
                
//                 let rating = document.createElement('div');
//                 rating.append(iterator.rating);
                
//                 let avgResult = document.createElement('div');
//                 avgResult.append(iterator.avgResult);
                
//                 let div = document.createElement('div');
//                 div.appendChild(title);
//                 div.appendChild(monthDuration);
//                 div.appendChild(hourDuration);
//                 let list = document.createElement('div');
//                 for (const key in iterator.modules) {
//                         let li = document.createElement('li');
//                         li.innerText = iterator.modules[key]; 
//                         list.appendChild(li)
//                         div.appendChild(list);
//                     };
//                     div.appendChild(logo);
//                     div.appendChild(price);
//                     div.appendChild(rating);
//                     div.appendChild(avgResult);
//                 document.body.appendChild(div);
//             };




// А ТЕПЕР НОВА ДОПКА...............................

// - Є масив :

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];


// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

for (const iterator of usersList) {
    let firstBlock = document.createElement('div');

    let id = document.createElement('div');
    id.append(iterator.id);

    let name = document.createElement('div');
    name.append(iterator.name);

    let username = document.createElement('div');
    username.append(iterator.username);

    let email = document.createElement('div');
    email.append(iterator.email);
    
        let address = document.createElement('div');

            let street = document.createElement('div');
            street.append(iterator.address.street);
            address.appendChild(street);

            let suite = document.createElement('div');
            suite.append(iterator.address.suite);
            address.appendChild(suite);

            let city = document.createElement('div');
            city.append(iterator.address.city);
            address.appendChild(city);

            let zipcode = document.createElement('div');
            zipcode.append(iterator.address.zipcode);
            address.appendChild(zipcode);

            let geo = document.createElement('div'); 
            address.appendChild(geo);

                let lat = document.createElement('div');
                lat.append(iterator.address.geo.lat);
                geo.appendChild(lat);

                let lng = document.createElement('div');
                lng.append(iterator.address.geo.lng);
                geo.appendChild(lng);

    let phone = document.createElement('div');
    phone.append(iterator.phone);

    let website = document.createElement('div');
    website.append(iterator.website);

    let company = document.createElement('div');

        let  companyName =  document.createElement('div');
        companyName.append(iterator.company.name);
        company.appendChild(companyName);

        let  catchPhrase =  document.createElement('div');
        catchPhrase.append(iterator.company.catchPhrase);
        company.appendChild(catchPhrase);

        let  bs =  document.createElement('div');
        bs.append(iterator.company.bs);
        company.appendChild(bs);


    firstBlock.appendChild(id);
    firstBlock.appendChild(name);
    firstBlock.appendChild(username);
    firstBlock.appendChild(email);
    firstBlock.appendChild(address);
    firstBlock.appendChild(phone);
    firstBlock.appendChild(website);
    firstBlock.appendChild(company);

document.body.appendChild(firstBlock);
};