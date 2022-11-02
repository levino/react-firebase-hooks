import { addDoc, collection } from 'firebase/firestore';
import { db } from '../test/firebase';

describe('useDocument hook', () => {
  test('begins in loading state', async () => {
    const { id } = await addDoc(collection(db, 'test'), {});
    expect(id).toHaveLength(20);
  });
});
