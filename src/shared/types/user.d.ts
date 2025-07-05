export interface IUser {
    id: string;
    full_name: string;
    email: string;
    password: string;
    joined_at: string;
}

export interface IRegisterBody extends Omit<IUser, 'id' | 'joined_at'> {
    confirm_password: string;
}

export type ILoginBody = Pick<IUser, 'email' | 'password'>;
