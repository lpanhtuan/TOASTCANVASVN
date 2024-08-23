export const saveLocalStore = (data:any, key:string) => {
  const dataJson = JSON.stringify(data);
  localStorage.setItem(key, dataJson);
};

export const getLocalStore = (key:string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
