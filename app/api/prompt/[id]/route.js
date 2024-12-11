import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const response = await Prompt.findById(params.id).populate("creator");
    if (!response) return new Response({ message: "Not found" });
    return new Response(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Prompt fetch failed" + error.message }),
      {
        status: 500,
      }
    );
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const { prompt, tag } = await req.json();
    await connectDB();
    const response = await Prompt.findByIdAndUpdate(
      params.id,
      {
        prompt: prompt,
        tag: tag,
      },
      { new: true }
    );
    if (!response) return new Response({ message: "Not found" });
    return new Response(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Prompt update failed" + error.message }),
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    const response = await Prompt.findByIdAndDelete(params.id);
    if (!response) return new Response({ message: "Not found" });
    return new Response(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Prompt delete failed" + error.message }),
      {
        status: 500,
      }
    );
  }
};

