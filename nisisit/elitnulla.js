const directories = {
    home: '/user/home',
    documents: '/user/documents',
    downloads: '/user/downloads'
};

const myObject = {
    directories,
    anotherProperty: 'example'
};

console.log(myObject);

function printDirectoryPath(obj, dirName) {
    if (obj.directories && obj.directories[dirName]) {
        console.log(`The path for ${dirName} is ${obj.directories[dirName]}`);
    } else {
        console.log(`Directory ${dirName} not found.`);
    }
}

printDirectoryPath(myObject, 'documents'); // Output: The path for documents is /user/documents
printDirectoryPath(myObject, 'music');     // Output: Directory music not found.
