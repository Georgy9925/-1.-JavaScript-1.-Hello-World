const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {

let name = peopleWaiting.shift();

alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)

name = peopleWaiting.shift();

alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)

name = peopleWaiting.shift();

alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
}
giveParcel()
function leaveQueueWithoutParcel() {


    name = peopleWaiting.pop();
     alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);

     name = peopleWaiting.pop();
     alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);

     name = peopleWaiting.pop();
     alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);

     name = peopleWaiting.pop();
     alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);

}
leaveQueueWithoutParcel()









