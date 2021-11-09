export interface User {
    _id: string
    user: string
    email: string
    role: 'admin' | 'customer'
    createdAt?: string
    updatedAt?: string
    jwtToken?: string
}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const signInUser = async (username: string, pass: string) => {
    await timeout(3000)
    return {
        _id: '1111',
        user: 'john.doe',
        email: 'john.doe@test.com',
        role: 'admin',

        jwtToken: 'ABCDEF'
    } as User
}
