//npm i firebase-admin
import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { get } from "http";

const serviceAccount = require("./service_key.json");

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceAccount),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);
export { app as adminApp, adminDb };
