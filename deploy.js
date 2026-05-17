import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const config = {
    remotePath: "/htdocs",
    host: "ftpupload.net",
    username: "if0_41873676",
    password: "0WwFZ1a37c",
    port: 21
};

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

// 1. Get all files from the 'dist' folder
const distFiles = fs.existsSync("dist") ? getAllFiles("dist") : [];
console.log(`Found ${distFiles.length} files in 'dist' to upload.`);

// 2. Add the .htaccess file from the root
const uploadList = distFiles.map(file => ({
    local: file,
    remote: path.posix.join(config.remotePath, path.relative("dist", file).replace(/\\/g, '/'))
}));

if (fs.existsSync(".htaccess")) {
    uploadList.push({
        local: ".htaccess",
        remote: path.posix.join(config.remotePath, ".htaccess")
    });
}

uploadList.forEach(item => {
    // Encode spaces and other special characters for the FTP URL
    const encodedRemoteFile = item.remote.split('/').map(segment => encodeURIComponent(segment)).join('/');

    console.log(`Uploading ${item.local} to ${item.remote}...`);
    
    try {
        const command = `curl.exe -u "${config.username}:${config.password}" --ftp-create-dirs -T "${item.local}" "ftp://${config.host}${encodedRemoteFile}" --silent`;
        execSync(command);
    } catch (error) {
        console.error(`Failed to upload ${item.local}: ${error.message}`);
    }
});

console.log("Deployment complete. Your site should now be live!");
