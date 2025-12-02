import conf from "../conf/conf.js"
import client from "../lib/appwriteClient.js"
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
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            );

            return true;
        } catch (err) {
            throw err
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        } catch (err) {
            throw err
        }
    }
}

export const fileService = new FileService()
export default fileService