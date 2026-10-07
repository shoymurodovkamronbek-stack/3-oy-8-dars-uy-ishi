const messages = [
    { userId: 1, text: "Salom" },
    { userId: 2, text: "Hi" },
    { userId: 1, text: "Qalaysan?" },
    { userId: 3, text: "Hello" },
    { userId: 2, text: "Good" },
    { userId: 1, text: "Yaxshi" }
];

const messageMap = new Map();

messages.forEach(message => {
    if (!messageMap.has(message.userId)) {
        messageMap.set(message.userId, []);
    }

    messageMap.get(message.userId).push(message.text);
});

console.log(messageMap);

let maxUserId = null;
let maxCount = 0;

messageMap.forEach((messages, userId) => {
    if (messages.length > maxCount) {
        maxCount = messages.length;
        maxUserId = userId;
    }
});

console.log(maxUserId);
console.log(maxCount);

const activeUsers = [];

messageMap.forEach((messages, userId) => {
    if (messages.length >= 2) {
        activeUsers.push(userId);
    }
});

console.log("Kamida 2 ta xabar yuborganlar: ", activeUsers);

const result = [...messageMap].map(([userId, messages]) => ({
    userId,
    messageCount: messages.length
}));
console.log(result);