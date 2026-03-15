$ErrorActionPreference = "Stop"

$port = 3000
$projectRoot = Split-Path -Parent $PSScriptRoot
$serverProcess = $null
$startedServer = $false

function Wait-ForLocalServer {
    param(
        [int]$Port,
        [int]$TimeoutSeconds = 30
    )

    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)

    while ((Get-Date) -lt $deadline) {
        try {
            Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$Port" -Method Head | Out-Null
            return
        } catch {
            Start-Sleep -Milliseconds 500
        }
    }

    throw "Local server on port $Port did not become ready in time."
}

try {
    $existingServer = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1

    if ($existingServer) {
        Write-Host "Using existing local server on port $port."
    } else {
        Write-Host "Starting local server on port $port..."
        $serverProcess = Start-Process -FilePath "cmd.exe" `
            -ArgumentList "/c", "npx http-server . -p $port -c-1" `
            -WorkingDirectory $projectRoot `
            -PassThru `
            -WindowStyle Hidden
        $startedServer = $true
    }

    Wait-ForLocalServer -Port $port

    Write-Host "Local server is ready: http://127.0.0.1:$port"
    Write-Host "Starting public tunnel..."

    & npx.cmd tunnelmole $port
}
finally {
    if ($startedServer -and $serverProcess) {
        taskkill /PID $serverProcess.Id /T /F | Out-Null
    }
}
