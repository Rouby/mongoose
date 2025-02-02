import mongoose, { connect } from 'mongoose';
import { expectType } from 'tsd';

// Promise
expectType<Promise<typeof mongoose>>(connect('mongodb://127.0.0.1:27017/test'));
expectType<Promise<typeof mongoose>>(connect('mongodb://127.0.0.1:27017/test', {}));
expectType<Promise<typeof mongoose>>(connect('mongodb://127.0.0.1:27017/test', { bufferCommands: true }));

// Callback
expectType<void>(connect('mongodb://127.0.0.1:27017/test', (err: Error | null) => {
  return;
}));
expectType<void>(connect('mongodb://127.0.0.1:27017/test', {}, (err: Error | null) => {
  return;
}));
expectType<void>(connect('mongodb://127.0.0.1:27017/test', { bufferCommands: true }, (err: Error | null) => {
  return;
}));
