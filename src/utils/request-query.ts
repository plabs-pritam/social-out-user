export const requestQuery = (payload: any) => {
  if (!payload) {
    throw new Error("payload cannot been null");
  }
  payload = JSON.stringify(payload);
  payload = payload.replace(/{|}|"/g, "").replace(/,/g, "&").replace(/:/g, "=");
  return `?${payload}`;
};
