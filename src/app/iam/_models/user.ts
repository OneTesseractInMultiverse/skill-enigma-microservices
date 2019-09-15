export interface User {
    identity: {
        uid: string,
        app_id: string,
        type: string
    };
    user_claims: {
        name: string,
        email: string,
        authorized_to: any[]
    };
}
