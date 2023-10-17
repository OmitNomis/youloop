export const validateYoutubeUrl = (url: string) => {
  const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  if (url.match(regex)) {
    return true;
  } else {
    return false;
  }
};
