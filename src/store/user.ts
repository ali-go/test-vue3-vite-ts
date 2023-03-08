import { defineStore } from 'pinia';
export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '阿离',
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});
