import persons from '../data/users.json';

const personsList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([...persons]);
  }, 2000);
});

