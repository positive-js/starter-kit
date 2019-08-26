export class UserDto {
    readonly authMethod: string;
    readonly created?: string;
    readonly deactivated: boolean;
    readonly email: string;
    readonly firstName?: string;
    readonly id?: string;
    readonly language?: string;
    readonly lastName?: string;
    readonly login: string;
    readonly passwordExpired: boolean;
    readonly tzName?: string;
    readonly userRole: string;
    readonly utcOffset?: string;
}
