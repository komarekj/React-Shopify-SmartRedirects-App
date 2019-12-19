const API_URL = process.env.REACT_APP_API_URL;

/**
 * Post Request Helper
 */
const postRequest = async (path, body) => {
  const url = `${API_URL}/${path}`;
  const request = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const rawResponse = await fetch(url, request);
  const { status } = rawResponse;

  const content = await rawResponse.json();
  const { data, success } = content;

  if (status !== 200 || !success) {
    throw new Error(`${status} - ${data.msg}`);
  }

  return data;
};

const apiCall = async (path, body) => postRequest(`api/${path}`, body);

export { postRequest, apiCall };
