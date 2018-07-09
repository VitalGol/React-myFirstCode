export const select = (client) => {
  // console.log('clients - ', client.general.lastName);
  return {
    type: 'CLIENT_SELECTED',
    payload: client
 }
};
