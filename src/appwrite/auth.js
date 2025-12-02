// Here, we are making a service of the authentication system so that, if we need to pluck Appwrite out from the system, the system doesn't affect much
import conf from "../conf/conf.js"
import client from "../lib/appwriteClient.js"
import {Account, ID } from "appwrite";

export class AuthService{
    account;

    constructor(){
        this.account = new Account(client);
    }

    async createAccount({name, email, password}){
        try{
            const userAccount = await this.account.create(ID.unique(), name, email, password)

            if(userAccount){
                return await this.login({email, password})
            }
            return userAccount;
        }catch(error){
            throw err
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession({email, password});
        }catch(error){
            throw err
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.account.get();
            return user
        } catch (err) {
            throw err
        }

        // A safe option if any error occurs in the try catch or, user is not found inside the try block
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (err) {
            throw err
        }

        return null;
    }
}


// It is the obj of the class that holds all the methods of the class and if this class needs to use, just call the obj and use the methods
const authService = new AuthService()

export default authService