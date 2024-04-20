export const apiparams = () => {
  return (
    '?type=' +
    process.env.APP_TYPE +
    '&app_id=' +
    process.env.APP_ID +
    '&app_key=' +
    process.env.APP_KEY
  );
};
