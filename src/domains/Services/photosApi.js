import RequestHelper from "../RequestHelper";

export const usePhotos = () =>
RequestHelper("https://jsonplaceholder.typicode.com/photos");