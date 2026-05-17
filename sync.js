import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const config = {
    remotePath: "/htdocs",
    host: "ftpupload.net",
    username: "if0_41873676",
    password: "0WwFZ1a37c",
    port: 21,
    ignore: [
        ".vscode",
        ".git",
        "node_modules"
    ]
};

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (config.ignore.includes(file)) return;

        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

const allFiles = getAllFiles(".");
console.log(`Found ${allFiles.length} files to upload.`);

allFiles.forEach(file => {
    const relativePath = path.relative(".", file).replace(/\\/g, '/');
    const remoteFile = path.posix.join(config.remotePath, relativePath);
    // Encode spaces and other special characters for the FTP URL
    const encodedRemoteFile = remoteFile.split('/').map(segment => encodeURIComponent(segment)).join('/');

    console.log(`Uploading ${file} to ${remoteFile}...`);
    
    // We use curl --ftp-create-dirs to ensure remote directories exist
    try {
        const command = `curl.exe -u "${config.username}:${config.password}" --ftp-create-dirs -T "${file}" "ftp://${config.host}${encodedRemoteFile}" --silent`;
        execSync(command);
    } catch (error) {
        console.error(`Failed to upload ${file}: ${error.message}`);
    }
});

console.log("Sync complete.");
