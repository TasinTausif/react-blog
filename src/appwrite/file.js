import conf from "../conf/conf.js"
import { client } from "../lib/appwrite.js"
import { ID, Storage } from "appwrite";

export class FileService {
    storage;

    constructor() {
        this.storage = new Storage(client)
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (err) {
            throw err
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (err) {
            console.log("Appwrite deleteFile error", err);
            return false;
        }
    }

    getFile(fileId){
        try {
            const result = this.storage.getFileView(
                conf.appwriteBucketId,
                fileId
            );
            return result.href ? result.href : result.toString();
        } catch (error) {
            
        }
    }

    getFilePreview(fileId) {
        try {
            const result = this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            return result.href ? result.href : result.toString();
        } catch (err) {
            console.log("Appwrite getFilePreview error", err);
            return null;
        }
    }
}

const fileService = new FileService()
export default fileService