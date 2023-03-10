import DataBaseItem from "./DataBaseItem";
import PermissionType from "./PermissionType";


const DataBase: Array<DataBaseItem> = [
  {
    email: 'master@hcode.com.br',
    password: '123456',
    permission: PermissionType.ADMIN
  },
  {
    email: 'user@hcode.com.br',
    password: 'u53rp@ss',
    permission: PermissionType.USER
  }
];

export default DataBase;