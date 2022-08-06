export interface Status {
    success: boolean;
    message: string;
    hostname?: string;
    time?: number;
    error?: string;
}