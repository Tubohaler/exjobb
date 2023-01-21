const headers = {
  Authorization: process.env.DATO_CMS_TOKEN || '',
  'X-Exclude-Invalid': 'true',
  'X-Api-Version': '3',
};

export default headers;
