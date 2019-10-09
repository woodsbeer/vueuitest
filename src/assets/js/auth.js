import store from 'store';

const MANAGER = 'manager';
const TOKEN = 'token';

export default {
    get () {
        return {
            [MANAGER]: store.get(MANAGER),
            [TOKEN]: store.get(TOKEN)
        }
    },
    login ({manager, token}) {
        store.set(MANAGER, manager);
        store.set(TOKEN, token)
    },
    logout () {
        store.remove(MANAGER);
        store.remove(TOKEN)
    },
    loggedIn () {
        return !!store.get(MANAGER) && !!store.get(TOKEN)
    }
}
