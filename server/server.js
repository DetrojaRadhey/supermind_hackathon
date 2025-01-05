require('dotenv').config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ 
    server,
    verifyClient: (info) => {
        const origin = info.origin || info.req.headers.origin;
        return origin === 'https://supermind-hackathon-ggwx.vercel.app';
    }
});


app.use(cors({
    origin: ['https://supermind-hackathon-ggwx.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());


const connections = new Map();


wss.on('error', (error) => {
    console.error('WebSocket Server Error:', error);
});

wss.on('connection', (ws) => {
    console.log('Client connected');
    const requestId = Math.random().toString(36).substring(7);
    connections.set(requestId, ws);

    ws.on('error', (error) => {
        console.error('WebSocket Error:', error);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        connections.delete(requestId);
    });

    ws.send(JSON.stringify({ type: 'requestId', requestId }));
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/chat', async (req, res) => {
    const { input_value, requestId } = req.body;
    const ws = connections.get(requestId);

    if (!ws) {
        return res.status(400).json({ error: 'WebSocket connection not found' });
    }

    try {
        const response = await axios.post(
            'https://api.langflow.astra.datastax.com/lf/b0fe4197-d788-4433-978a-2d8ad02749cc/api/v1/run/d30fd3e6-1aea-49f7-b5a1-e4b72b465e88?stream=false',
            {
                input_value,
                output_type: 'chat',
                input_type: 'chat',
                tweaks: {
                    "ParseData-bU2Lk": {},
                    "SplitText-s45X9": {},
                    "OpenAIModel-Bunci": {},
                    "ChatOutput-8sI0F": {},
                    "AstraDB-66x6b": {},
                    "File-j3YRd": {},
                    "ChatInput-iAwEu": {},
                    "CombineText-1kBZ6": {},
                    "TextInput-upHmt": {}
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.APPLICATION_TOKEN}`
                }
            }
        );

        const message = response.data.outputs[0].outputs[0].results.message.text;
       
        ws.send(JSON.stringify({ type: 'response', message }));
        res.json({ status: 'Processing' });
        
    } catch (error) {
        ws.send(JSON.stringify({ type: 'error', message: error.message }));
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

