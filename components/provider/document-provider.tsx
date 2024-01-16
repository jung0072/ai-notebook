"use client";

import React, { createContext, useContext, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {
  databaseURL: "https://ai-notebook-208a3-default-rtdb.firebaseio.com/",
  projectId: "ai-notebook-208a3",
};

const DatabaseContext = createContext<{ title: any; content: any }[] | null>(
  null
);

export const DatabaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [documents, setDocuments] = React.useState<
    { title: any; content: any }[] | null
  >(null);

  useEffect(() => {
    const fectchDocument = async () => {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const documentListRef = collection(db, "documents");
      const documentSnapshot = await getDocs(documentListRef);

      const documents = documentSnapshot.docs.map((doc) => {
        const data = doc.data();
        return { title: data.title, content: data.content };
      });
      setDocuments(documents);
    };
    fectchDocument();
  }, []);

  return (
    <DatabaseContext.Provider value={documents}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  return useContext(DatabaseContext);
};
