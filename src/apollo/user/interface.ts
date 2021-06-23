import { IThread } from "../thread/interface";

export interface IUser {
    id: string,
    username: string | undefined,
    email: string,
    subscriptions: Array<IThread>,
    createdAt: Date
}