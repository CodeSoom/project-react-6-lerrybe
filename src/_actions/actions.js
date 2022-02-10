import { saveItem } from '../_services/storage';

export function login(inputUsername) {
  saveItem('name', inputUsername);
  return {
    type: 'login',
    payload: { inputUsername },
  };
}
