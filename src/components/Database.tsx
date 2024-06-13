//Código alterado. Código original em: https://github.com/rodrigolim/crud-react-native/blob/main/src/Database.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

type registerUser = {
  id: number;
  name: string;
  email: string;
  [key: string]: any;
};

async function RegisterUser(registerUser: any, id?: number): Promise<void> {
  registerUser.id = id ?? new Date().getTime();
  const registeredUser = await FindUsers(); 

  if (id) {
    const index = registeredUser.findIndex((item) => item.id === id);
    if (index !== -1) {
      registeredUser[index] = registerUser;
    }
  } else {
    registeredUser.push(registerUser);
  }

  const jsonValue = JSON.stringify(registeredUser);

  await AsyncStorage.setItem('items', jsonValue);
}

function FindUsers(): Promise<registerUser[]> {
  return AsyncStorage.getItem('items').then((response) => {
    if (response) {
      return JSON.parse(response);
    } else {
      return [];
    }
  });
}

async function FindUser(name: string): Promise<registerUser | undefined> {
  const registeredUser = await FindUsers();
  return registeredUser.find((item) => item.name === name);
}

export default { RegisterUser, FindUsers, FindUser};