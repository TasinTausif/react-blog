import conf from "../conf/conf.js";
import { Client } from "appwrite";

const client = new Client();

client
    .setEndpoint(conf.appwriteEndpoint)
    .setProject(conf.appwriteProjectId);

export default client;