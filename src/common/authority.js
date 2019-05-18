import localStore from 'localforage';
import { stringify } from 'query-string';

export function getAuthority() {
    return localStore.getItem('authority') || undefined;
}
export function setAuthority(authority) {
    return localStore.setItem('authority', stringify(authority));
}