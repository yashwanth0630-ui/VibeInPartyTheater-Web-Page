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

console.log("🚀 Starting Deployment to InfinityFree...");

// 1. Build the project
console.log("📦 Building project...");
try {
    execSync("npm run build", { stdio: 'inherit' });
} catch (error) {
    console.error("❌ Build failed. Aborting deployment.");
    process.exit(1);
}

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

// 2. Prepare upload list
const distFiles = fs.existsSync("dist") ? getAllFiles("dist") : [];
const uploadList = distFiles.map(file => ({
    local: file,
    remote: path.posix.join(config.remotePath, path.relative("dist", file).replace(/\\/g, '/'))
}));

// Add .htaccess
if (fs.existsSync(".htaccess")) {
    uploadList.push({
        local: ".htaccess",
        remote: path.posix.join(config.remotePath, ".htaccess")
    });
}

// 3. Delete index2.html if it exists on server
console.log("🧹 Attempting to remove system index2.html from server...");
try {
    // We use a dummy file or just a quote command. -Q runs before transfer.
    // Since we don't want to fail if it's missing, we ignore errors.
    const deleteCmd = `curl.exe -u "${config.username}:${config.password}" -Q "-DELE /htdocs/index2.html" "ftp://${config.host}/htdocs/" --silent --max-time 10`;
    execSync(deleteCmd);
    console.log("✅ Requested deletion of index2.html");
} catch (e) {
    console.log("ℹ️ index2.html was likely already gone or not accessible.");
}

// 4. Upload files
console.log(`📤 Found ${uploadList.length} files to upload.`);

uploadList.forEach((item, index) => {
    const encodedRemoteFile = item.remote.split('/').map(segment => encodeURIComponent(segment)).join('/');
    console.log(`[${index + 1}/${uploadList.length}] Uploading ${item.local} -> ${item.remote}`);
    
    try {
        const command = `curl.exe -u "${config.username}:${config.password}" --ftp-create-dirs -T "${item.local}" "ftp://${config.host}${encodedRemoteFile}" --silent`;
        execSync(command);
    } catch (error) {
        console.error(`❌ Failed to upload ${item.local}: ${error.message}`);
    }
});

console.log("\n✨ Deployment complete! Your site should now be live at InfinityFree.");
console.log("🔗 Check: https://vibeinparty.wuaze.com");
console.log("💡 Pro Tip: If you still see the 'Coming Soon' page, try Ctrl+F5 or an Incognito window.");
