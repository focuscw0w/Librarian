import {Collection} from "vue-mc";

/**
 * Book collection
 */
class Books extends Collection {

    // Model that is contained in this collection.
    model() {
        return Book;
    }

    // Default attributes
    // defaults() {
    //     return {
    //         orderBy: 'name',
    //     }
    // }

    // Route configuration
    routes() {
        return {
            fetch: '/books',
        }
    }

    // Number of books to be completed.
    // get todo() {
    //     return this.sum('done');
    // }
    //
    // // Will be `true` if all books have been completed.
    // get done() {
    //     return this.todo == 0;
    // }
}

//Creating a new instances
// Create a new empty book list.
let books = new Books(); // (models, options)

// Create some new books.
// let book1 = new Book({name: 'Tests'});
// let book2 = new Book({name: 'Documentation'});
// let book3 = new Book({name: 'Publish'});
//Adding books to the list
// Add the books to the collection.
// books.add([book1, book2, book3]);

// You can add plain objects directly to the collection.
// They will automatically be converted to `Book` models.
// let book1 = books.add({name: 'Tests'});
// let book2 = books.add({name: 'Documentation'});
// let book3 = books.add({name: 'Publish'});

// You can add multiple models at the same time.
let added = books.add([
    {name: 'Tests'},
    {name: 'Documentation'},
    {name: 'Publish'},
]);