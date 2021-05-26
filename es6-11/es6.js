/**
 * Shorthand property names
 * https://developer.mozila.org/ko/docs/Web/JavaScript/Reference
 */
{
    const ellie1 = {
        name: 'Ellie',
        age: '18'
    };

    const name = 'Ellie';
    const age = '18';

    //~ES5
    const ellie2 = {
        name: name,
        age: age
    };
    //ES6~
    const ellie3 = {
        name,
        age
    };
}
/**
 * Destructuring Assignment
 * https://developer.mozila.org/ko/docs/Web/JavaScript/Reference
 */

{
    // Object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // ~ES5
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // ES6~
    {
        const { name, level } = student;
        console.log(name, level);
    
        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }


    // array
    const animals = ['강아지', '고양이'];

    // ~ES5
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // ES6~
    {
        const [first, second] = animals;
        console.log(first, second);
    }
}

/**
* Spread Syntax
* https://developer.mozila.org/ko/docs/Web/JavaScript/Reference
* 
*/
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['복숭아', '딸기'];
    const fruits2 = ['바나나', '키위'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog1: '포메라니안' };
    const dog2 = { dog2: '푸들' };
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
}

/**
 * Default parameters
 * https://developer.mozila.org/ko/docs/Web/JavaScript/Reference
 */

    // ~ES5
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello!');
        printMessage();
    }

    // ES6 ~
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }

        printMessage('hello~');
        printMessage();
    }


/**
 * Ternary Operator
 * https://developer.mozila.org/ko/docs/Web/JavaScript/Reference
 */
{
    const isCat = true;
    // ~ES5
    {
        let component;
        if (isCat) {
            component = '고양이';
        } else {
            component = "강아지";
        }
        console.log(component)
    }

    // ES6~
    {
        const component = isCat ? '고양이' : '강아지';
        console.log(component);
        console.log(isCat ? '고양이':'강아지');
    }
}

/**
 * Template Literals
 * https://developer.mozila.org/ko/docs/web/JavaScript/Reference
 * 
 */
{
    const weather = '무난';
    const temparature = '16도';

    // ~ES5
    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature
    );

    // ES6 ~
    console.log(`Today weather is ${weather} and temparature is ${temparature}`);
}

/**
 * Optional Chaning (ES11)
 * https://developer.mozila.org/ko/docs/Web/JavaScript/Reference
 */
{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    // 나쁜예1
    {
        function printManager(person) {
            console.log(
                person.job
                    ? person.job.manager
                        ? person.job.manager.name
                        : undefined
                    : undefined
                );
        }
        printManager(person1);
        printManager(person2);
    }
    // 나쁜예2
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name)
        }
        printManager(person1);
        printManager(person2);
    }

    // 좋은예
    function printManager(person){
        console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozila.org/ko/docs/Web/JavaScript/Reference
 */
{
    // Logical OR operator
    // false: false, '', 0, -0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);
    }

    // 나쁜 예
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);

        const num = 0;
        const message = num || 'undefined';
        console.log(message);
    }

    // 좋은 예
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }    
}
