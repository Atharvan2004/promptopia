import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req,{params}) => {
  try {
    await connectDB();
    
    const response = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    console.log(response)
    return new Response(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Prompt fetch failed"+error.message }), {
      status: 500,
    });
  }
};
