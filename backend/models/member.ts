import mongoose from "mongoose";
import { TMember } from "types/shared/member";
// Member model
const Member = mongoose.model<Required<TMember>>(
    "Member",
    new mongoose.Schema<Required<TMember>>({
      photo: {type: String, required: true},
      name: {type: String, required: true},
      position: {type: String, required: true},
      bio: {type: String, required: true},
      status: {type: String, required: true, enum: ['active', 'inactive']},
    })
  );
  
  export { Member };
 