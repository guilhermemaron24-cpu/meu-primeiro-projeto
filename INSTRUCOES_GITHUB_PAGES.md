# 📚 Instruções para Git Push e GitHub Pages

## 🚀 Passo 1: Fazer Git Push

### Opção A: Usando o Terminal (Recomendado)

1. **Abra o PowerShell ou Git Bash** no diretório do projeto

2. **Verifique o status:**
   ```bash
   git status
   ```

3. **Se houver conflitos, faça pull primeiro:**
   ```bash
   git pull origin main
   ```
   - Se abrir um editor, pressione `Esc` e digite `:wq` e Enter (no Vim)
   - Ou simplesmente feche o editor se for outro

4. **Adicione os arquivos:**
   ```bash
   git add .
   ```

5. **Faça o commit:**
   ```bash
   git commit -m "Adiciona portfólio completo com efeitos visuais"
   ```

6. **Faça o push:**
   ```bash
   git push origin main
   ```

### Opção B: Usando GitHub Desktop (Mais Fácil)

1. Abra o **GitHub Desktop**
2. Você verá os arquivos modificados
3. Escreva uma mensagem de commit (ex: "Adiciona portfólio completo")
4. Clique em **"Commit to main"**
5. Clique em **"Push origin"**

---

## 🌐 Passo 2: Configurar GitHub Pages

### Método 1: Através do Site do GitHub (Mais Fácil)

1. **Acesse seu repositório no GitHub:**
   - Vá para: `https://github.com/guilhermemaron24-cpu/meu-primeiro-projeto`

2. **Vá em Settings:**
   - Clique na aba **"Settings"** (no topo do repositório)

3. **Encontre a seção Pages:**
   - No menu lateral esquerdo, role até encontrar **"Pages"**
   - Ou acesse diretamente: `https://github.com/guilhermemaron24-cpu/meu-primeiro-projeto/settings/pages`

4. **Configure o Source:**
   - Em **"Source"**, selecione: **"Deploy from a branch"**
   - Em **"Branch"**, selecione: **"main"**
   - Em **"Folder"**, selecione: **"/ (root)"**
   - Clique em **"Save"**

5. **Aguarde alguns minutos:**
   - O GitHub vai processar e publicar seu site
   - Você verá uma mensagem verde: "Your site is live at..."

6. **Acesse seu site:**
   - Seu site estará disponível em:
   - `https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/`
   - Ou: `https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/index.html`

### Método 2: Usando GitHub Actions (Avançado)

Se o método 1 não funcionar, você pode criar um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## ✅ Verificação

### Como saber se funcionou:

1. **No GitHub:**
   - Vá em **Settings > Pages**
   - Você verá: "Your site is live at [URL]"

2. **Acesse a URL:**
   - Abra o link fornecido no navegador
   - Seu portfólio deve aparecer!

3. **Tempo de espera:**
   - Primeira publicação: 5-10 minutos
   - Atualizações futuras: 1-3 minutos

---

## 🔧 Solução de Problemas

### Problema: "Page build failed"

**Solução:**
- Verifique se o arquivo `index.html` está na raiz do repositório
- Certifique-se de que não há erros de sintaxe no HTML/CSS/JS

### Problema: "404 Not Found"

**Solução:**
- Aguarde alguns minutos (pode levar até 10 minutos na primeira vez)
- Verifique se o branch está configurado como "main"
- Certifique-se de que o arquivo `index.html` existe

### Problema: "Site not found"

**Solução:**
- Verifique se o repositório é público (não privado)
- Confirme que o GitHub Pages está habilitado em Settings > Pages

### Problema: Imagens não aparecem

**Solução:**
- Verifique os caminhos das imagens no HTML
- Certifique-se de que a pasta `public/` foi commitada
- Use caminhos relativos: `public/foto curso.jpeg` (não caminhos absolutos)

---

## 📝 Checklist Final

Antes de publicar, verifique:

- [ ] Todos os arquivos foram commitados
- [ ] O push foi feito com sucesso
- [ ] O arquivo `index.html` está na raiz
- [ ] As imagens estão na pasta `public/`
- [ ] Os caminhos das imagens estão corretos no HTML
- [ ] O repositório é público
- [ ] GitHub Pages está habilitado

---

## 🎉 Pronto!

Depois de seguir esses passos, seu portfólio estará online em:
**https://guilhermemaron24-cpu.github.io/meu-primeiro-projeto/**

---

## 📞 Comandos Rápidos (Copiar e Colar)

```bash
# Verificar status
git status

# Adicionar tudo
git add .

# Fazer commit
git commit -m "Adiciona portfólio completo"

# Fazer push
git push origin main
```

---

**Última atualização:** 02/12/2025

