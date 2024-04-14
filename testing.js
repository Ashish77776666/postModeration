// import { RekognitionClient, DetectModerationLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
import { AppModule } from './app.module.js';
import cors from 'cors';
const accessKeyId = 'AKIA5BIGAZEAMZTZAKN5';
const secretAccessKey = 'KQ0VZf7YaHbLlV1q2lAnBQOa7Td1CUIgijhskxGd';
const region = 'us-east-1'; // Update if your region is different
const client = new RekognitionClient({
    credentials: {
        accessKeyId,
        secretAccessKey
    },
    region
});
const photo = 'female.jpg'; // Replace with the path to your image file
import { promises as fs } from 'fs';

async function readFile(filePath) {
    const data = await fs.readFile(filePath);
    return new Uint8Array(data);
}

(async () => {
    try {
        const imageBytes = await readFile(photo);

        const input = {
            Image: {
                Bytes: imageBytes
            }
        };

        const command = new DetectModerationLabelsCommand(input);
        const response = await client.send(command);
        const labels = response.ModerationLabels;

        if (labels && labels.length > 0) {
            console.log("Your image contains:");
            for (const label of labels) {
                console.log(label.Name); // Flag image as inappropriate
            }
        } else {
            console.log("Your image is appropriate");
        }


    } catch (error) {
        console.error(error);
    }
})();
