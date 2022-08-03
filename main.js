class User {
    constructor(fname, lname, books, pets){
        this.fname = fname;
        this.lname = lname;
        this.books = books;
        this.pets = pets;
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
        this.books.push({name: name, author:author});
    }

    getBookName()
    {
        console.log(this.books);
        return this.books.map((b)=>{b});
    }
}

const user = new User('Marcos', 'García', [], []);
user.getFullName();
user.addPet('Ruffo');
user.countPets();
user.addBook('Cantinflas', 'Mario Moreno');
user.getBookName();

console.log(user);