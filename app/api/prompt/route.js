import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, res) => {

  try {
    await connectDB();
    const response = await Prompt.find().populate("creator").catch((e)=>{
      console.log(e+" sdff")
      return new Response(JSON.stringify({ message: "Prompt fetch failed" }), {
        status: 500,
  
      });
    });

    return new Response(JSON.stringify(response));

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Prompt fetch failed" }), {
      status: 500,

    });
  }
};
