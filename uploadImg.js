const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");

const form = new FormData();
form.append("file", fs.createReadStream(".src/images/Gramoxone 250ml.jpg"));
form.append("fileName", "bibit-jagung.jpg");

axios.post("https://upload.imagekit.io/api/v1/files/upload", form, {
  headers: {
    ...form.getHeaders(),
    Authorization: "Basic " + Buffer.from("private_YY5LLcOk9YmVOgk2jFOT8QQxmyk=").toString("base64")
  },
})
.then(res => {
  console.log("✅ Upload berhasil!");
  console.log("URL Gambar:", res.data.url);
})
.catch(err => console.error("❌ Upload gagal:", err.response?.data || err.message));
