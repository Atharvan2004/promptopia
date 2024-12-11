import { Schema, model, models} from 'mongoose'

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^[a-zA-Z0-9]{8,20}$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image:{
    type:String
  }
});

//In a normal live server, we would make a model User and export it.
//But for serverless we will check if the model exists
//"models" object stores all registered models,and checking with it saves reinitialising the model

// const User = model("User", userSchema);
// export default User;



const User = models.User || model("User", userSchema);
export default User;