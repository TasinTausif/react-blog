import conf from "../conf/conf.js"
import client from "../lib/appwriteClient.js"
import { Databases, Query } from "appwrite"

export class PostService {
    databases;

    constructor() {
        this.databases = new Databases(client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
                { title, content, featuredImage, status, userId }
            )
        } catch (err) {
            throw err
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
                { title, content, featuredImage, status }
            )
        } catch (err) {
            console.log("Appwrite service :: updatePost :: error", err);
            throw err
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
            );
            return true;
        } catch (err) {
            console.log("Appwrite service :: deletePost :: error", err);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
            );
        } catch (err) {
            throw err
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                queries,
            );
        } catch (err) {
            throw err
        }
    }
}

const postService = new PostService()
export default postService