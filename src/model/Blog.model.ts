import mongoose, {Document, Schema} from "mongoose";

export interface IBlog extends Document {
    title: String,
    body: String,
    image: String,
    createAt: Date,
}

const BlogSchema : Schema = new Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    body : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
});

export default mongoose.model<IBlog>('Blog', BlogSchema);
