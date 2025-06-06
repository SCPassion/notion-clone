"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";
import type { JwtPayload } from "@clerk/types"; // or the correct Clerk package

export async function createNewDocument() {
  // if the user is not logged in, send them to the login page
  // Use auth from clerk
  auth.protect();

  const { sessionClaims } = await auth(); // Get session claims from auth
  const claims = sessionClaims as JwtPayload; // Cast sessionClaims to JwtPayload type

  const docCollectionRef = adminDb.collection("documents"); // Get collection called "documents" from firestore as reference
  const docRef = await docCollectionRef.add({
    title: "New Doc",
  });

  await adminDb
    .collection("users")
    .doc(claims?.email)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: claims.email,
      role: "owner",
      createAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}
