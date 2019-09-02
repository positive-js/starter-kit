interface IUserModel {
    authMethod?: string;
    created?: string;
    deactivated?: boolean;
    email: string;
    firstName?: string;
    id?: string;
    language?: string;
    lastName?: string;
    login: string;
    passwordExpired?: boolean;
    tzName?: string;
    userRole: string;
    utcOffset?: string;
}


export class UserModel implements IUserModel {
    authMethod: string;
    created: string;
    deactivated: boolean;
    email: string;
    firstName?: string;
    id: string;
    language: string;
    lastName: string;
    login: string;
    passwordExpired: boolean;
    tzName: string;
    userRole: string;
    utcOffset: string;

    constructor(model: Partial<IUserModel>) {
        Object.assign(this, model);
    }
}
