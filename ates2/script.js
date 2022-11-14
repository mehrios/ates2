function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    constructor(author, message){
        this.author = author;
        this.time = gettime();
        this.message = message;
    }
    toString(){
        return `${this.time} ${this.author}: ${this.message}`;
    }
}


class Messenger{
    constructor(){
        let mess=[];
        this.mess=mess;
    }
    send(author, text){
        const new_mess=new Message(author, text);
        this.mess.push(new_mess);
    }
    show_history(){
        this.mess.forEach(message => {
            console.log(message.toString());
        });
    }
}

let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.show_history()
