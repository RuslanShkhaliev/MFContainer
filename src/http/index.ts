export const request = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return await response.json();
};
