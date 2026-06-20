import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import { betterAuth } from "better-auth";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("studynook");

export const auth = betterAuth({

    database: mongodbAdapter(db, {
        client
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,

            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 5 * 24 * 60 * 60
        }
    },
    plugins: [
        jwt()
    ]

});