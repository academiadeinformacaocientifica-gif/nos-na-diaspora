# Script de Automacao para o GitHub
$git_exe = "C:\Program Files\Git\bin\git.exe"

# Le o token de um arquivo local (ignorado pelo Git)
$token_file = Join-Path $PSScriptRoot ".git-token.local"
if (!(Test-Path $token_file)) {
    Write-Error "Arquivo de token nao encontrado: $token_file"
    Write-Host "Crie o arquivo .git-token.local com seu token do GitHub."
    exit
}
$repo_token = (Get-Content $token_file -Raw).Trim()
$repo_url = "https://$($repo_token)@github.com/academiadeinformacaocientifica-gif/nos-na-diaspora.git"

Write-Host "`n--- Iniciando o upload ---" -ForegroundColor Cyan

# 1. Verifica Git
if (!(Test-Path $git_exe)) {
    Write-Error "Git nao encontrado em $git_exe"
    exit
}

# 2. Inicializa se necessario
if (!(Test-Path .git)) {
    & $git_exe init
    Write-Host "Repositorio inicializado."
}

# 3. Configura Remote
& $git_exe remote remove origin 2>$null
& $git_exe remote add origin $repo_url
Write-Host "Remote configurado."

# 4. Detecta o branch atual
$branch = & $git_exe branch --show-current
if (-not $branch) { $branch = "master" }
Write-Host "Branch detectado: $branch"

# 5. Commit
& $git_exe add .
& $git_exe commit -m "Atualizacao automatica via VS Code"
Write-Host "Commit concluido."

# 6. Push
Write-Host "Enviando arquivos..." -ForegroundColor Yellow
& $git_exe push -u origin $branch -f

if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCESSO: O projeto ja esta no GitHub." -ForegroundColor Green
}
else {
    Write-Host "ERRO: Ocorreu um problema no push." -ForegroundColor Red
}

Write-Host "`n--- Concluido ---"
