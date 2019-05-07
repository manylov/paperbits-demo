/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


import { IUserService } from "@paperbits/common/user/IUserService";
import { IUser } from "@paperbits/common/user/IUser";

/**
 * Static user service for demo purposes.
 */
export class StaticUserService implements IUserService {
    constructor() { }

    public async signIn(username: string, password: string): Promise<any> {
        throw new Error("Method is not supported.");
    }

    public signOut(): void {
        throw new Error("Method is not supported.");
    }

    public isCurrentUserLoggedIn(): boolean {
        return true;
    }

    public async getCurrentUser(): Promise<IUser> {
        return { 
            id: "static",
            displayName: "User",
            email: "email@email.com",
            claims: [],
            photoUrl: "https://cdn.paperbits.io/images/portrait.svg" 
        };
    }
}