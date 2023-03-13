import PermissionType from "./PermissionType";

export default interface DataBaseItem {
    email: string;
    password: string;
    permission: PermissionType;
}