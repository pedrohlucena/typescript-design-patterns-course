import * as chalk from 'chalk';
import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";
import DataBaseItem from '../servers/DataBaseItem'

export default class CheckPermissionMiddleware extends Middleware {
        
    public check(email: string, password: string): boolean {
        
        const user: DataBaseItem = DataBase.find(item => item.email === email);

        if (!user) {
            console.log(chalk.red("E-mail não cadastrado."));
            return false;
        }

        if (user.permission === PermissionType.ADMIN) {
            console.log(chalk.blue("Seja bem-vindo administrador!"));
            return true;
        }
        
        console.log(chalk.blue("Seja bem-vindo usuário!"));

        return this.checkNext(email, password);
    }    

}