# 🚀 Instruções para Fazer Push Manualmente

O terminal está abrindo o editor Vim. Siga estas instruções:

## ⚠️ Se o Vim estiver aberto:

1. **Pressione `Esc`** (para sair do modo de inserção)
2. **Digite:** `:q!` e pressione **Enter** (para sair sem salvar)
3. **OU** se quiser salvar: `:wq` e pressione **Enter**

---

## 📝 Opção 1: Usar o Script PowerShell (Mais Fácil)

1. **Feche qualquer terminal que esteja aberto**

2. **Abra um NOVO PowerShell** na pasta do projeto:
   - Clique com botão direito na pasta
   - Selecione "Abrir no Terminal" ou "Open in Terminal"

3. **Execute o script:**
   ```powershell
   .\fazer-push.ps1
   ```

4. Se pedir permissão, execute:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

---

## 📝 Opção 2: Comandos Manuais (Passo a Passo)

1. **Feche qualquer terminal/Vim que esteja aberto**

2. **Abra um NOVO PowerShell** na pasta do projeto

3. **Execute os comandos um por um:**

```powershell
# 1. Verificar status
git status

# 2. Adicionar arquivos
git add .

# 3. Fazer commit (com mensagem)
git commit -m "Adiciona portfólio completo"

# 4. Fazer push
git push origin main
```

4. **Se pedir login:**
   - Use seu **username** do GitHub
   - Use um **Personal Access Token** (não sua senha)
   - Para criar token: https://github.com/settings/tokens

---

## 📝 Opção 3: Usar GitHub Desktop (Mais Fácil)

1. **Baixe o GitHub Desktop** (se não tiver):
   - https://desktop.github.com/

2. **Abra o GitHub Desktop**

3. **Faça login** com sua conta GitHub

4. **Abra o repositório:**
   - File > Add Local Repository
   - Selecione a pasta: `C:\PROJETOS GUILHERME\PROJETO 1\meu-primeiro-projeto`

5. **Você verá os arquivos modificados**

6. **Escreva uma mensagem:** "Adiciona portfólio completo"

7. **Clique em "Commit to main"**

8. **Clique em "Push origin"** (botão no topo)

9. **Pronto!** ✅

---

## 🔍 Verificar se Funcionou

1. Acesse: https://github.com/guilhermemaron24-cpu/meu-primeiro-projeto
2. Você deve ver todos os arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `public/`
   - `GUIA_GITHUB_PAGES_PRIMEIRA_VEZ.md`
   - `INSTRUCOES_GITHUB_PAGES.md`

---

## ⚠️ Se Ainda Não Funcionar

### Problema: "Authentication failed"

**Solução:**
1. Vá em: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Dê um nome: "Meu Portfolio"
4. Selecione escopo: `repo` (marcar tudo)
5. Clique em "Generate token"
6. **COPIE O TOKEN** (você só verá uma vez!)
7. Use este token como senha no push

### Problema: "Merge conflict"

**Solução:**
```powershell
# Abortar merge
git merge --abort

# Tentar novamente
git pull origin main --no-edit
git push origin main
```

---

## ✅ Depois do Push

Após fazer o push com sucesso, siga o guia:
**`GUIA_GITHUB_PAGES_PRIMEIRA_VEZ.md`**

Para configurar o GitHub Pages!

---

**Última atualização:** 02/12/2025

