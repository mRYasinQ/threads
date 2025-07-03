export interface IUser {
    id: string;
    fullName: string;
    email: string;
    password: string;
    joinedAt: string;
}

export type ILoginBody = Pick<IUser, 'email' | 'password'>;
export interface IRegisterBody extends Omit<IUser, 'id' | 'joinedAt'> {
    confirmPassword: string;
}
