import multer from "multer";

// multer help in uploading the photos on cloudinary

export const upload = multer({storage: multer.diskStorage({})})
