import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APWRITE_PROJECT_ENDPOINT,
  projectId: import.meta.env.VITE_APWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APWRITE_CHIKIGRAM_DATABASE_ID,
  storageId: import.meta.env.VITE_APWRITE_MEDIA_BUCKET,
  userCollectionId: import.meta.env.VITE_APWRITE_USERS_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APWRITE_POSTS_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
