import {Collection} from "vue-mc";

/**
 * Creator collection
 */
class Creators extends Collection {

    // Model that is contained in this collection.
    model() {
        return Creator;
    }

    // Default attributes
    defaults() {
        return {
            orderBy: 'name',
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/creators',
        }
    }

    // Number of creators to be completed.
    get todo() {
        return this.sum('done');
    }

    // Will be `true` if all creators have been completed.
    get done() {
        return this.todo == 0;
    }
}

//Creating a new instances
// Create a new empty creator list.
let creators = new Creators(); // (models, options)

// Create some new creators.
// let creator1 = new Creator({name: 'Tests'});
// let creator2 = new Creator({name: 'Documentation'});
// let creator3 = new Creator({name: 'Publish'});
//Adding creators to the list
// Add the creators to the collection.
// creators.add([creator1, creator2, creator3]);

// You can add plain objects directly to the collection.
// They will automatically be converted to `Creator` models.
// let creator1 = creators.add({name: 'Tests'});
// let creator2 = creators.add({name: 'Documentation'});
// let creator3 = creators.add({name: 'Publish'});

// You can add multiple models at the same time.
let added = creators.add([
    {name: 'Tests'},
    {name: 'Documentation'},
    {name: 'Publish'},
]);