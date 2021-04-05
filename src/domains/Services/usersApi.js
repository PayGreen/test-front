
import RequestHelper  from "../RequestHelper";

export const useUsers = () =>
RequestHelper("https://jsonplaceholder.typicode.com/users");