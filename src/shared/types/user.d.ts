export interface IUser {
    id: string;
    fullName: string;
    email: string;
    password: string;
    joinedAt: string;
}

export interface ILoginBody extends Pick<IUser, 'email' | 'password'> {}
export interface IRegisterBody extends Omit<IUser, 'id' | 'joinedAt'> {
    confirmPassword: string;
}
