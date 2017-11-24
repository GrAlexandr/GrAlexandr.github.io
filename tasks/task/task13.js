'use strict';

/**
 * Чат
 * Совсем недавно Вася научился печатать на клавиатуре и выходить в интернет.
 * Он сразу же зашел в чат и решил поздороваться со всеми. Вася напечатал слово s.
 * Считается, что у Васи получилось поздороваться, если из напечатанного слова можно удалить некоторые буквы так,
 * чтобы получилось слово "hello". Например, если Вася напечатал слово "ahhellllloou", считается, что он поздоровался,
 * а если он напечатал "hlelo", считается, что Васю не поняли, и ему не удалось поздороваться.
 * По заданному слову s определите, удалось ли Васе поздороваться.
 *
 * Входные данные
 * В первой и единственной строке записано слово s, которое напечатал Вася.
 * Это слово состоит из маленьких букв латинского алфавита, его длина не меньше 1 и не больше 100 букв.
 *
 * Выходные данные
 * Если Васе удалось поздороваться, выведите "true", иначе выведите "false".
 */

var chatTest = [
    {
        parameters: ["ahhellllloou"],
        expectedResult: "true"
    },
    {
        parameters: ["hlelo"],
        expectedResult: "false"
    }
];


function chat(s) {
	var word = 'hello',
		// result = 0,
		count = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] === word[count])
			count++;
	}
	return (count === 5) + '';
}


tasks.push({
    title: "Чат",
    solution: chat,
    tests: chatTest
});