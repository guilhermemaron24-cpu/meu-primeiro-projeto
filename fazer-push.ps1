# Script para fazer push dos arquivos para o GitHub
# Execute este script no PowerShell

Write-Host "=== Fazendo Push para GitHub ===" -ForegroundColor Cyan

# Verificar status
Write-Host "`n1. Verificando status..." -ForegroundColor Yellow
git status

# Adicionar arquivos
Write-Host "`n2. Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer commit
Write-Host "`n3. Fazendo commit..." -ForegroundColor Yellow
git commit -m "Adiciona portfólio completo com efeitos visuais e guias"

# Fazer push
Write-Host "`n4. Fazendo push para GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`n=== Concluído! ===" -ForegroundColor Green
Write-Host "Acesse: https://github.com/guilhermemaron24-cpu/meu-primeiro-projeto" -ForegroundColor Cyan

