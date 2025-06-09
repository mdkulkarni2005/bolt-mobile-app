import cors from 'cors';
import express from 'express';
import { prismaClient } from 'db/client';
import Anthropic from '@anthropic-ai/sdk'
import { systemPrompt } from './systemPrompt';
import { ArtifactProcessor } from './parser'
import { onFileUpdate, onShellCommand } from './os'


const app = express();
app.use(cors());
app.use(express.json());

app.post("/prompt", async (req, res) => {
    const { prompt, projectId } = req.body;
    const client = new Anthropic()

    await prismaClient.prompt.create({
        data: {
            content: prompt,
            projectId,
            type: 'USER'
        }
    })

    const appPrompt = await prismaClient.prompt.findMany({
        where: {
            projectId,
        },
        orderBy: {
            createdAt: 'asc'
        }
    })
})