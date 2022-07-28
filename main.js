class User {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
        this.books = [];
        this.pets = [];
    }

    getFullName()
    {
        return `${this.fname} ${this.lname}`
    }

    addPet(pName)
    {
        this.pets.push(pName);
    }

    countPets()
    {
        return this.pets.length;
    }

    addBook(name, author)
    {
        this.books.push({BookName: name, BookAuthor:author});
    }

    getBookName()
    {
        return this.books.map((b)=>b.name);
    }
}

const user = new User('Marcos', 'García');
user.getFullName();
user.addPet('Ruffo');
user.countPets();
user.addBook('Cantinflas', 'Mario Moreno');
user.getBookName();

console.log(user);