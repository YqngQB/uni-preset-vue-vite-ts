import {createPinia} from 'pinia';
import {createPersistedState} from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(createPersistedState(
    {
        storage: {
            getItem(key: string): string | null {
                return uni.getStorageSync(key)
            },
            setItem(key: string, value: string) {
                uni.setStorageSync(key, value)
            }
        }
    }
));
export default pinia;
