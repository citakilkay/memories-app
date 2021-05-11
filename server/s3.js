import S3 from "aws-sdk/clients/s3.js";
import 'dotenv/config.js';
import fs from 'fs';

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3( {
    bucketName,
    region,
    accessKey,
    secretKey
})

export const uploadFile = (file) => {
    fs.readFile(file.tempFilePath, (err, data) => {
        if (err) console.log("File Read Error: ", err);
        const uploadParams = {
            Bucket: bucketName,
            Key: file.name,
            Body: data
        }
        s3.createBucket( () => {s3.upload(uploadParams, (err, data) => {
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error("File Unlink Error: ",err);
                }
                console.log('Temp File Delete');
            });
            console.log("PRINT FILE:", file);
        })});
    })
    console.log("test2");
}

export const downloadFile = (fileKey) => {

    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }

    return s3.getObject(downloadParams).createReadStream()
}