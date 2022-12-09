import { initializeApp } from 'firebase/app';
import {
  connectFirestoreEmulator,
  initializeFirestore,
} from 'firebase/firestore';

export const app = initializeApp({ projectId: 'demo-noop' });

export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false,
});

connectFirestoreEmulator(db, '127.0.0.1', 8080);
