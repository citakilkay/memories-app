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
    //console.log("test1");
    //console.log("File Path is here:", file.tempFilePath);
    fs.readFile(file.tempFilePath, (err, data) => {
        //console.log("Datamız burada: ", data);
        if (err) console.log("File Read Error: ", err);
        const uploadParams = {
            Bucket: bucketName,
            Key: file.name,
            Body: data
        }
        s3.createBucket( () => {s3.upload(uploadParams, (err, data) => {
            //console.log("Bucket Datası: ", data);
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
    //console.log("This is filekey:", fileKey)
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    //console.log("This is params:", downloadParams)
    return s3.getObject(downloadParams).createReadStream()
}