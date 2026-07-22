import cloudinary from "../cloudinary";

export const deleteOldImage = async (imgPublicId: string) => {
  await cloudinary.uploader.destroy(imgPublicId);
};
