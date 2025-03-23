
const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
];

const onlineUsers = [];

let usersOnlineNames = users
            .filter(online => online.status === 'online')
            .map(online => online.username)
            .join`, `;
        console.log(usersOnlineNames);

for(let item of onlineUsers){


    onlineUsers += item.username+ ', ';
}
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)


