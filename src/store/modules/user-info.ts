import store from '@/store';
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore(
    'jlgUserInfoStore',
    () => {
        // 用户信息
        let userInfoData = ref({
            name: '刘德华'
        });

        function setUserInfoData(data: { name: string }) {
            userInfoData.value = data;
        }
        return {
            userInfoData,
            setUserInfoData
        };
    },
    {
        persist: {
            paths: ['userInfoData']
        }
    }
);

export function useUserInfoStoreHook() {
    return useUserInfoStore(store);
}
