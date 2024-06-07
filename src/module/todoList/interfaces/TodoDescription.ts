export interface TodoDescription {
    description: string;
    status: STATUS
}

export enum STATUS {
    INPROGRESS = 'INPROGRESS',
    COMPLETED = 'COMPLETED'
}