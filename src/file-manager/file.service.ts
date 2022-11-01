// import { Injectable } from "@nestjs/common";
// import * as path from 'path'
// import * as uuid from 'uuid'
// import * as fs from 'fs'

// @Injectable()
// export class FileService {

//     createFile(file): any {
//         const fileExtention = file.originalname.split('.').pop()
//         const fileName = uuid.v4() + '.' + fileExtention
//         const filePath = path.resolve(__dirname, '..', 'static')
//         if (!fs.existsSync(filePath)) {
//             fs.mkdirSync(filePath, {recursive: true})
//         }
//         fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)

//         return fileName
//     }
// }