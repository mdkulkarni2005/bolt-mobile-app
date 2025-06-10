const BASE_WORKER_DIR = "/tep/bolty-worker"

if(!Bun.file(BASE_WORKER_DIR).exists()) {
    Bun.write(BASE_WORKER_DIR, "");
}

export async function onFileUpdate(filePath: string, fileContent: string) {
    console.log(`File updated: ${filePath}`);
    await Bun.write (`${BASE_WORKER_DIR}/${filePath}`, fileContent);
}

export function onShellCommand(shellCommand: string) {
    const commands = shellCommand.split("&&")
    for (const command of commands) {
        console.log(`Running command: ${command}`)
        const result = Bun.spawnSync({cmd: command.trim().split(" "), cwd: BASE_WORKER_DIR})
        console.log(result.stdout)
        console.log(result.stderr.toString())
    }
}