import PocketBase from 'pocketbase';

export const pb = new PocketBase(process.env.EXPO_PUBLIC_DB_HOST);

export const currentUser = () => {
    return pb.authStore.model;
}