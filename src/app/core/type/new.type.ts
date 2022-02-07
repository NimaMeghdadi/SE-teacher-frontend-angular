export declare type HttpVerb = 'GET' | 'POST' | 'DELETE' | 'PUT';
export declare type CachMode = 'none' | 'memory' | 'localstorage';
export declare type SchemaName = 'sys' | 'user' | null;

export interface Response<T> {
    data: T;
    messages: string[];
    success: boolean;
}
export declare interface Dictionary<T> {
    [Key: string]: T;
}

export interface Response<T> {
    data: T;
    messages: string[];
    Success: boolean;
}


