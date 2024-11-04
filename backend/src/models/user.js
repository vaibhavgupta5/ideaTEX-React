import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define a schema for team members
const TeamMemberSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  library_id: { type: String, required: true },
  mobile_number: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
});

// Define the main user schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  library_id: { type: String, required: true },
  mobile_number: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  team_name: { type: String, required: true },
  team: { type: [TeamMemberSchema], default: [] },
});

// Export the model
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
