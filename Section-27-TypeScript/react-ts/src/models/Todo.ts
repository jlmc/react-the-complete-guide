class Todo {
    id: string;
    text: string;


    constructor(id: string, text: string) {
        this.id = id;
        this.text = text;
    }


}

export function todoOf(title: string): Todo {
    return new Todo('' + Math.random(), title);
}

export default Todo;
