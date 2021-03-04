//
const base64 = require("urlsafe-base64")

// ここにBase64形式の画像データが入る
const post_base64_img = ""

const decode_data = base64.decode(post_base64_img.replace("data:image/png;base64,", ""))

const AWS = require("aws-sdk")

const config = {
    accessKeyId: "xxxxx",
    secretAccessKey: "xxxxx",
    region: "region"
}

AWS.config.update(config)
const params = {
    Bucket: "bucket-name",
    Key: `/file_name.png`,
    Body: decode_data,
    ContentType: "image/png"
}
const s3 = new AWS.S3()

s3.putObject(params,(err, data) => {
    if(err){
        console.log("失敗")
        return
    }
    console.log("upload完了")
})
