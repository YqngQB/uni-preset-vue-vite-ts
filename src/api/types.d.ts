export declare type T_RequestResult<T> = {
    content: T;
    message: null | string;
    status: number;
};

export interface I_RequestOptions extends UniNamespace.RequestOptions {
    hideLoading?: boolean;
}
