
// ==================================================== Class User =============================================================== //
// ==================================================== Class User =============================================================== //

class User {
    public id: number
    public name: string
    public email: string
    private password: string
    private phone: string
    public age: number

    private noteBooks : NoteBook[] = []

    constructor(id: number, name: string, email: string , password: string , phone:string , age: number){
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60")
        }
        this.id = id
        this.name = name 
        this.email = email
        this.password = password
        this.phone = phone
        this.age = age
    }


    displayInfo():void{
        console.log(this.id, this.name, this.email, this.password, this.phone, this.age);
    }

    addNoteBook(notebook: NoteBook):void{
        this.noteBooks.push(notebook)
    }

    getNoteBooks(): NoteBook[] {
        return this.noteBooks
    }

}




// ==================================================== Class Admin "Inheretance" =============================================================== //


class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number){
        super(id, name, email, password, phone, age)
    }
    manageNotes():void{
        console.log(`Admin ${this.name} is managing the note system`);
        
    }
}

// let x = new Admin(1, "monika", "monika@gmail.com", "1234", "012222222", 26)
// console.log(x.manageNotes());





// ==================================================== Class Note =============================================================== //


class Note {
    public id: number
    public title: string
    public content: string

    // =========================== Association ========================================//
    public userId: User


    constructor(id: number, title: string, content: string, userId: User){
        this.id = id
        this.title = title
        this.content = content
        this.userId = userId
    }

    preview():string{
        return this.content.length > 30 ? this.content.substring(0,30) + "..." : this.content
    }
}





// ====================================== Class NoteBook "Composition" ====================================================== //

class NoteBook {
    private id: number
    public name: string

    private notes: Note[] = []

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    addNote(id: number, title: string, content: string, user: User): Note{
        let addedNote = new Note(id, title, content, user)
        this.notes.push(addedNote)
        return addedNote
    }


    removeNote(noteId: number):void{
        this.notes = this.notes.filter(note => note.id !== noteId)
    }

    getNotes():Note[]{
        return this.notes
    }
}






// ========================================= Class Storage "Generic" =========================================== //

class Storage<T>{
    constructor(public items: T[] = []){}

    addItem(item: T):T[]{
        this.items.push(item)
        return this.items
    }

    removeItem(item:T):void{
        this.items = this.items.filter(i => i !== item)
    }

    getAllItems(): T[]{
        return this.items
    }
}


// ================================================================================================================================== //





let user1 = new User(1,"monika", "monika@gmail.com", "1234", "0122222", 26)
console.log(user1.getNoteBooks());


let notebook = new NoteBook(1,"note1")
user1.addNoteBook(notebook)
console.log(notebook);

notebook.addNote(1, "be patient", "get up early", user1)
console.log(notebook,"1 note added");
// notebook.addNote(2, "be ready", "study well", user1)
// console.log(notebook);
// notebook.removeNote(2)
// console.log(notebook, "after removing");

















// let storage = new Storage()
// console.log(storage.items);
// console.log(storage.addItem(2));
// console.log(storage.addItem(3));
// console.log(storage.addItem(4));
// console.log(storage.removeItem(4));
// console.log(storage.items);
// console.log(storage.getAllItems());





