// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

function isValidPassword(password, username) {
	if (password.length >= 8 && !password.includes(username) && !password.includes(' ')) {
		return true;
	} else {
		return false;
	}
}

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function avg(nums) {
    let total = 0;
    for (let index = 0; index < nums.length; index++) {
        let element = nums[index];
        total += element;
    }
    return total / nums.length;
}

function isPangram(sentence) {
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
        if (sentence.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

function getCard() {
    let num = Math.floor(Math.random() * 13) + 1;
    let value = '';
    if (num === 1) {
        value = 'A';
    }
    else if (num === 11) {
        value = 'J';
    }
    else if (num === 12) {
        value = 'Q';
    }
    else if (num === 13) {
        value = 'K';
    } 
    else {
        value = num;
    }
    const arr = ['clubs', 'spades', 'hearts', 'diamonds'];
    let index = Math.floor(Math.random() * 4);
    const card = {
        val : value,
        suit : arr[index]
    }
    return card;
}