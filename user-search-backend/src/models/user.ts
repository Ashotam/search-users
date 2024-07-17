import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  number: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  number: { type: String, required: false },
});

export default mongoose.model<IUser>('User', UserSchema);