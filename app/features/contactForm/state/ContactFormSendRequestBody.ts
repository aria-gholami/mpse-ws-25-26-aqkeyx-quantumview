export interface ContactFormSendRequestBody {
    name: string;
    email: string;
    organization: string;
    topic: string;
    message: string;
    honeypot?: string;
}
