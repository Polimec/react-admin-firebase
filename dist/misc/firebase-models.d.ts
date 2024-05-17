import { FirebaseApp } from 'firebase/app';
import { Auth, User, UserCredential } from 'firebase/auth';
import { CollectionReference, DocumentData, DocumentReference, DocumentSnapshot, FieldValue, Firestore, OrderByDirection, Query, QueryDocumentSnapshot, WriteBatch } from 'firebase/firestore';
import { FirebaseStorage, StorageReference, TaskState, UploadTask, UploadTaskSnapshot } from 'firebase/storage';
export declare type FireUser = User;
export declare type FireApp = FirebaseApp;
export declare type FireStorage = FirebaseStorage;
export declare type FireStorageReference = StorageReference;
export declare type FireUploadTaskSnapshot = UploadTaskSnapshot;
export declare type FireUploadTask = UploadTask;
export declare type FireStoragePutFileResult = {
    task: FireUploadTask;
    taskResult: Promise<FireUploadTaskSnapshot>;
    downloadUrl: Promise<string>;
};
export declare type FireAuth = Auth;
export declare type FireAuthUserCredentials = UserCredential;
export declare type FireStore = Firestore;
export declare type FireStoreBatch = WriteBatch;
export declare type FireStoreTimeStamp = FieldValue;
export declare type FireStoreDocumentRef = DocumentReference;
export declare type FireStoreDocumentSnapshot = DocumentSnapshot<DocumentData>;
export declare type FireStoreCollectionRef = CollectionReference;
export declare type FireStoreQueryDocumentSnapshot = QueryDocumentSnapshot;
export declare type FireStoreQuery = Query;
export declare type FireStoreQueryOrder = OrderByDirection;
export declare const TASK_PAUSED: TaskState;
export declare const TASK_RUNNING: TaskState;
export declare const TASK_CANCELED: TaskState;
