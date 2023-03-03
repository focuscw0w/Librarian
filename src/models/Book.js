import {Model} from 'vue-mc'
import {equal, integer, min, string} from "vue-mc/validation";
import {required} from "@vuelidate/validators";

/**
 * Task model
 */
class Book extends Model {

    // Default attributes that define the "empty" state.
    defaults() {
        return {
            id: null,
            slug: '',
            name: '',
            creatorId: 0,
            creatorName: 'null',

        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id: (id) => Number(id) || null,
            name: String,
            slug: String,
            creatorId: (id) => Number(id) || null,
            creatorName: String,
        }
    }

    // Attribute validation
    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            name: string.and(required),
            slug: string.and(required),
            creatorId: integer.and(min(1)).or(equal(null)),
            creatorName: string.and(required),
            // creator: Creator.and(required),
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/books/{slug}',
            save: '/books',
        }
    }
}