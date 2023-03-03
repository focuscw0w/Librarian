import {Model} from 'vue-mc'

/**
 * Task model
 */
class Creator extends Model {

    // Default attributes that define the "empty" state.
    defaults() {
        return {
            id:   null,
            slug: '',
            name: '',

        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id:   (id) => Number(id) || null,
            name: String,
            done: Boolean,
        }
    }

    // Attribute validation
    validation() {
        return {
            id:   integer.and(min(1)).or(equal(null)),
            name: string.and(required),
            done: boolean,
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/task/{id}',
            save:  '/task',
        }
    }
}